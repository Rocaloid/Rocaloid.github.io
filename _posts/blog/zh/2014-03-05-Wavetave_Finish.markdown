---
layout: blog_zh
title:  "实验性项目Wavetave完成"
date:   2014-03-05
categories: blog zh
tags: publish finish Wavetave MinCVE
---

&emsp;&emsp;Wavetave是一个语音信号分析/处理沙箱，在Rocaloid项目中用来实验新算法。

&emsp;&emsp;Wavetave的子项目MinCVE旨在打造一个**迷你的，不完整**的CVE3.5合成引擎，验证新算法的可行性。

&emsp;&emsp;历时两个月，这个项目终于完成了。MinCVE使用了SMS(频谱建模合成)和EpR(激励叠加共振)模型等技术，并在此基础上作了若干改进。这将成为日后CVE3.5构建的基础。

&emsp;&emsp;目前MinCVE已经能实现如下语音处理功能，而合成质量较CVE3有明显提升:

* &emsp;语音的时长缩放

* &emsp;语音的音调调整

* &emsp;辅音-元音的衔接

* &emsp;元音-元音的过渡

* &emsp;元音音色调整

* &emsp;气音的调整

&emsp;&emsp;即使MinCVE只是个迷你且不完全的CVE3.5，它已经包含了3000行octave和700行C++代码。这预示了Rocaloid3将是个更大的工程。Rocaloid3马上将进入新一轮的开发，预计后端部分需要7个月完成。

&emsp;&emsp;我们还计划于这个月在b站投一个视频，基本上是这两月的开发进度汇报。

