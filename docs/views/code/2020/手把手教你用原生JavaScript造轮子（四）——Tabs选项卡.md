---
title: 手把手教你用原生JavaScript造轮子（四）——Tabs选项卡
date: 2020-04-10
sidebar: false
tags:
 - JavaScript
 - Webpack
 - Babel
 - ES6
 - Wheels
 - Tabs
 - 轮子
 - 组件
categories:
 - JavaScript
 - Webpack
 - Babel
---

# Tabs 选项卡

> 文档：[Tabs](https://csdoker.github.io/tiny-wheels/components/tabs.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)

> 源码：[tiny-wheels](https://github.com/csdoker/tiny-wheels)

> 如果觉得好用就点个 Star 吧~(〃'▽'〃)

<!-- more -->

## 效果

![Tabs](https://i.loli.net/2020/04/10/B3mtVMb92S7FA4R.gif)

## 思路

这个组件的难点在于控制每个`tab`项底部条的移动以及对应`panel`的移动，最常见的做法是通过`transform`来改变元素的位置，不废话，直接上代码

## 实现

> 文章只列出关键部分的代码，其余逻辑可自行研究项目中的源码

`Tabs`组件由于需要让用户自定义内容，所以一些配置我们通过 HTML 的自定义属性实现（自定义标签兼容性目前还不太好，所以暂不考虑），组件的 HTML 结构如下：

```html
<div class="tabs" data-tab-active="2" data-tab-disabled="3">
  <div data-tab-name="选项卡1" data-tab-key="1">内容1</div>
  <div data-tab-name="选项卡2" data-tab-key="2">内容2</div>
  <div data-tab-name="选项卡3" data-tab-key="3">内容3</div>
  <div data-tab-name="选项卡4" data-tab-key="4">内容4</div>
</div>
```

每个属性的具体用法文档里已有说明，所以这里不再赘述

组件结构的渲染源码里已有，最终渲染出的 HTML 结构是这样的：

```html
<div class="tabs tiny-tabs" data-tab-active="2" data-tab-disabled="3">
  <div class="tab-header">
    <span class="tab-item">选项卡1</span>
    <span class="tab-item active">选项卡2</span>
    <span class="tab-item disabled">选项卡3</span>
    <span class="tab-item">选项卡4</span>
    <span
      class="tab-line"
      style="width: 46px; transform: translateX(77px);"
    ></span>
  </div>
  <div class="tab-panels animated" style="transform: translateX(-100%);">
    <div data-tab-name="选项卡1" data-tab-key="1" class="tab-panel">内容1</div>
    <div data-tab-name="选项卡2" data-tab-key="2" class="tab-panel active">
      内容2
    </div>
    <div data-tab-name="选项卡3" data-tab-key="3" class="tab-panel">内容3</div>
    <div data-tab-name="选项卡4" data-tab-key="4" class="tab-panel">内容4</div>
  </div>
</div>
```

根据用户设置的选项卡内容，我们可以渲染出对应数量的`tab-item`，而`tab-item`位置、宽度的计算可以通过`offsetLeft`与`offsetWidth`得到，然后改变对应的样式即可：

```javascript
setTabs () {
    this.$$tabItems = this.$container.querySelectorAll('.tab-item')
    this.$tabLine = this.$container.querySelector('.tab-line')
    this.setTabStatus()
    const tabIndex = this.getTabIndex() ? this.getTabIndex() : 0
    if (this.$$tabItems[tabIndex]) {
        const { offsetWidth, offsetLeft } = this.$$tabItems[tabIndex]
        this.setTabItem(this.$$tabItems[tabIndex])
        this.setTabLine(offsetWidth, offsetLeft)
        this.setTabPanel(this.$$tabPanels[tabIndex], tabIndex)
    }
}
setTabLine (width, left) {
    this.$tabLine.style.width = `${width}px`
    this.$tabLine.style.transform = `translateX(${left}px)`
}
```

`tab-panel`的设置也是一样：

```javascript
setTabPanel ($panel, index) {
    this.$tabPanelContainer.style.transform = `translateX(-${index * 100}%)`
    this.$$tabPanels.forEach($panel => $panel.classList.remove('active'))
    $panel.classList.add('active')
    setTimeout(() => {
        if (this.options.animated) {
            this.$tabPanelContainer.classList.add('animated')
        }
    })
}
```

需要注意的是，第一次加载组件时，我们不希望`tab-panel`有滑动效果，所以这里需要用`setTimeout`延时加载`transition`动画样式

`Tabs`组件的的核心逻辑就这么多了，剩下的是一些配置属性、事件绑定的实现：

```javascript
getTabIndex () {
    const tabKey = this.$container.dataset.tabActive
    let tabIndex = tabKey
    if (tabKey) {
        this.$$tabPanels.forEach(($panel, index) => {
            if ($panel.dataset.tabKey === tabKey) {
                tabIndex = index
            }
        })
    }
    return tabIndex
}
setTabStatus () {
    const tabKey = this.$container.dataset.tabDisabled
    if (tabKey) {
        this.$$tabPanels.forEach(($panel, index) => {
            if ($panel.dataset.tabKey === tabKey) {
                this.$$tabItems[index].classList.add('disabled')
            }
        })
    }
}
bindTabs () {
    this.$$tabItems.forEach($tab => {
        $tab.addEventListener('click', () => {
            if (!$tab.classList.contains('disabled')) {
                const index = [...this.$$tabItems].indexOf($tab)
                this.setTabItem($tab)
                this.setTabLine($tab.offsetWidth, $tab.offsetLeft)
                this.setTabPanel(this.$$tabPanels[index], index)
                this.options.callback.call(null, $tab, this.$$tabPanels[index].dataset.tabKey)
            }
        })
    })
}
```

`tab-active`（初始激活项）与`tab-disabled`（初始禁用项）都是通过`dataset`的api拿到对应的属性值，然后遍历找到需要设置的项即可；绑定事件时需要给回调函数传入当前元素的引用、`tab-key`等参数

`Tabs`组件的基本功能到此就实现完毕了，当然，还可以实现一些更复杂的功能：选项卡的添加删除、响应式展示`tab-item`、卡片样式式的选项卡等等，这些功能在`element-ui`、`iview`、`ant-design`中都有实现，可以参考它们的效果自行拓展~

用`Vue`或者`React`来封装这样的组件，无非只是把`DOM`操作省去，组件属性的配置更简化了而已，一些内部的核心实现原理是通用的，比如用`Vue`来写组件的结构，可能就会变成这样：

```html
<template>
    <tabs :active.sync="activeTab" @update:selected="callback">
        <tabs-head>
            <tabs-item name="one" disabled>
                选项卡1
            </gabs-item>
            <tabs-item name="two" active>
                选项卡2
            </tabs-item>
            <tabs-item name="three">
                选项卡3
            </tabs-item>
        <tabs-head>
        <tabs-body>
            <tabs-panel name="one">
                内容1
            </tabs-panel>
            <tabs-panel name="two">
                内容2
            </tabs-panel>
            <tabs-panel name="three">
                内容3
            </tabs-panel>
        </tabs-body>
    <tabs>
</template>
```

可以看到，属性的配置简化了很多，组件结构和我们用原生 HTML 渲染出来的结果是差不多的（实际上用原生的`自定义标签`也可以模拟出这样的效果来，只是目前浏览器兼容还很差），而`tabs`组件的样式实现仍然需要计算`offsetWidth`、`offsetLeft`等等属性，换汤不换药，大家感兴趣的话可以用`Vue`重写一遍，这里就不多啰嗦了~

To be continued...
