---
title: CSS知识总结
date: 2020-02-03
sidebar: false
tags:
 - CSS
categories:
 - CSS
---

# CSS知识总结

## 基本概念

### 文档流

#### 流动方向

- inline元素从左到右，到达最右边才换行
- block元素从上到下，每一个都另起一行
- inline-block也是从左到右

<!-- more -->

#### 宽度

- inline宽度为内部inline元素的和，不能用width指定
- block默认自动计算宽度，可用width指定
- inline-block结合前两者特点，可用width

#### 高度

- inline高度由line-height间接确定，跟height无关
- block高度由内部文档流元素决定，可以设height
- inline-block跟block类似，可以设置height

### overflow溢出

#### 当内容大于容器

- 当内容的宽度或高度大于容器，会溢出
- 可用overflow来设置是否显示滚动条
- auto是灵活设置
- scroll是永远显示
- hidden是直接隐藏溢出部分
- visible是直接显示溢出部分
- overflow可以分为overflow-x和overflow-y

### 脱离文档流

- float
- position: absolute / fixed

### 两种盒模型

- content-box 内容盒 - 内容就是盒子的边界
- border-box 边框盒 - 边框才是盒子的边界

#### 公式

- content-box width = 内容宽度
- border-box width = 内容宽度 + padding + border

## 动画

### 定义

- 由许多静止的画面（帧）
- 以一定的速度（如每秒30张）连续播放时
- 肉眼因视觉残象产生错觉
- 而误以为是活动的画面

### 概念

- 帧：每个静止的画面都叫做帧
- 播放速度：每秒24帧（影视）或者每秒30帧（游戏）

### 浏览器渲染过程

步骤：

1. 根据HTML构建HTML树（DOM）
2. 根据CSS构建CSS树（CSSOM）
3. 将两棵树合并成一颗渲染树（render tree）
4. Layout布局（文档流、盒模型、计算大小和位置）
5. Paint绘制（把边框颜色、文字颜色、阴影等画出来）
6. Compose合成（根据层叠关系展示画面）

### transform 变形

四个常用功能：

- 位移 translate
- 缩放 scale
- 旋转 rotate
- 倾斜 skew

### transition 过渡

#### 作用

- 补充中间帧

#### 语法

- transition: 属性名 时长 过渡方式 延迟
- transition: left 200ms linear
- 可以用逗号分隔两个不同属性
- transition: left 200ms, top 400ms
- 可以用 all 代表所有属性
- transition: all 200ms
- 过渡方式有：linear | ease | ease-in | ease-out | ease-in-out | cubic-bezier | step-start | step-end | steps

### animation 动画

animation：时长 | 过渡方式 | 延迟 | 次数 | 方向 | 填充模式 | 是否暂停 | 动画名

- 时长：1s 或者 1000ms
- 过渡方式：跟transition取值一样，如linear
- 次数：3或者2.4或者infinite
- 方向：reverse | alternate | alternate-reverse
- 填充模式：none | forwards | backwards | both
- 是否暂停：paused | running
- 以上所有属性都有对应的单独属性
