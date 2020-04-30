---
title: 浅析MVC、EventBus、表驱动编程、模块化
date: 2020-04-23
sidebar: false
tags:
 - 设计模式
 - JavaScript
 - MVC
 - EventBus
 - 模块化
categories:
 - 设计模式
 - JavaScript
---

# MVC

## 简述

MVC 包括三类对象，将他们分离以提高灵活性和复用性：

- 模型 model 用于封装与应用程序的业务逻辑相关的数据以及对数据的处理方法，会有一个或多个视图监听此模型。一旦模型的数据发生变化，模型将通知有关的视图
- 视图 view 是它在屏幕上的表示，描绘的是 model 的当前状态。当模型的数据发生变化，视图相应地得到刷新自己的机会
- 控制器 controller 定义用户界面对用户输入的响应方式，起到不同层面间的组织作用，用于控制应用程序的流程，它处理用户的行为和数据 model 上的改变

<!-- more -->

## 经典 MVC

经典 MVC 模式：
![MVC1](https://efe.baidu.com/blog/mvc-deformation/img/typicalMVC.png)

实线：方法调用 虚线：事件通知
其中涉及两种设计模式：

- view 和 model 之间的观察者模式，view 观察 model，事先在此 model 上注册，以便 view 可以了解在数据 model 上发生的改变。
- view 和 controller 之间的策略模式

## MVC for JavaScript

![MVC2](https://efe.baidu.com/blog/mvc-deformation/img/javascriptMVC.png)

如图所示，view 承接了部分 controller 的功能，负责处理用户输入，但是不必了解下一步做什么。它依赖于一个 controller 为她做决定或处理用户事件。事实上，前端的 view 已经具备了独立处理用户事件的能力，如果每个事件都要流经 controller，势必增加复杂性。同时，view 也可以委托 controller 处理 model 的更改。model 数据变化后通知 view 进行更新，显示给用户。这个过程是一个圆，一个循环的过程

# EventBus

在常用的 MVVM 框架比如`Vue`，组件间通信可能会有以下三种情况：

- 父子通信：通过 props
- 非父子组件组件用 EventBus 通信
- 如果项目很大，数据需要共享到多个组件（跨组件通信，改同一个数据等），用 vuex 管理

`Vue`中的`EventBus`是怎么实现的呢，就是根据发布订阅模式。发布订阅模式应用广泛，js 中的事件就是一个经典的发布订阅模式，关于事件的文档：[addEventListener](https://developer.mozilla.org/zh-CN/docs/Web/API/EventTarget/addEventListener)

> EventTarget.addEventListener() 方法将指定的监听器注册到 EventTarget 上，当该对象触发指定的事件时，指定的回调函数就会被执行，事件目标可以是一个文档上的元素 Document 本身

```javascript
target.addEventListener(type, listener, options)
// type 表示事件类型（eg:click）
// listener 回调函数，当监听的事件类型触发时，执行listener函数
// options 冒泡还是捕获等参数
```

原生 js 中，我们通过 addEventListener 注册事件（订阅），比如鼠标点击，传入回调函数（在注册的事件触发时要执行的函数），那么鼠标点击时（发布），传入的回调函数就会执行。

那一个简单的发布订阅模式怎么实现呢？一个完整的`EventBus`包含以下几个元素：

- 单例对象，维护订阅者：单例模式就是为保证不同的人实例化 EventEmitter 类之后，拿到的状态是同一个。
- 订阅方法：传入订阅的事件类型及回调函数，订阅事件
- 发布方法：传入发布的事件类型及参数（传给回调函数的），发布事件。发布时，会执行订阅时传入的回调函数
- 移除方法：移除订阅（监听）的回调函数

EventBus 是消息传递的一种方式，基于一个消息中心，订阅和发布消息的模式。这种方式的实现不仅仅局限于前端，在 iOS 中的消息消息中心也是如此实现。

# 表驱动编程

表驱动方法(Table-Driven Approach)是一种使你可以在表中查找信息，而不必用很多的逻辑语句（if 或 case）来把它们找出来的方法。事实上，任何信息都可以通过表来挑选。在简单的情况下，逻辑语句往往更简单而且更直接

## 数组中的应用

假设你需要一个可以返回每个月中天数的函数（为简单起见不考虑闰年）：

```javascript
function iGetMonthDays (iMonth) {
  let iDays
  if (1 == iMonth) {
    iDays = 31
  } else if (2 == iMonth) {
    iDays = 28
  } else if (3 == iMonth) {
    iDays = 31
  } else if (4 == iMonth) {
    iDays = 30
  } else if (5 == iMonth) {
    iDays = 31
  } else if (6 == iMonth) {
    iDays = 30
  } else if (7 == iMonth) {
    iDays = 31
  } else if (8 == iMonth) {
    iDays = 31
  } else if (9 == iMonth) {
    iDays = 30
  } else if (10 == iMonth) {
    iDays = 31
  } else if (11 == iMonth) {
    iDays = 30
  } else if (12 == iMonth) {
    iDays = 31
  }
  return iDays
}
```

使用表驱动(包括闰年判断)：

```javascript
const monthDays = [
  [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31],
  [31, 29, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31]
]
function getMonthDays (month, year) {
  let isLeapYear =
    year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0) ? 1 : 0
  return monthDays[isLeapYear][month - 1]
}
console.log(getMonthDays(2, 2000))
```

## 对象中的应用

形如如下的形式：

```javascript
if (key = "Key A")
{
   处理 Key A 相关的数据。
}
else if (key = "Key B")
{
   处理 Key B 相关的数据。
}
```

可以改装成:

```javascript
let table = {
  A: {
    data: "数据1",
    action: "行为1"
  },
  B: {
    data: "数据2",
    action: "行为2"
  }
}

function handleTable(key) {
  return table[key]
}
console.log(handleTable('A').data)
```

或

```javascript
let table = {
  A: {
    data: "数据1",
    action () {
      console.log('action 1')
    }
  },
  B: {
    data: "数据2",
    action () {
      console.log('action 2')
    }
  }
}

function handleTable(key) {
  return table[key]
}
handleTable('A').action()
```

表驱动法就是一种编程模式，从表里面查找信息而不使用逻辑语句。事实上，凡是能通过逻辑语句来选择的事物，都可以通过查表来选择。对简单的情况而言，使用逻辑语句更为容易和直白。但随着逻辑链的越来越复杂，查表法也就愈发显得更具吸引力

# 模块化

## 背景

Javascript 程序本来很小——在早期，它们大多被用来执行独立的脚本任务，在你的 web 页面需要的地方提供一定交互，所以一般不需要多大的脚本。过了几年，我们现在有了运行大量 Javascript 脚本的复杂程序，还有一些被用在其他环境（例如 Node.js）

因此，近年来，有必要开始考虑提供一种将 JavaScript 程序拆分为可按需导入的单独模块的机制。Node.js 已经提供这个能力很长时间了，还有很多的 Javascript 库和框架 已经开始了模块的使用（例如， CommonJS 和基于 AMD 的其他模块系统 如 RequireJS, 以及最新的 Webpack 和 Babel）

最新的浏览器开始原生支持模块功能了，使用JavaScript 模块依赖于import和 export

## 导出模块的功能

为了获得模块的功能要做的第一件事是把它们导出来。使用 export 语句来完成：

```javascript
export const name = 'square';

export function draw(ctx, length, x, y, color) {
  ctx.fillStyle = color;
  ctx.fillRect(x, y, length, length);

  return {
    length: length,
    x: x,
    y: y,
    color: color
  };
}
```

你能够导出函数，var，let，const, 和等会会看到的类。export要放在最外层；比如你不能够在函数内使用export

一个更方便的方法导出所有你想要导出的模块的方法是在模块文件的末尾使用一个export 语句， 语句是用花括号括起来的用逗号分割的列表。比如：

```javascript
export { name, draw, reportArea, reportPerimeter };
```

## 导入功能到你的脚本

你想在模块外面使用一些功能，那你就需要导入他们才能使用。最简单的就像下面这样的：

```javascript
import { module } from 'module';
```

使用 import 语句，然后你被花括号包围的用逗号分隔的你想导入的功能列表，然后是关键字from，然后是模块文件的路径。模块文件的路径是相对于站点根目录的相对路径