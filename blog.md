---
title: Blog
layout: default
---

# Blog

{% for post in site.posts %}
<h3>
  <span>{{ post.date | date_to_string }}</span>
  <a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
</h3>
{% endfor %}
