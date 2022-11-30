---
title: Blog
layout: default
---

# Blog

{% for post in site.posts %}
<h3>
  <a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
  <br/>
  <small>{{ post.date | date_to_string }}</small>
</h3>
{% endfor %}
