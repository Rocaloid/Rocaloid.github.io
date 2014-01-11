---
layout: default_zh
title: Rocaloid
---

欢迎来到Rocaloid的世界!
---

<div id="home">
	<ul class="posts">
	{% for post in site.posts %}
		{% if post.categories contains 'zh' %}
			<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
		{% endif %}
	{% endfor %}
	</ul>
</div>
