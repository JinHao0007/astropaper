---
title: “C语言中解决随机数传入数字避免重复。”
tags:
  - Blogging
  - Mizuki
  - 技术
published: 2025-11-13
description: 在做C语言练习的时候遇到了一个要求，生成随机数并传入数组，但是传入数组的数字不能重复
image: https://cdn.jsdelivr.net/gh/JinHao0007/Blog@main/Screenshot_20240801_004450.jpg
---


最初的代码
```
// 要求数据不能重复，存入之前先做判断
for ( i = 0; i < len; i++ )
{
    for ( j = 0; j < len; j++ ) 
    {
        if ( Ran == arr2[j] )
        {
            Ran = rand() % 100 + 1;
        }
                
    }
	    arr2[i] = Ran;
}
        
```
思路是每次存入数字的时候都用内循环检查一次数组，如果发现本次循环生成的随机数和数组用已有的数字重复的时候就在生成一遍随机数，但是发现问题：这样做只会重新生成一遍随机数，如果新生成的随机数和原来还是重复就不能解决了，所以改用while循环，直到生成的数和数组中已有的数不同为止：

```
for ( i = 0; i < len; i++ )
{
    for ( j = 0; j < len; j++ ) 
    {
        while ( Ran == arr2[j] )
        {
            Ran = rand() % 100 + 1;
        }
                
    }
	    arr2[i] = Ran;
}
```
但是这样也不行：
因为内循环设置的结束条件是j < len，这样会导致如果重新生成的数和数组中原有的数字重复时会导致无限循环(虽然概率很小)
所以改成j < i：
```

for ( i = 0; i < len; i++ 
{

    for ( j = 0; j < i; j++ )
    {
	    while( Ran == arr2[j] )

        {

	         Ran = rand() % 100 + 1;

        }

     }

     arr2[i] = Ran;
}
```
但是还不行，这样只判断了录入的那个随机数和当前的j位置不重复，不能保证和整个数组里的数字不重复。也就是说，我在内循环中修改了Ran后，不能保证我的Ran不与数组中其他元素不重复，最终使用goto解决:

![|475](https://cdn.jsdelivr.net/gh/JinHao0007/Blog/20251113195828908.png)

