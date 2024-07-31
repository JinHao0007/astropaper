---
title: 玩客云通过网线共享windows网络，“机顶盒”再也不用放客厅了
description: 折腾玩客云
pubDate: 05 03 2024
tags:
  - 技术
image: https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/Screenshot_20240801_004450.jpg
---

之前在寒假的时候30软妹币收了一块“电子垃圾”玩客云，主要想折腾一下，当个私人NAS啥的（当代赛博仓鼠现状）于是就刷了Armbian+CasaOS，至于刷机过程多么艰辛啥的，咱这篇先不讨论哈~这篇主要来说说我是怎么把玩客云从客厅“搬”到卧室的。
事情的起因还是因为我的卧室里扯不进来网线，所以玩客云只能放客厅。这样不仅会占用空间不说，还影响美观。所以总想着把玩客云移到卧室中。
准备:
- 一根双头网线
- 一台能连wifi的电脑，（因为一般电脑只有一个网线接口，有线网就不行了，会占用唯一一个接口）
- 最好有额外的一个屏幕和键盘来配置玩客云，方便调试。
- 在配置玩客云中会用到vim编辑器,请先将玩客云接入网安装vim,默认刷的armbian没有vim
首先，把网线的一端接到电脑上，另一端接到玩客云上，确认一下电脑的网线接口处和玩客云网线接口处的灯是否都亮了，![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/qq_pic_merged_1714621220071.jpg)
 亮了就说明正常连接。这时候去电脑的控制面板-网络和共享中心-更改适配器设置![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/Pasted%20image%2020240502115114.png)
 然后先来配置主机（Windows）,在电脑网络连接中找到你的WiFi,右键属性，然后在弹出的窗口中找到共享，勾选上“允许其他网络用户通过此计算机的Internet连接来连接”，再在“家庭网络连接”中选择“以太网”，设置好后确定。
![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/Pasted%20image%2020240502121640.png)
 （ps：这里我看别人说，确定后会把主机ip改为137网段的，就是192.168.137.XX，但我这并没有，如果有的话确定就行，为了后续操作方便）
 下一步找到“以太网”，右击属性，然后找到这个：
![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/Pasted%20image%2020240502122533.png)
 建议这么配置：
![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/Pasted%20image%2020240502144755.png)

确定后windows就设置完了，接下来设置玩客云（armbian)：
需要修改两个文件：/etc/network/interfaces 和 /etc/resolvconf/resolv.conf.d/base。


```
vim /etc/network/interfaces
```

添加或修改为：
```
auto lo
iface lo inet loopback
auto eth0
iface eth0 inet static
address 192.168.137.136
netmask 255.255.255.0
gateway 192.168.137.1
```

address是你的玩客云ip，只要保证在137网段（与你刚刚在windows上设置的以太网的网段一致）即可，后面的数字除了0和1之外可以任填，前提是你能记住。
netmask是子网掩码。
gateway是网关，这里需要保证与之前在windows上设置以太网IP的一致。
然后再修改第二个文件
```
vim /etc/resolvconf/resolv.conf.d/base
```
改为：
```
nameserver 114.114.114.114
nameserver 192.168.137.1
```

这里是修改的DNS

保存退出后大功告成！
先来一段互ping
![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/Pasted%20image%2020240502155110.png)


最后ping一下百度，可以上网。
![](https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/1a2350de621683af811840c3e89627f2.jpg)

参考：
1. [ubuntu通过网线连接windows并借助windows上网_用网线将windows主机和ubuntu连接起来-CSDN博客](https://blog.csdn.net/qq_35865125/article/details/88930807)

2. [用Windows通过网线共享网络给其他电脑（Windows、Ubuntu）_电脑通过网线共享网络-CSDN博客](https://blog.csdn.net/iamjingong/article/details/119379129)
3. 