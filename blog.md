---
title: Blog
layout: default
---

{% for post in site.posts %}
<h4>
  <a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
</h4>
{% endfor %}
