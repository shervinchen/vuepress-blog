---
title:
date: 2020-05-27
sidebar: false
tags:
  - JavaScript
  - DOM
categories:
  - JavaScript
---

## 捕获和冒泡

- 从外向内找监听函数，就叫事件捕获
- 从内向外找监听函数，就叫事件冒泡

DOM事件模型分为捕获和冒泡，一个事件发生后，会在子元素和父元素之间传播，这种传播分成三个阶段：

1. 捕获阶段：事件从window对象自上而下向目标节点传播的阶段
2. 目标阶段：真正的目标节点正在处理事件的阶段
3. 冒泡阶段：事件从目标节点自下而上向window对象传播的阶段

![event1](https://user-gold-cdn.xitu.io/2018/11/9/166f81f3e0d2d1ca?imageView2/0/w/1280/h/960/format/webp/ignore-error/1)

捕获是从上到下，事件先从window对象，然后再到document（对象），然后是html标签（通过document.documentElement获取html标签），然后是body标签（通过document.body获取body标签），然后按照普通的html结构一层一层往下传，最后到达目标元素。而事件冒泡的流程刚好是事件捕获的逆过程


![event2](https://i.loli.net/2020/05/27/N1TulODL27c3gkx.png)

## 绑定事件

```javascript
// 冒泡
element.addEventListener("click", fn);
element.addEventListener("click", fn, false);
// 捕获
element.addEventListener("click", fn, true);
```

## 取消冒泡

```javascript
event.stopPropagation();
```

## 事件的特性

- Bubbles 表示是否冒泡
- Cancelable 表示是否支持开发者取消冒泡
- 如 scroll 不支持取消冒泡

## 如何禁用滚动

- 取消特定元素的 wheel 和 touchstart 的默认动作

## 自定义事件

```javascript
button.addEventListener("click", () => {
  const event = new CustomEvent("test", {
    detail: {
      data: 0,
    },
  });
  button.dispatchEvent(event);
});
button.addEventListener("test", (e) => {
  console.log("test");
  console.log(e);
});
```

## 事件委托（事件代理）

由于事件会在冒泡阶段向上传播到父节点，因此可以把子节点的监听函数定义在父节点上，由父节点的监听函数统一处理多个子元素的事件，这种方法叫做事件的代理（delegation）

```javascript
function on(element, eventType, selector, fn) {
  element.addEventListener(eventType, (e) => {
    let el = e.target;
    while (!el.matches(selector)) {
      if (element === el) {
        el = null;
        break;
      }
      el = el.parentNode;
    }
    el && fn.call(el, e, el);
  });
  return element;
}
```

优点：

- 省监听数（内存）
- 可以监听动态元素
