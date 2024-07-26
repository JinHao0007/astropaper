---
title: VIVO&IQOO关于i主题不降级导入字体的教程。
description: Modify the code box style
pubDate: 08 20 2023
tags:
  - 技术
sticky: 1
---



VIVO&IQOO关于i主题不降级导入字体的教程。

注：1：本方法仅适用于系统自带的文件管理版本号小于等于6.11.3.0
            若系统自带的文件管理版本号大于6.11.3.0且无法降级的话就不行了，vtools+跳转目录为/data/bbkcore/theme/，看有没有大佬能研究出无root访问/data并读写的办法了（受虐滑稽）

​		2：适用于origin1-3

​		3：本教程初步发在酷安，现已移至个人博客，转载请标明出处。



原理可见酷安大佬@蚔牁枑鼎賸侐跺曚擁鼎俙模恁寁，大佬发的教程很详细了，就是有点散，所以总结一下。
此方法可用于主题，字体，息屏，卡包
需要准备的软件有四个:![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/111.jpeg)
大家应该在大佬那里都能找到，我就不发链接了。
首先，打开i主题，随便找一个免费的字体，这里以“大吉福楷”
为例，下载，下载完后不要应用，


![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/2.jpeg)

![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/3.jpeg)

然后打开系统自带的文件管理，点击上方的两个点，把显示隐藏目录和文件打开。

![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/16.jpeg)



![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/15.jpeg)
之后进入vtools+,选择“跳转到改字体”：

![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/7.jpeg)

会跳转到一个文件夹:

![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/9.jpeg)

进去这个路径:



![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/5.jpeg)

这里面会有你刚下载的字体，把它删掉。
删掉之后，这个文件就会被移动到“最近删除”
这时打开mt管理器，找到这里

![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/14.jpeg)



这里就是对应系统自带的文件管理的“最近删除”的文件夹（图中左边），在这里你可以看到你刚删除的字体（我这里是删过两次，所以有个1，不用在意）
然后找到你要导入的自定义itz字体文件，把它重命名，命名为你刚刚删除了字体名字，然后覆盖原文件。（比如:我要用的自定义字体是“液晶数字体”（在图右边），我从i主题下载后删除的字体是“大吉福楷”（在图左边），那么我就要把液晶数字体重命名为大吉福楷，并覆盖到左边）
完成后重启i主题，找到你刚刚删除的字体，因为你删了，字体会变成未下载，这时候点击下载，然后点暂停，不要让它下载完。

![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/11.jpeg)

之后打开系统自带的文件管理，找到最近删除，然后恢复你刚刚删除的字体（已被替换为自定义字体）



![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/13.jpeg)




![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/4.jpeg)


恢复之后在打开i主题继续下载，下载完成后不要应用，打开mt管理器，找到这个路径:/storage/emulated/0/.dwd/c/o/m/b/b/k/t/h/e/m/e/F/
这个路径下的itz还是i主题里的字体，我们需要把这个也替换为我们要的自定义字体。

![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/17.jpeg)

替换完后去i主题点击应用（注意:要点应用），但是，这里应用后会应用i主题里的原字体，而不是我们要的自定义字体，如:



![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/6.jpeg)

此时我们不要慌，再打开vtools+,跳转到改字体，然后进去这个目录:

![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/12.jpeg)

![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/10.jpeg)

把这里面的ttf都删了。然后再去i主题重新应用字体。
这样就应用成功了，如果只改变了部分字体，重启一下就好。
注意:在最后一步不要删后台，也不要分屏，多任务操作就行，如果删完vfants里的字体后不小心删掉后台或应用失败，会导致设置，i主题等系统应用闪退无法进入，重启手机就好（来自佬的建议）。

补:导入失败的可以借鉴下下面几位的方法

![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/8.jpeg)


![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/18.jpeg)

若还是导入失败，我暂时就没办法了·-·
马上开学了，评论不一定回w