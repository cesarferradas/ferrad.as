---
layout: post
title: Why I prefer writing email in plain text
---

In a world of emails full of colours, pictures and gifs, plain text can be a relief.

<!--more-->

Part of simplifying your life includes you digital life. One of the aspect of my digital behaviour I changed recently was to write emails in plain text rather than HTML (HTML allows you to add "prettiness" to your emails with things like bold, images, colours and more). Here are the reasons why I almost exclusively compose email in plain text.

### Size

Behind the scenes, HTML adds a lot of clutter to your messages. Consider the sentence "The quick brown fox jumps over the lazy dog".

If you send an email with this sentence as plain text, and you inspect the raw email data that has been received, this is what you see:

```
Content-Type: text/plain; charset=UTF-8

The quick brown fox jumps over the lazy dog.
```

Now send the email but in HTML format, and the email becomes this:

```
Content-Type: text/html; charset=UTF-8

<!doctype html>
<html>
 <head> 
  <meta charset="UTF-8"> 
 </head>
 <body>
  <div>
   The quick brown fox jumps over the lazy dog.
  </div>
 </body>
</html>
```

There's probably more characters of HTML in the second message than the message itself!

All the HTML you see added is just for a basic sentence. Imagine using things like bold, italics, underlining, bullet points, and so on. Even further, imagine emails that you receive which have complex layouts, images, gifs and many colours. I encourage everyone to inspect the raw email data so you can see all this HTML code.

Now this on its own is not a big deal, but given that [data storage has an environmental impact](https://www.mic.com/p/the-environmental-impact-of-data-storage-is-more-than-you-think-its-only-getting-worse-18017662), it's something to consider. You can do your part by writing only plaintext email, and selecting plaintext emails for newsletters and automated communications if available.

### Security and privacy

Email is a very old technology, and therefore poses serious security challenges in today's advanced technological world. On top of that, HTML is a markup language primarily designed for the web, without emails in mind. Email adopted HTML, not the other way round. Most features in HTML are not really appropriate for emails, and if included can be used by hackers to leak data about you.

Also, have you noticed how the links you click in your HTML emails look? If you hover over them with your cursor, without clicking them, your browser will tell you what they are. They are rarely `nameofthewebsite.com/path-to-relevant-page`. Usually they look more like this:

`https://examplecompany.list-manage.com/track/click?u=ca141153c47e9e2266a4d389e&id=4ce610bb61&e=e8e6cb2077`

But when you click the link, it actually takes you to the original URL you were expecting. What's up with that? Well, these are called tracking links, and are unique to the email sent to you. That means that if you click on that link, the company who sent you the email will know that you've clicked on it. Even more, companies tend to include what's called a "tracking pixel" which is an image of 1 pixel (which you can't see) included in the email. When you open the email, your email client must "fetch" this image from a link. That link, again, is unique to you. With this information, a company knows when you **opened** the email, not only when you click a link within it.

Plain text email avoids this issue by not supporting inline images (instead you must send them as an attachment, separate from the email body) and showing the full URL you're about to click on (these can't be masked behind an HTML "click me" button for example).

### Accessibility

For people with visual impairments, HTML email is a nightmare. In order to navigate the web, visually impaired people usually rely on "screen readers". These try to detect text in well formatted HTML websites and read it out loud for the individual to understand. This technology is good enough for well structured websites, but email is a different story.

Software developers will know that designing an HTML email which looks good in all email clients (Gmail, Yahoo, Exchange, etc) is not an easy task. Usually the final HTML is almost unreadable by a well-seasoned developer! This presents a challenge for screen readers.

Plain text email, on the other hand, is very easy to read by screen readers. After all, it's just one sentence after the next, and a paragraph after the next.

## Next steps

Go to [useplaintext.email](https://useplaintext.email) for further information about how to start living the plain text life! If you want to discuss this topic, [send me a plain text email](/contact) ;)
