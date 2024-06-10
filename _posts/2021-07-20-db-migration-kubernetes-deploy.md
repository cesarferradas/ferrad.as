---
layout: post
title: How to run database migrations during a Kubernetes deploy
---

When running a Kubernetes cluster, it is usually the case that we want to have
a database (schema) migration run before new application code is released. A
simple trick to do this is to add your migration command as an "init container"
which runs before releasing your main pod container.  Say you have a deployment
of a Python/Flask application as follows:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: flask
  labels:
    app: flask
spec:
  replicas: 3
  selector:
    matchLabels:
      app: flask
  template:
    metadata:
      labels:
        app: flask
    spec:
      containers:
      - name: flask
        image: docker.io/project/my-flask-app
        ports:
        - containerPort: 5000
```

And you're using Flask-Migrate to manage DDL migrations, so the upgrade command is:

```
flask db upgrade
```

### Add an initContainer

You need to change your Kubernetes manifest to include an initContainer block,
where you read from the same image as your Flask app, but you override the
command to run the above migration step instead. So:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: flask
  labels:
    app: flask
spec:
  replicas: 3
  selector:
    matchLabels:
      app: flask
  template:
    metadata:
      labels:
        app: flask
    spec:
      initContainers:
      - name: init-upgrade
        image: docker.io/project/my-flask-app
        command: ["/bin/sh", "-c", "flask db upgrade"]
      containers:
      - name: flask
        image: docker.io/project/my-flask-app
        ports:
        - containerPort: 5000
```

Now whenever you run:

```
kubectl rollout restart deploy flask
```

Kubernetes will wait until the initContainer finished executing before spinning
up a pod with the latest version of your app.

### Define a deployment strategy

You don't want multiple initContainers triggering the db upgrade around the
same time, otherwise you might hit race conditions because the migration has
already been applied by the time the next replica in your deployment tries to
apply it.  Therefore the safest deployment strategy for your deployment is:

```yaml
apiVersion: apps/v1
kind: Deployment
metadata:
  name: flask
  labels:
    app: flask
spec:
  replicas: 3
  selector:
    matchLabels:
      app: flask
  strategy:
    type: RollingUpdate
    rollingUpdate:
      maxSurge: 1
      maxUnavailable: 1
  template:
    metadata:
      labels:
        app: flask
    spec:
      initContainers:
      - name: init-upgrade
        image: docker.io/project/my-flask-app
        command: ["/bin/sh", "-c", "flask db upgrade"]
      containers:
      - name: flask
        image: docker.io/project/my-flask-app
        ports:
        - containerPort: 5000
```

With the above strategy, only one new pod with the latest application code
(which should include migration scripts) will start running at a given time.
The rest will still invoke the migration command but will result in no database
changes.

### Limitations

If you have many more replicas than 3, and you want your deploys to be
completed faster, then maybe a rolling update strategy with `maxSurge` and
`maxUnavailable` of 1 will not suit your needs. Also, if your migration command
should only ever be invoked once per deploy, this won't work. But hopefully
your migration command is idempotent so it doesn't matter if you
run it multiple times.

What do you think of this approach? Do you have a better solution to quickly
integrate migrations into your code deploys? If so, let me know in the
comments.
