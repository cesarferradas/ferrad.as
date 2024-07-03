---
title: Blog
layout: page
description: Blog posts on topics that interest me
---

Writings on topics that interest me. There is no underlying theme, but in
general I write about sustainable software, cybersecurity, personal finance,
productivity and minimalism.

{% for post in site.posts %}
<p>
  <a href="{{ post.url }}">{{ post.title }}</a>
  <br>
  <small>{{ post.date | date_to_string }}</small>
</p>
{% endfor %}
