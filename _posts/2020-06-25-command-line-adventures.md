---
title: Command line adventures
---

I recently experimented with spending as much time as possible in the command
line. It turns out you can do **a lot** without leaving the shell. But how far
is too far?

Given that [I use Vim as a code
editor](https://cesar.sh/blog/2020/05/09/learning-vim-by-deleting-vimrc/), I'm
already quite comfortable with spending a lot of my working hours looking at a
terminal. I tend to work with split pane views in [iTerm](https://iterm2.com/)
where I code, run tests, use version control, among other things.

So far, these tasks had been mainly related to building software. But because I
wanted to feel more at home with Unix-like shells, I wanted to try and achieve
more tasks via CLI.

## Baby steps

I started nice and easy. I ditched [Postman](https://www.postman.com/) for
`curl` wrapped in a custom function optimised for JSON:

```shell
jurl () {
	curl -LSs -H "Accept: application/json" -H "Content-Type: application/json" "$@" | jq .
}
```

That was fun. I found that finding previous API calls I had made was _much
easier_ using `reverse-i-search` than trying to find one in dozen open tabs in
Postman.

I could reverse search by header, domain, path, method, pretty much anything.

This proved to be a positive experience, so I went further.

## Scripting

Besides the `jurl` function I wrote to simplify JSON requests, I tried other
aliases, functions and even whole shell scripts to automate repetitive tasks.

This taught me a lot. Shell script is an interesting world. I found out about
`set -euxo pipefail`. Game changer. Thanks to
[Tom](https://vaneyckt.io/posts/safer_bash_scripts_with_set_euxo_pipefail/) for
his helpful article on the topic.

This carried over into my professional life too. I added and improved previous
shell scripts we used for testing, running migrations and deploying.

## Communication and scheduling tools

I think this is where I went too far. The company I work for uses Asana for
project management, Slack for messaging and Google Calendar for... well,
calendars.

I tried to move all of these to the command line. Where I couldn't find an
alternative, I tried using these tools via email, which would allow me to "use"
them via a TUI email client like `mutt`.

It was worth a try, and maybe I didn't try it for long enough, but this is
where I think my limit was. I didn't notice an increase in productivity, focus,
or any other benefit. I lost rich visual features like colours and threads, and
input methods like drag and drop.

I quickly reverted back to the 21st century.

## What I learnt

#### The Unix philosophy is awesome

It just continues to impress me. **Everything** can be piped into **everything
else**, pretty much.

Combining different programs (e.g. `grep`, `awk`, `sed`) that do one thing
extremely well is super powerful. Software engineers should take advantage of
these tools.

#### Code is just fancy text

Taking notes in Vim is so much faster, tidy and friction-free. If I'm coding
and have a thought or want to jot a quick to-do, just `:tabe note` it and
forget it.

#### Not everything is better

I tried to use [`mutt`](http://mutt.org/) and [`aerc`](https://aerc-mail.org/)
to read and compose email, but it's just not for me. Same goes with
terminal-based calendars.

It makes sense to stay within the same context (your terminal) when doing
related things (coding). It's okay and perhaps desirable to context-switch to
another environment (your web browser) for other tasks.

I'm happy coding, thinking and producing in the terminal. I'm also happy
communicating, collaborating and cleaning my inbox on Firefox.

## Final thoughts

Artificially "restricting" yourself to the terminal is definitely a good idea
if you're trying to be more comfortable `ssh`ing into servers or just using
powerful Unix programs. I recommend the experience to anyone.

But it's not and should not be an absolute, and we risk losing productivity
(and fun!) if we try to shoehorn all tasks into it.

You gotta have some HTML in life!
