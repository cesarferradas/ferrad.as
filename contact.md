---
title: Contact
layout: page
excerpt: Contact me
---

The best way to get in touch is via email:

<code>contact&#x40;<span style="display: none;">nobots</span>ferrad.as</code>

I can also be found as:
{% for contact in site.author.contacts -%}
- [{{ contact.handle }}]({{ contact.url }}) on {{ contact.name }}
{% endfor %}

If you see my name or handle anywhere else online, it's likely not me.
