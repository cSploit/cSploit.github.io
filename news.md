---
title: News
---

{% if site.categories.news.size > 0 %}
  {% for post in site.categories.news %}
  -  {{ post.date | date:"%Y-%m-%d" }} - [{{ post.title }}]({{post.url}})
  {% endfor %}
{% else %}
> no news for now :tired_face:
{% endif %}
