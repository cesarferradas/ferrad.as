---
title: Functionality over style
layout: post
---

I've been learning NodeJS recently. As a way to do this, I developed a [URL shortening REST API](https://github.com/cesarferradas/shorturls). Give it a long URL, and it will return a short code that can be shared instead.

Building the backend logic was super fun, fast and seamless. I learnt a lot too. However, a few weeks ago I decided I wanted to add a frontend so I could self-host this service and start using it. I thought I could make a Spanish-friendly version of [TinyURL](https://tinyurl.com) or [Bitly](https://bitly.com), so it's easier to pronounce and say out loud.

This is where things got complicated. So many decisions! Should I go for a microservice architecture, and separate the backend API from the frontend app? Should I use React, or just jQuery? Should I server-side render or let the frontend take care of that? What CSS library should I use? Maybe Bootstrap, but maybe Tailwind.

Eventually I gave up. Looking back I think it was partly because of decision fatigue, but more so because **I was complicating the system more than I had to**. In fact, I was thinking of everything except the core feature: given a long URL, return a short URL.

So faithful to [KISS](https://en.wikipedia.org/wiki/KISS_principle) (not the band), I decided to go back to basics. I used the views feature of ExpressJS (NodeJS micro web framework), and server-side rendered everything. I went for barely any CSS, and didn't even add frontend JavaScript.

The [resulting application](http://linkea.me/) has two pages: the homepage, where you can shorten your URLs, and a summary page of the URL you've created.

I feel liberated. I was able to ship something and get an [MVP](https://en.wikipedia.org/wiki/Minimum_viable_product) out in a day. I was able to do this because I was ruthless in deciding what would make it into the basic, first release.

This got me thinking about something: _functionality is more valuable than looks_.

Think about high-traffic websites that people use every day because they provide something useful. Two examples that come to mind are previously mentioned [TinyURL](https://tinyurl.com), and the old version of [reddit](https://old.reddit.com).

**These websites are UGLY**.

But they provide a great amount of value to their users, so looks don't matter too much.

I'm going to try to keep this in mind when developing applications as a hobby but also professionally. Focus on the basics. Chances are they're enough to provide value.

_Disclaimer: as a full-stack engineer with a backend skew, maybe I would have a slightly different opinion if I could develop beautiful frontends at speed ;)_
