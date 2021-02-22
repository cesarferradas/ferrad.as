---
layout: post
title: How to lint Python files using git pre-commit hooks
---

A fast and effective way to avoid unlinted code from sneaking into version
control.

## The problem

I'm sure every developer can relate with this:

1. Write a bunch of code, potentially quite quickly and including
   find-and-replace operations.

2. Commit this code to a feature branch

3. Push to remote

4. Linting fails in the remote CI system

What happened? Well, if you were coding fast, you might have missed linting
warnings provided by your IDE. Or, if you found and replaced a lot of code,
your linting might have not even run in your IDE.

Then you committed to your branch. Now you have a commit with unclean (if not
buggy) code. Ideally all commits that get to your main branch should be
deployable, and this one might not be.

# The solution

How do you avoid this? Enter git pre-commit hooks.

You can tell git to run certain scripts at various stages of your git flow. The
"pre-commit" hook as its name implies runs just before you commit files to the
repo.

You can use this feature to run linting before committing any files. Let's use
`flake8` for this example.

First, create a `.git/hooks/pre-commit` file and make it executable:

```shell
touch .git/hooks/pre-commit
chmod +x .git/hooks/pre-commit
```

Then add this to the file:

```shell
#!/bin/sh

set -u

py_files=$(git diff --cached --name-only | grep ".py" | xargs)

if [ -z "$py_files" ]; then
    echo no Python files, skipping linting
else
    echo linting $py_files
    flake8 $py_files
fi
```

This script is slightly smarter than just running `flake8` on the entire repo.
That can be slow and annoying to wait for every time you commit if you're
committing often (which you probably should).

Instead, the script narrows down the files that we need to lint as much as
possible. It first only looks at the files that have been changed and will be
committed (using `git diff --cached --name-only`). Then it excludes any
non-python files (using `grep .py`).

The result is you only run linting on what's exactly necessary to prevent dirty
commits.

Hope this little script helps you. If it did or you have any feedback, [let me
know](/#contact).
