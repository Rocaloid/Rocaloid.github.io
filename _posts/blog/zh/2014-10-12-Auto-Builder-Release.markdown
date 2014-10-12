---
layout: blog_zh
title:  "随时获得最新的Rocaloid-基于MSYS的自动构建环境发布"
date:   2014-10-12
categories: blog zh
tags: publish synthesizer RUCE
---

&emsp;&emsp;Rocaloid和音库的更新速度很快，我们很难做到单独发布每个修订版本，而对于Windows用户自行编译Rocaloid和音库有一定难度，因此我们将MSYS环境和相关工具链打包，制作了这个一键自动下载、构建最新Rocaloid源代码、以及最新音库源代码的工具。

&emsp;&emsp;它的操作完全是傻瓜化的，从头到尾都是以向导形式展开，如图：

![Rocaloid自动下载构建工具、Rocaloid音库自动下载构建工具](/images/Auto-Builder.png)

&emsp;&emsp;从此你只需要每周跑一次向导，就可以获取最新的开发成果。也可以选择下载实验性版本尝尝鲜（但不保证能顺利运行）！

&emsp;&emsp;还有一个好处是，以后你为了更新音库不需要重新下载一个几十M的压缩包了，如果通过“音库自动下载构建工具”，你只需要下载几M大的源代码，在自己的电脑上自动构建。例如二言的音库，源代码只有4MB！

&emsp;&emsp;“音库自动下载构建工具”同时也是一个音库制作环境，关于音库制作方式请见[RUCE 中文音库制作指南](/resources/publications/RUCE1.1.0-alpha3-Soundbank-Tutorial.pdf)。

&emsp;&emsp;当然，这两个自动构建工具未来也会更新的，毕竟Rocaloid目前还处在非常初步的阶段，大的结构修改肯定会有。如果哪天它不管用了，请访问本站检查新的自动构建工具。

####下载
===

&emsp;&emsp;Rocaloid自动下载构建工具+音库自动下载构建工具 [百度网盘下载](http://pan.baidu.com/s/15zv2Y) `.7z` `3MiB + 29MiB`

&emsp;&emsp;Rocaloid自动下载构建工具 [Mega网盘下载](https://mega.co.nz/#!GURDjQiZ!uLGsAMW8FPkUG1C4hMUIvFG2qrvUyV687d4lbqbnF18) `.7z` `29MiB`

&emsp;&emsp;Rocaloid音库自动下载构建工具 [Mega网盘下载](https://mega.co.nz/#!SdRjHLBR!RFdJNvI5rv8BvYUG4Cttl1ER8d3JvZQ1NWWyVaB5xoo) `.7z` `3MiB`

---

&emsp;&emsp;RUCE和Rocaloid音库工具链使用GPLv3授权，随RUCE一同编译发布的CVESVP, CVEDSP2, RFNL使用LGPLv3授权；Rocaloid_Cyan_RUCE使用ODC Open Database License 1.0授权。请遵守相关协议。

&emsp;&emsp;[点击查看ODbL 1.0的概述](http://opendatacommons.org/licenses/odbl/summary/) (英文)。

&emsp;&emsp;
