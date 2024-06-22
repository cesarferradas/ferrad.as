---
title: Blog
layout: page
---

{% for post in site.posts %}
<article>
  <p>
    <a href="{{ post.url }}">{{ post.title }}</a>
    <br>
    <small>{{ post.date | date_to_string }}</small>
  </p>
</article>
{% endfor %}
