#!/bin/bash

#getting date and time
date=$(date +'%Y-%m-%d')
#clear title
unset title
#loop to ensure input is received
boolean=0
until [[ -n "${title}" ]] ; do
        read -r -p 'Title: ' title
done

#lowercase title variable
lowertitle=$(echo $title | tr '[:upper:]' '[:lower:]')
#changing spaces to '-' characters
dashtitle=$(echo $lowertitle | tr ' ' '-')
#set target file name
targetfile="_posts/$date-$dashtitle.md"
#adding the front matter
cat >> "$targetfile" <<EOF
---
layout: post
title: "$title"
date: $date
---

EOF

#opening new file in whatever editor
"${EDITOR:-vim}" "${targetfile}"
