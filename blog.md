---
title: Blog
layout: page
---

Writings on topics that interest me. There is no underlying theme, but in
general I write about sustainable software, cybersecurity, personal finance,
productivity and minimalism.

{% for post in site.posts %}
<article>
  <p>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <br>
    <small>{{ post.date | date_to_string }}</small>
  </p>
</article>
{% endfor %}
