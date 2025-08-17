---
layout: default
title: Latest News
permalink: /news/
---

# Latest News

<ul>
  {% assign news_list = site.data.news | slice: 0, 5 %}
  {% for news in news_list %}
    <li>
      <strong>{{ news.date }}</strong>: {{ news.title }}
    </li>
  {% endfor %}
</ul>
