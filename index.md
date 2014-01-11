---
layout: default_en
title: Rocaloid
---

Welcome to the world of Rocaloid!
---

<div id="home">
	<ul class="posts">
	{% for post in site.posts %}
		{% if post.categories contains 'en' %}
			<li><span>{{ post.date | date_to_string }}</span> &raquo; <a href="{{ site.baseurl }}{{ post.url }}">{{ post.title }}</a></li>
		{% endif %}
	{% endfor %}
	</ul>
</div>
