---
title: 手把手教你用原生JavaScript造轮子（五）——Collapse折叠面板
date: 2020-04-23
sidebar: false
tags:
 - JavaScript
 - Webpack
 - Babel
 - ES6
 - Wheels
 - Collapse
 - 轮子
 - 组件
categories:
 - JavaScript
 - Webpack
 - Babel
---

# Collapse 折叠面板

> 文档：[Collapse](https://csdoker.github.io/tiny-wheels/components/collapse.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)

> 源码：[tiny-wheels](https://github.com/csdoker/tiny-wheels)

> 如果觉得好用就点个 Star 吧~(〃'▽'〃)

<!-- more -->

## 效果

![Collapse](https://i.loli.net/2020/04/23/N5hLwDK3q1dMiyC.gif)

## 思路

每个面板折叠、展开的动画效果其实就是去控制`collapse-panel`的`height`变化，所以在一开始就需要记录下每个面板的原始高度，否则用户在折叠面板后，高度就变为 0 了，这时候计算出来的值也为 0，就无法还原为初始高度了

## 实现

> 文章只列出关键部分的代码，其余逻辑可自行研究项目中的源码

`Collapse`与`Tabs`组件类似，都需要让用户自定义内容，所以`HTML`结构也是类似的：

```html
<div class="collapse" data-collapse-active="2">
  <div data-collapse-name="折叠面板1" data-collapse-key="1">
    折叠内容
  </div>
  <div data-collapse-name="折叠面板2" data-collapse-key="2">
    折叠内容
  </div>
  <div data-collapse-name="折叠面板3" data-collapse-key="3">
    折叠内容
  </div>
  <div data-collapse-name="折叠面板4" data-collapse-key="4">
    折叠内容
  </div>
</div>
```

保存每个面板的初始高度：

```javascript
setCollapsePanels () {
    this.panelsHeight = []
    this.$$collapsePanels.forEach(($panel, index) => {
        this.panelsHeight.push($panel.offsetHeight)
        if (this.$$collapseItems[index].classList.contains('active')) {
            mergeStyle($panel, { height: `${$panel.offsetHeight}px` })
        } else {
            mergeStyle($panel, { height: '0', paddingBottom: '0' })
        }
        setTimeout(() => {
            $panel.classList.add('animate')
        })
    })
}
```

初始必须设置每个激活面板的`height`，如果不设置，动画效果会很不自然

看到这里，也许有读者会问，为什么非得设置具体的高度呢，让面板的高度默认为`auto`，然后在0和`auto`之间切换不就行了吗？

最开始我就是这么做的，然后发现动画效果非常生硬，完全不是我们想要的效果，必须设置具体的高度后，动画效果才是正常的，这也就是代码中在初始化时就需要保存面板高度的原因

这个组件的核心逻辑就是这一个方法，非常简单，剩下的操作就是绑定事件：

```javascript
bindCollapseItems () {
    this.$$collapseItems.forEach(($item, index) => {
        $item.addEventListener('click', () => {
        if (this.options.accordion) {
            this.clearCollapse($item)
        }
        this.toggleCollapse($item, index)
        const collapseKey = this.$$collapsePanels[index].dataset.collapseKey
        const collapseActiveKeys = this.getCollapseActiveKeys()
        this.options.callback.call(null, $item, collapseKey, collapseActiveKeys)
        })
    })
}
```

通过用户在构造函数中传入的`accordion`属性，我们可以判断是否要开启手风琴模式，如果开启，每次点击后清除其余项的样式即可，其他的逻辑源码中都有，这里就不赘述了~

To be continued...