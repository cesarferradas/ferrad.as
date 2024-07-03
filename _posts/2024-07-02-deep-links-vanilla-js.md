---
layout: post
title: "Deep anchor links in 13 lines of plain JavaScript"
updated_at: 2024-07-03
---

Adding clickable "deep anchor links" to the headings of any page of your
website is very simple and can be done with very little code.

We'll be adding a clickable `"#"` icon at the end of each heading, which adds
the `id` of that heading to the URL, allowing the user to copy the URL to share
a deep link to that particular heading on your page.

This simulates the behaviour of tools like
[AnchorJS](https://www.bryanbraun.com/anchorjs/), but AnchorJS is 5.67 KB in
minified size, and the script I will show you is just 338 bytes, unminified.

Here's a demo:

## Demo

The only prerequisite for this to work is that the heading tags should already
have `id` properties on them. For example:

```html
<h3 id="my-subsection">My subsection</h3>
```

This is often done automatically by blogging platforms like
[Jekyll](https://jekyllrb.com/).

Once your headings have `id`s on them, you can add this JS script to your site:

```js
(function() {
  var headings = document.querySelectorAll("h2,h3");
  for (var heading of headings) {
    var l = document.createElement("a");
    l.setAttribute("href", "#" + heading.id);
    l.textContent = "#";
    l.className = "anchor";
    l.style = "padding-left: 8px; text-decoration: none;";
    heading.appendChild(l);
  }
})();
```

The script only adds `<a>` tags to `<h2>` and `<h3>` tags. The reasoning for
this is that the `<h1>` tag should be the title of the page, which is at the
top already. Why would you deep link to that? As for `<h4>` and below, I
personally don't think linking to such a deep level is worth it.

But if you'd still like to link deeper, you can simply add more tags:

```diff
-  var headings = document.querySelectorAll("h2,h3");
+  var headings = document.querySelectorAll("h2,h3,h4,h5");
```

Optionally, if you'd like to hide the `#` icon until someone hovers on the headings, you can achieve this with some CSS:

```css
a.anchor {
  opacity: 0;
}

*:hover>.anchor, a.anchor:hover {
  opacity: 1;
}
```

That's all you really need. AnchorJS is great if you don't already have `id`s
on your headings, if you need to customise the icon, or if you want to link to
parts of the page that are not headings. But for most sites I think the above
tiny script should do 90% of the job.


## Accessibility update

After publishing this post I realised that the above solution is not
accessible: screen readers pick up and read out the `#` at the end of each
title.

For a full explanation on how to remedy this, have a look at
[Are your Anchor Links
Accessible?](https://amberwilson.co.uk/blog/are-your-anchor-links-accessible/),
but in short, below is an improved script. It adds a `<span>` wrapper
around the link and gives it an `aria-hidden="true"` property (we can't add
this property directly on the link because
[it's a focusable element](https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA/Attributes/aria-hidden)).

```js
(function() {
  var headings = document.querySelectorAll("h2,h3");
  for (var heading of headings) {
    var s = document.createElement("span");
    s.className = "anchor";
    s.style = "padding-left: 8px;";
    s.setAttribute("aria-hidden", "true");
    var l = document.createElement("a");
    l.setAttribute("href", "#" + heading.id);
    l.textContent = "#";
    s.appendChild(l); heading.appendChild(s);
  }
})();
```

The script is no longer 10 lines, so I've updated the blog post's title to a
less snappy "in 13 lines"!
