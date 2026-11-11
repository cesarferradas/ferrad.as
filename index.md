---
layout: default
---

## Read [about](/about) me

## See [what I'm doing now](/now)

## [Contact](/contact) me

<h2>
  Read a <a id="random-post" href="/blog/">random blog post</a>
</h2>

<script>
  var posts = [{% for post in site.posts %}"{{ post.url }}"{% unless forloop.last %},{% endunless %}{% endfor %}];
  document.getElementById("random-post").href = posts[Math.floor(Math.random() * posts.length)];
</script>

