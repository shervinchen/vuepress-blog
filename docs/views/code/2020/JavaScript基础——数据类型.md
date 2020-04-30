---
title: JavaScript基础——数据类型
date: 2020-02-22
sidebar: false
tags:
 - JavaScript
categories:
 - JavaScript
---

# 数据类型

## 数字与字符串

都是一，为什么要分1和'1'

### 功能不同

- 数字是数字，字符串是字符串，要严谨
- 数字能加减乘除，字符串不行
- 字符串能表示电话号码，数字不行

<!-- more -->

### 存储形式不同

- JS中，数字是用64位浮点数的形式存储的
- JS中，字符串是用类似的UTF8形式存储的（UCS-2）

## 二进制

如何存数字？十进制转二进制

### 10转2

31变成二进制：
31 = 0 × 2^5 + 1 × 2^4 + 1 × 2^3 + 1 × 2^2 + 1 × 2^1 + 1 × 2^0

31（十进制） = 011111（二进制）

### 2转10

100011变成十进制：
100011 = 1 × 2^5 + 1 × 2^1 + 1 × 2^0 = 35

每一位乘以2的N次方，然后加起来即可

## 数字 number

64位浮点数

### 写法

- 整数写法：1
- 小数写法：0.1
- 科学计数法：1.23e4
- 八进制写法：0123或00123或0o123
- 十六进制写法：0x3F或0X3F
- 二进制写法：0b11或0B11

### 特殊值

- 正0和负0，都等于0
- 无穷大：Infinity / +Infinity / -Infinity
- 无法表示的数字：NaN（Not a Number）

## 字符串 string

每个字符两个字节

- 单引号：'你好'
- 双引号："你好"
- 反引号：`你好`

> 注意：引号不属于字符串的一部分

在单引号里面包含单引号：

- 'it\'s ok'
- "it's ok"
- `it's ok`

## 布尔 boolean

只有两个值：true和false，注意大小写

下列运算符会得到bool值：

- 否定运算：!value
- 相等运算：1==2 / 1!=2 / 3===4 / 3!==4
- 比较运算：1>2 / 1>=2 / 3<4 / 3<=4

## 转义

用一种写法表示你想要的东西：

- \' 表示 '
- \" 表示 "
- \n 表示 换行
- \r 表示 回车
- \t 表示 tab制表符
- \\ 表示 \
- \uFFFF 表示对应的Unicode字符
- \xFF 表示前256个Unicode字符

## base64转码

- window.btoa：正常字符串转为Base64编码的字符串
- window.atob：Base64编码的字符串转为原来的字符串

## JS中的数据类型

7种（大小写无所谓）：

- 数字 number
- 字符串 string
- 布尔 bool
- 符号 symbol
- 空 undefined
- 空 null
- 对象 object
- 总结：四基两空一对象

以下不是数据类型：
数组、函数、日期，它们都属于object

五个falsy值：

> falsy就是相当于false但又不是false的值

分别是：

1. undefined
2. null
3. 0
4. NaN
5. ''

## 变量声明

三种声明方式：

```javascript
var a = 1
let a = 1
const a = 1
```

区别：

- var 是过时的、不好用的方式
- let是新的，更合理的方式
- const是声明时必须赋值，且不能再改的方式

## 类型转换

### number => string

- String(n)
- n + ''

### string => number

- Number(s)
- parseInt(s) / parseFloat(s)
- s - 0

### x => bool

- Boolean(x)
- !!x

### x => string

- String(x)
- x.toString(x)