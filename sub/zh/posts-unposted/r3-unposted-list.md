---
layout: default_zh
title: Rocaloid
---

###Rocaloid3 未投稿合成测试

---

&emsp;&emsp;下面是相关的博客文章列表：

<div id="home">
	<ul class="posts">
	{% for post in site.posts %}
		{% if post.categories contains 'blog' %}
			{% if post.categories contains 'zh' %}
				{% if post.tags contains 'Rocaloid3' %}
				{% if post.tags contains 'Demo' %}
				<li>
					<span>{{ post.date | date_to_string }}</span> &ensp; &raquo; &ensp; <a href="{{ post.url }}">{{ post.title }}</a>
					<blockquote>{{ post.excerpt }}</blockquote>
				</li>
				{% endif %}
				{% endif %}
			{% endif %}
		{% endif %}
	{% endfor %}
	</ul>
</div>


<br />

<p align="right"><a href="/sub/zh/posts-unposted/index.html">返回</a></p>

