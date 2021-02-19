---
layout: post
title: Simplest way to make Python 3 the default on Mac OS
---

On a fresh Mac OS computer, the default is Python 2. Not ideal. Here I show you
the quickest and simplest way to make the default version Python 3.

### 1. Install Python 3

Do this via Homebrew, it's the easiest.

```shell
brew install python@3
```

### 2. Add /usr/local/bin to your path

Homebrew will add `python3` as an executable in `/usr/local/bin`. Add this
directory to your path by running one of the following commands (depending on
your shell preference):

```shell
echo 'export PATH=/usr/local/bin:$PATH' > ~/.bashrc
echo 'export PATH=/usr/local/bin:$PATH' > ~/.zshrc
```

### 3. Symlink python3 to python

Currently the `python` executable is actually Python 2. Try it:

```shell
$ which python && python --version
/usr/local/bin/python
Python 2.X.X
```

We need to replace this executable with the `python3` location, and this can be
achieved by a symbolic link:

```shell
unlink /usr/local/bin/python
ln -s /usr/local/bin/python3 /usr/local/bin/python
```

Now restart your shell, and you should be good to go. Happy coding!

#### But what about pip?

If you've previously installed [`pip`](https://pypi.org/project/pip/) using an
old version of Python, you should re-install it using the `python` executable
which now points to `python3`.

You can do this with the following commands:

```shell
cd ~
curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
which python && python --version # verify it's python 3
python get-pip.py
```

Then you can re-install any packages that you installed globally again.

Any questions? Feel free to [reach out](/#contact).
