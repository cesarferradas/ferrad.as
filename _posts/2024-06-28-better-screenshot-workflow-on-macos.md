---
layout: post
title: "A better screenshots workflow on MacOS"
---

Most of the time, when we take a screenshot, we want to share it straight away.

However, the default setup in MacOS _does not make this easy_: screenshots go
to your desktop, the file names are long, and the files unsorted.

There is a **better, faster** way to take and retrieve screenshots on MacOS.

## The workflow

Here's how simple it could be to share a screenshot:

1. Press `Cmd + Shift + 4` and select the area you want to capture.
1. Go to the website or app you want to share the image to.
1. Hover over the Dock, expand a folder, and drag and drop the image.

Let's set that up. We'll be using the MacOS "Terminal" app for this, so make
sure you open it up.

## Access screenshots in your Dock

Create a screenshots directory in your home folder:

```sh
mkdir ~/Screenshots
```

Now from the Finder app, drag and drop it to your Dock's right side (left of
the Bin icon). This should make it stay in the Dock permanently.

Then, right click on the folder's icon in the Dock, and make sure:
- `"Sort by"` is set to `Date Added`
- `"Display as"` is `Stack`
- `"View content as"` is `Fan`

This will ensure you see your latest screenshot as the first icon of the
folder, and that when you click the icon, the latest image will be the most
accessible.

![screenshot options](/images/snap_opt.png)

Finally, change the folder that screenshots are saved to to this new folder:

```sh
defaults write com.apple.screencapture location ~/Screenshots
```

Now anytime you take a screenshot:
1. It will be saved to the `~/Screenshots` folder.
1. The folder is in your Dock, for easy access.

This should be all you need, but below are a couple of nice improvements that
make the screenshot file names shorter and more readable.

## Simplify the screenshot name

I like file names to be lowercased, so I change the name from "Screenshot" to
"screenshot":

```sh
defaults write com.apple.screencapture name "screenshot"
```

I also find the long dates in the screenshot file name cumbersome. All I want
to know is which is the latest screenshot. An auto-incrementing number would
work just fine.

If you remove the date from the file names:

```sh
defaults write com.apple.screencapture "include-date" 0
```

The files will be called `"screenshot"`, then `"screenshot 1"` and so on. Much
cleaner.

## Result

Bringing it al together, this is how things now look:

When you take a screenshot, it immediately goes to your `Screenshots` folder
which you've pinned to your Dock.

![screenshots folder](/images/snap.png)

When you open the Screenshots directory, you see the most recent screenshot
first, at the bottom:

![stack](/images/snap_result.png)


The number of people that I see using the default MacOS
location, and therefore struggle to find screenshots quickly, is shocking. If
this is you, I hope this saves you some time and makes your experience more
enjoyable.
