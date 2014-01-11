---
layout: default_zh
title: Rocaloid
---

**项目博客**

---


<div id="home">
	<ul class="posts">
	{% for post in site.posts %}
		{% if post.categories contains 'blog' %}
			{% if post.categories contains 'zh' %}
			<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ post.url }}">{{ post.title }}</a></li>
			{% endif %}
		{% endif %}
	{% endfor %}
	</ul>
</div>

