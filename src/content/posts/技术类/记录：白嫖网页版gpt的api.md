---
title: 记录：白嫖网页版gpt的api
description: 记录：白嫖网页版gpt的api
tags:
  - 杂谈
  - Blogging
  - Mizuki
image: https://cdn.jsdelivr.net/gh/JinHao0007/Blog/20260710121503680.png
published: 2026-07-10
---
最近deepseek的api不是涨价了嘛，每天光是推送新闻，聊两句天就要7毛钱，钱包撑不住啊qwq，于是只能另寻他法，找别家模型，貌似都不便宜，中转站和那些免费的模型质量又不敢保证，于是，走向了一条不归路（bushi）——去白嫖token..
起初，目标是deepseek,然后再github上面看到几个开源的逆向api工程，issue中很多人反馈秒封，不敢用了，最终，矛头指向了chatgpt；先是花6软妹币买了一个plus的日抛号，然后找到了这个工程：
[basketikun/chatgpt2api: ChatGPT官网接口纯协议的逆向实现，支持GPT-Image-2模型、文本模型，兼容OpenAI接口协议，在线批量生图/编辑图，号池管理，支持可编辑PPT/PSD文件逆向，支持导入CPA、sub2api号池 、支持接入Cherry Studio、New Api 等软件](https://github.com/basketikun/chatgpt2api)

当时没细看嘛，以为拿到api就能直接用了，费劲千辛万苦拿到api后，也确实可以用，接astrbot没啥问题，但是接入claude code就会出现问题了：
![image](https://cdn.jsdelivr.net/gh/JinHao0007/Blog/img_1783654930468.png)
也就是说，它只能像在网页端和你聊天一样，不能帮你干活，那我要你有哈用啊·-·（bushi）
去查了一下发现，网页版的gpt不支持调用自定义工具，仅仅支持官方硬编码的几个插件，所以逆向出来的api也是不能用的...
好了好了，这下坏了w~ 