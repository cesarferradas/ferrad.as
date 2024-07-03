---
title: Contact
layout: page
excerpt: Contact me
---

Get in touch at <code>c<span id="emlat"> 'at' </span>ferrad.as</code>

I can also be found as:
{% for contact in site.author.contacts -%}
- [{{ contact.handle }}]({{ contact.url }}) on {{ contact.name }}
{% endfor %}

If you see my name or handle anywhere else online, it might not be me.

<script>
  (function () {
    var at = document.getElementById('emlat')
    at.innerText = '@'
  })();
</script>
