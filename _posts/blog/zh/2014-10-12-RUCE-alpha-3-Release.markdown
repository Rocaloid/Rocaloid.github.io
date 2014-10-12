---
layout: blog_zh
title:  "RUCE 1.1.0-alpha3发布"
date:   2014-10-12
categories: blog zh
tags: publish synthesizer RUCE
---

&emsp;&emsp;alpha3版本的RUCE较上一版本(alpha2)有了较多改进，同时音库格式也更新了，**不再向下兼容alpha2及alpha1的音库**。

&emsp;&emsp;此版本更新主要有：

* &emsp;对于清辅音处理，使用残余信号合成代替PSOLA合成；

* &emsp;新Flag参数：`u`, `c`, `o`, `S1`, `S2`, `m`, `r`；

* &emsp;新的rudb格式；

* &emsp;工具链大幅改动，增加`editrudb`和`proberudb`组件。

&emsp;&emsp;**RUCE 1.1.0-alpha3是最后一个支持UTAU/Cadencii的版本，之后的版本会使用独立的[API](https://gist.github.com/Sleepwalking/82072796aefe1c2fead2#file-ruce_api-h)。**

####教程
===

&emsp;&emsp;[RUCE 1.1.0-alpha3快速上手](/resources/publications/RUCE1.1.0-alpha3-Tutorial.pdf) `.pdf`

&emsp;&emsp;[RUCE 中文音库制作指南](/resources/publications/RUCE1.1.0-alpha3-Soundbank-Tutorial.pdf) `.pdf`

####下载
===

&emsp;&emsp;RUCE 1.1.0-alpha3 [执行档下载](/resources/binaries/RUCE-1.1.0-alpha3.zip) (for Windows) `.zip` `420KiB`

&emsp;&emsp;源码直接可在Github获得：[https://github.com/Rocaloid](https://github.com/Rocaloid)

&emsp;&emsp;Rocaloid\_Cyan_RUCE1.1.0 [百度网盘下载](http://pan.baidu.com/s/1qWnvSss) (for RUCE1.1.0-alpha3) `.7z` `59Mib`

&emsp;&emsp;Rocaloid\_Cyan_RUCE1.1.0 [Mega网盘下载](https://mega.co.nz/#!qQpwWCAI!WcnhABlCEz-Rj5kEWwQ2W37bvS5xYjpQtqLG2rIUE98) (for RUCE1.1.0-alpha3) `.7z` `59Mib`

&emsp;&emsp;**注：由于Rocaloid开发进度很快，我们未来将降低执行档的发布频率，推荐Windows用户使用[自动构建工具](/blog/zh/2014/10/12/Auto-Builder-Release.html)，可实时获得最新的RUCE。**

---

&emsp;&emsp;RUCE和Rocaloid音库工具链使用GPLv3授权，随RUCE一同编译发布的CVESVP, CVEDSP2, RFNL使用LGPLv3授权；Rocaloid_Cyan_RUCE使用ODC Open Database License 1.0授权。请遵守相关协议。

&emsp;&emsp;[点击查看ODbL 1.0的概述](http://opendatacommons.org/licenses/odbl/summary/) (英文)。

&emsp;&emsp;
