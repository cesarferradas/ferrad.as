---
title: Blog
layout: default
---

<div class="posts">
  {% for post in site.posts %}
  <div class="post">
    <h1 class="post-title">
      <a href="{{ post.url | absolute_url }}">{{ post.title }}</a>
    </h1>
    <div class="post-excerpt">
      {{ post.excerpt }}
    </div>
  </div>
  {% endfor %}
</div>
