---
layout: default_zh
title: Rocaloid
---

### 项目历史

---

<p></p>

##&emsp;起点

&emsp;&emsp;Rocaloid的开发始于2011年4月，那时作者[@Sleepwalking][1]还是个中二的初中生。正如它的名字，Rocaloid最初的设计目的是让基于[Vocaloid][2]歌声合成软件的虚拟歌手[初音未来][3]唱出中文歌。

&emsp;&emsp;这里不会描述具体的实现方式。总之，从一开始Rocaloid就是个艰巨甚至有些不现实的任务。也许当时作者自己也把它当作一张空头支票了。作者当时只是略懂编程，从未接触过信号处理，仅凭摸索写出了一个基于拼接的语音合成引擎，名曰`CVE(CyberVoice Engine)`。

&emsp;&emsp;作者是个学生，迫于学业压力，花了一年才断断续续地完成初音的中文音源库。待万事俱备，已至2012年8月。

<br />

##&emsp;九月

&emsp;&emsp;2012年的9月凝聚了许多欢乐和痛苦。月初，Rocaloid初代首次成功合成一曲《夕日坂》，然而效果不堪入耳。作者用尽浑身解数，[七次重制](/sub/zh/posts.html)此曲并改进合成软件。无奈作者水平有限，十月初，希望耗尽，将初代最终版本发布于[iVocaloid](http://bbs.ivocaloid.com/thread-109562-1-1.html)。

<br />

##&emsp;涅磐

&emsp;&emsp;两个月后，作者重新分析了初代的失败，决定开发第二代Rocaloid，取名Rocaloid Renaissance，即“复兴”、“重生”之意。

* &emsp;2012年12月，重写CVE。
* &emsp;2013年1月，开始构建第二代初音中文音源库。
* &emsp;2013年3月，第二次重写CVE。
* &emsp;2013年4月，编写发音参数转换器。
* &emsp;2013年5月，第二代音源库初步完成。

&emsp;&emsp;Rocaloid Renaissance的表现相比初代虽有显著提高，可仍不算自然。五月底，希望再次耗尽。作者为寻求帮助，<a href="https://github.com/sleepwalking/rocaloid/tree/Rocaloid-1.6.0-Core-ver.-(VB.Net)">将Rocaloid开源于Github</a>，望高人能够指点二三。

<br />

##&emsp;复出

&emsp;&emsp;虽然6月初在b站的[投稿][4]迎来了不少点击，Github上我们的代码仓库还是冷冷清清。七月初，作者和[@万致远][1]把Rocaloid<a href="https://github.com/sleepwalking/rocaloid/tree/Rocaloid-1.6.0-Core-ver.-(C++)">用C++重写了一遍</a>，但是这个版本马上就被废弃掉了。

&emsp;&emsp;作者认识到自身知识的不足，整个七月都在自学信号处理。理解能力有限，只习得一点皮毛，倒是开拓了眼界，便有了开发下一代——Rocaloid3的打算。暑假里又经过一些摸索，设计出一个新的[算法][5]。作者还考虑了使用初音作音库的版权问题，并发现至此Rocaloid已不必拘泥于特定音库的合成。于是Rocaloid项目的目标转为*通用的跨语言歌声合成*。

&emsp;&emsp;暑假里作者写了一个简陋的[音频信号处理库](https://github.com/Sleepwalking/CVEDSP)，九月初完成Rocaloid3的设计并开始编写。不久后[@Tuxzz][1]加入开发，我们也算有了个开发组。12月，新合成引擎`CVE3`完成，同时Rocaloid的*第一个自己的音源库*也录制完成了，在此感谢@二言的耐心配合和[@AKI][1]的指导工作。

<br />

##&emsp;新起点

&emsp;&emsp;`CVE3`完成后，我们结合新音源库对其进行了一系列测试。

> 每次重写Rocaloid，我们都抱着“至少不会比上个版本差”的期望。

&emsp;&emsp;`CVE3`的发挥很不稳定，某些词句的发音较上一代进步了很多；另一些词句则发挥逊色，甚至不及上一代。

&emsp;&emsp;经过讨论后，我们决定放弃`CVE3`的开发，编写新的引擎`CVE3.5`，并对整个项目进行重构。

&emsp;&emsp;我们认识到，Rocaloid是个长期的项目。要早日实现她，需要汇聚更多的力量。

<br />

[1]: /sub/zh/contact.html "联系" 
[2]: http://www.vocaloid.com "Vocaloid"
[3]: http://www.crypton.co.jp/miku_eng "初音ミク"
[4]: http://www.bilibili.tv/video/av595252/ "Bilibili - 国人自制歌声合成引擎，可让初音唱中文"
[5]: http://www.bilibili.tv/video/av733216/ "Bilibili - 大家还记得那个让初音唱中文的软件吗？"

