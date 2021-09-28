---
title: Learn Vim by deleting your .vimrc
layout: post
---

Vim is a great text editor.

Here's why:
1. Awesome keyboard shortcuts to speed up editing
2. It changes the way you think about text (paragraphs, words, characters, etc)
3. It makes you more familiar with working within a terminal

I started using Atom during university, but quickly switched to Vim during my
first professional role. Now it's the only text editor I'm comfortable with
and efficient in.

But, the learning curve is _steep_. Which is why it feels tempting to flatten
the curve by adding to your `.vimrc` so that Vim feels like your old text
editor.

I did that. It was good for a while. But I believe it was hindering my ability
to fully understand Vim's core features, workflows and principles.

Now I maintain a very minimal [Vim
config](https://github.com/cesarferradas/dotfiles/blob/master/.vimrc). I try to use
as many core Vim features as I can. Doing this, I changed the way I thought
about editing text and navigating through a file system.

And the added bonus is that when I `ssh` onto a server which only has vanilla
Vim, I feel at home. I don't miss my plugins or custom shortcuts, because even
though I use some, I still cherish the fundamentals of Vim.
