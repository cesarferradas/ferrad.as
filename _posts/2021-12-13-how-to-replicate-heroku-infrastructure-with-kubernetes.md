---
layout: post
title: "How to replicate Heroku infrastructure with Kubernetes"
---

As a startup trying out a new tech idea, Heroku is a great place to start. You
can deploy your application code easily and all your dependencies are managed
for you. However, once you start seeing real throughput, moving your dynos to
Kubernetes makes a lot of sense. Here we explain how to easily imitate a common
Heroku setup in Kubernetes.

## Heroku and dynos

Let’s first define what a Heroku infrastructure is based on: web and worker
_dynos_.

Dynos are a unit of scaling in Heroku. Each one is a virtualized and isolated
Linux container. To scale your application to deal with more traffic, you can
increase the number of dynos you’re running (either manually or automatically).
These are also ephemeral, meaning they can be shut down and restarted as
needed.

Usually you can split your dynos into two types: web and worker. Web dynos deal
with HTTP traffic and workers are used for asynchronous computation which can
be more time consuming than what the scope of a 30 second web request allows.
You can scale web and worker dynos individually.

So to summarize what you need to have in Kubernetes in order to achieve
feature-parity:

- A container-based way of running one program at once
- Ephemeral containers which can be shut down at short notice
- A way to distinguish types of containers, and scale them separately
- A way to scale the number of each type of containers

## Kubernetes deployments and pods

In K8s, the closest way to mirror a Heroku web and worker setup is to use
deployments and pods.

A [pod](https://kubernetes.io/docs/concepts/workloads/pods/) is defined as “the
smallest deployable units of computing that you can create and manage in
Kubernetes”. This is basically the equivalent of a Heroku dyno. You’ll want to
have one pod definition for web dynos, and one for worker dynos. You can then
define their replication and scaling using
[deployments](https://kubernetes.io/docs/concepts/workloads/controllers/deployment/).
Again, one deployment for web pods, and one for worker pods.

With deployments, you can manually set the number of pod replicas you want, or
you could link the deployment to a [horizontal pod autoscaler](https://kubernetes.io/docs/concepts/workloads/autoscaling/horizontal-pod-autoscale/)
for automatic scaling based on CPU usage. With a horizontal pod autoscaler you
can define the minimum and maximum number of pods for a particular deployment
type, and Kubernetes will handle the rest.

## CPU and Memory

One of the trickiest decisions while migrating over is how much CPU and Memory
each pod should have allocated. In Heroku, you can choose a dyno type and
you’re done. In Kubernetes, you have more control but also more configuration
to set up. Our approach was to configure [resource requests and limits](https://cloud.google.com/blog/products/containers-kubernetes/kubernetes-best-practices-resource-requests-and-limits)
per pod which were roughly equivalent to our dyno types in Heroku. From there,
once your Kubernetes system is live you can tweak if needed.

## Final thoughts

Here we’ve outlined how to directly copy a Heroku infrastructure into
Kubernetes. While this can be helpful for an initial systems migration, it is
almost certainly not ideal. Systems designed for Heroku will likely not be
optimized to run in Kubernetes and take full advantage of its features. So we
encourage you to give this a try, monitor your systems metrics and tweak as
needed.

We hope that you found this helpful! Thank you for reading.

---
_This post was [originally published](https://web.archive.org/web/20220119201811/https://www.herondata.io/blog/how-to-replicate-a-heroku-infrastructure-in-kubernetes)
at [herondata.io](https://herondata.io)_
