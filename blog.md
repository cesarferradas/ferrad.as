---
title: Blog
layout: default
---

<ul class="posts">
  {% for post in site.posts %}
  <li>
    <h4 class="post-title">
      <a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
    </h4>
  </li>
  {% endfor %}
</ul>
