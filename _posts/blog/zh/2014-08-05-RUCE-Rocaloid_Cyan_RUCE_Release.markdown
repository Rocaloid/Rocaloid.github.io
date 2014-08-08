---
layout: blog_zh
title:  "RUCE和Rocaloid_Cyan_RUCE音库发布"
date:   2014-08-05
categories: blog zh
tags: publish synthesizer RUCE soundfont Rocaloid\_Cyan Rocaloid\_Cyan_RUCE
---

&emsp;&emsp;经过半年的不懈努力，我们在八月初完成了RUCE合成引擎及Rocaloid\_Cyan_RUCE音库。

&emsp;&emsp;[RUCE 1.0.0-alpha2下载](/resources/binaries/RUCE-1.0.0-alpha2.zip) `.zip` `328KiB`

&emsp;&emsp;注：alpha2版本修复了`g`性别参数和原resampler不兼容的问题。

###安装方法

> 详细安装步骤见[此处](http://bbs.ivocaloid.com/forum.php?mod=viewthread&tid=127250&page=1)

1. 将`RUCE-1.0.0-alpha2.zip`解压至UTAU安装目录

2. 将Rocaloid\_Cyan_RUCE声库解压至UTAU安装目录的voice文件夹下

3. 按照如下图所示将resampler换成RUCE

![RUCE](/images/RUCE-install.jpg)

> 配置需求

> CPU: Intel Pentium III或以上

> 操作系统: Windows XP或以上

&emsp;&emsp;

&emsp;&emsp;带有原录音资料的[Rocaloid\_Cyan\_RUCE 1.0.0下载](https://mega.co.nz/#!zMZj3aRD!bgKmrx6jpE08Nto2ljEtK-IbEuUDsVrQx23RSHeAJd8) `.7z` `112MiB`

&emsp;&emsp;不带原录音资料的[Rocaloid\_Cyan\_RUCE 1.0.0下载](https://mega.co.nz/#!XcgCjJZA!Z2zLwZf2bgYmUbb_WALwV2qlPZMRNmTxWZYXePyZ-3g) `.7z` `76MiB`

&emsp;&emsp;使用说明请见我们在b站的新投稿([av1376960](http://www.bilibili.com/video/av1376960/))。解压后请先阅读`README.txt`和`LICENSE.txt`。

&emsp;&emsp;

&emsp;&emsp;RUCE和Rocaloid Toolchain组件使用GPLv3授权，随RUCE一同编译发布的CVESVP, CVEDSP2, RFNL使用LGPLv3授权；Rocaloid_Cyan_RUCE使用ODC Open Database License 1.0授权。请遵守相关协议。

&emsp;&emsp;[点击查看ODbL 1.0的概述](http://opendatacommons.org/licenses/odbl/summary/) (英文)。

####Q&A

> Q: 如何安装RUCE或Rocaloid\_Cyan\_RUCE?

> A: 请参考[b站投稿](http://www.bilibili.com/video/av1376960/)。

&emsp;

> Q: Linux上能够使用RUCE吗？

> A: RUCE本身就是在Linux上开发的，引擎本身的编译运行完全没问题。但是目前RUCE缺少一个跨平台的图形前端。可以使用wine utau，但是存在若干缺陷。

&emsp;

> Q: RUCE能否用于Rocaloid\_Cyan\_RUCE以外的UTAU音源？

> A: 抱歉，不能。标准UTAU音源需要重新制作成RUCE音源，但是[投稿](http://www.bilibili.com/video/av1376960/index_4.html)上给出了制作方法。

&emsp;

> Q: 如何制作自己的RUCE音源库？

> A: Rocaloid Toolchain中含有制作RUCE音源库必备的工具，你还需要Audacity音频编辑器。制作方法请参考[投稿](http://www.bilibili.com/video/av1376960/index_4.html)。

&emsp;

> Q: Rocaloid\_Cyan\_RUCE能否被其他UTAU Resampler调用？

> A: 能。但是效果会大打折扣。

&emsp;

> Q: 我能否修改Rocaloid_Cyan_RUCE并二次发布？

> A: 当然可以，我们欢迎一切改进。请遵守ODbL。

&emsp;&emsp;
