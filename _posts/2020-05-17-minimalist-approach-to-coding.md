---
title: A minimalist approach to coding
layout: post
---

Following on from my [previous post](functionality-over-style), I thought I'd write about how minimalism can be applied to developing good software.

This is a good question to ask yourself before building a new system of feature:

> What is the least amount of code I can write to achieve my aim?

Not in a lazy way, but in a _smart_ way. How elegant, simple and performant can your code be? Do you really need all of those extra lines of code just to add a 1% increase in functionality?

Here are a couple of concepts to follow for software engineering minimalism.

## DRY

[Don't Repeat Yourself](https://en.wikipedia.org/wiki/Don%27t_repeat_yourself). If I need to write the same code block two or three times, I usually move it into a function and call it everywhere I need. Simpler to test, maintain and debug. Similarly, if you have a function that already does 90% of what you need, **reuse it**! You can pass optional parameters to that function and check for them to achieve the remaining 10% of functionality, while keeping other calls to that function the same.

## YAGNI

[You Aren't Gonna Need It](https://en.wikipedia.org/wiki/You_aren%27t_gonna_need_it). Focus on the core feature, and don't build things you think you might need in the future. Even if you're _certain_ you'll need them, kick the can down the road. You don't need them _right now_.

For example, when I was developing a URL shortening service, I almost went down the rabbit hole of implementing an email verification and password reset flow. What for!? People need to shorten URLs. Focus on mastering that first, then build other things. You'll get to an MVP faster that way.

## 3rd party libraries

A double-edged sword. Well-tested and reputable libraries can **hugely** reduce the number of lines of code you need to write, because other people have done that for you (and perhaps better than you, too!). That means we can focus on the custom parts of our system and not worry about reinventing the wheel.

**But**, don't go crazy on the libraries. Don't use really dodgy or badly tested ones. Also, if a library adds a lot of unnecessary features you don't need, maybe you're better off re-writing the small piece you need.
