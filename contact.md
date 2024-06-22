---
title: Contact
layout: page
---

Get in touch at <code>c<span id="emlat"> 'at' </span>ferrad.as</code>

I can also be found as:
{% for contact in site.author.contacts -%}
- [{{ contact.handle }}]({{ contact.url }}) on {{ contact.name }}
{% endfor -%}

<script>
  (function () {
    var at = document.getElementById('emlat')
    at.innerText = '@'
  })();
</script>
