---
title: 手把手教你用原生JavaScript造轮子（三）——项目升级&填坑&重写组件
date: 2020-04-08
sidebar: false
tags:
 - JavaScript
 - Webpack
 - Babel
 - ES6
 - Wheels
 - Pager
 - Carousel
 - 轮子
 - 组件
categories:
 - JavaScript
 - Webpack
 - Babel
---

# 项目升级&填坑

## 说明

时隔大半年（错，应该是有生之年），我决定重启这个造轮子项目，原因有几点：

1. 老项目结构太过臃肿
2. 组件的一些实现思路存在比较大的问题
3. 打包方式比较麻烦

所以我重新建立了一个叫 [tiny-wheels](https://github.com/csdoker/tiny-wheels) 的项目，初衷和[旧项目](https://github.com/csdoker/csdwheels)是一样的，主要是个人对于技术的学习、研究、总结，其次是探索使用原生 JavaScript 实现一些复杂组件的方法

<!-- more -->

> 注：旧项目已废弃，请直接使用新项目！

由于现在还未完成每个组件的单元测试，无法确保组件的稳定性，所以暂时不推荐在生产环境使用

本项目的源码：[源码](https://github.com/csdoker/tiny-wheels)
关于各个组件的详细使用方式和效果可以查看本项目的文档：[文档](https://csdoker.github.io/tiny-wheels/)

求点赞，求 star~(✪ω✪)

## 填坑

### 架构优化

由于老项目的打包方式不太方便，所以这次的项目重新使用最新版本的`Webpack`和`Babel`构建，采用`UMD`的模块化规范打包，同时兼容多种引入方式，不管是开发和使用都方便了不少，具体的使用方法可以查看文档中的相关说明

### 组件重写

> 有了 Webpack 这个强大的工具，我们就不需要使用旧语法编写代码了，所以新项目直接使用最新语法编写。

老项目中分页和轮播的实现较为臃肿，而且轮播图的实现思路存在很多问题，这次也重新把这两个组件实现了一遍，目前组件的基本功能已经实现完毕，可以查看文档中的效果以及源码

#### Pager

![Pager](https://i.loli.net/2020/04/08/THDkdySJpKIvO2Q.gif)

这个组件以前的逻辑没有太大的问题，核心原理是一样的，只是使用了一种更简单的方法实现

```javascript
页码为 1，显示 1 2 3 ... 10
页码为 2，显示 1 2 3 4 ... 10
页码为 3，显示 1 2 3 4 5 ... 10
页码为 4，显示 1 2 3 4 5 6 ... 10
页码为 5，显示 1 ... 3 4 5 6 7 ... 10
页码为 6，显示 1 ... 4 5 6 7 8 ... 10
页码为 7，显示 1 ... 5 6 7 8 9 10
页码为 8，显示 1 ...6 7 8 9 10
页码为 9，显示 1 ... 7 8 9 10
页码为 10，显示 1 ... 8 9 10
```

要得到上面这种结构，老项目中使用的方法是：

```javascript
function showPages(page, total, show) {
  var str = page + "";
  for (var i = 1; i <= show; i++) {
    if (page - i > 1) {
      str = page - i + " " + str;
    }
    if (page + i < total) {
      str = str + " " + (page + i);
    }
  }
  if (page - (show + 1) > 1) {
    str = "... " + str;
  }
  if (page > 1) {
    str = 1 + " " + str;
  }
  if (page + show + 1 < total) {
    str = str + " ...";
  }
  if (page < total) {
    str = str + " " + total;
  }
  return str;
}
```

这样写，if-else 结构太多，很不利于维护，可以利用 es6 提供的`reduce`方法优化这段代码逻辑：

```javascript
getPager () {
  const pages = [
    1,
    this.pageCount,
    this.pageCurrent,
    this.pageCurrent - 1,
    this.pageCurrent - 2,
    this.pageCurrent + 1,
    this.pageCurrent + 2
  ]
  const pageNumbers = [
    ...new Set(
      pages.filter(n => n >= 1 && n <= this.pageCount).sort((a, b) => a - b)
    )
  ]
  const pageItems = pageNumbers.reduce((items, current, index, array) => {
    items.push(current)
    if (array[index + 1] && array[index + 1] - array[index] > 1) {
      items.push('···')
    }
    return items
  }, [])
  return pageItems
}
```

原理是一模一样的，只是多了去重、排序等几步操作，但是代码得到了极大的简化
如果有更好的实现思路，欢迎给我提建议~

#### Carousel

![Carousel](https://i.loli.net/2020/04/10/zFUl4P7tifgQDkR.gif)

老项目中轮播组件的实现思路大概是这样的：

1. 使用 JavaScript 计算子元素的序号
2. 使用 `position: absolute + left` 或者 `transform` 控制父元素的位置，达到移动的动画效果

这种办法也是你能在网上找到的最常见的实现思路，但是稍微测试一下就会发现这种算法有很多缺陷：

1. 频繁的 DOM 操作，性能低
2. 在部分浏览器渲染下会出现闪烁的问题
3. 动画算法不利于维护与功能拓展

拜读了`element-ui`、`iview`、`ant-design`、`bootstrap`这些比较大型成熟的 UI 框架的源码后，发现它们都使用了另外一种更“先进”聪明的做法

其实要实现轮播的动画效果，根本不需要去计算每个子元素的序号以及对应的顺序变化，因为不管哪个方向，自始至终我们看到的都是两个子元素的移动效果而已，所以只需要给这两个移动中的元素添加对应的样式即可

具体实现思路是使用 CSS3 的`transform`属性来控制子元素的位置变化，配合`transition`添加过渡动画，在 JS 代码中只需要在合适的时机添加对应的类名，然后移出对应的类名

首先还是需要计算出当前正在过渡的两个元素的序号：

```javascript
getCurrentIndex () {
  return [...this.$$dots].indexOf(
    this.$container.querySelector('.carousel-dot.active')
  )
}

getPrevIndex () {
  return (
    (this.getCurrentIndex() - 1 + this.$$dots.length) % this.$$dots.length
  )
}

getNextIndex () {
  return (this.getCurrentIndex() + 1) % this.$$dots.length
}
```

计算方法如上，非常简单，不再赘述
然后就可以给这两个元素加上对应的类名了：

```javascript
setCarouselPanel ($from, $to, direction) {
  this.isAnimate = true
  window.requestAnimationFrame(() => {
    const { fromClass, toClass } = this.resetCarouselPanel($to, direction)
    window.requestAnimationFrame(() => {
      this.moveCarouselPanel(fromClass, toClass, $from, $to)
    })
  })
}
resetCarouselPanel ($to, direction) {
  let fromClass = ''
  let toClass = ''
  const type = direction === 'left' ? 'next' : 'prev'
  $to.setAttribute('class', `carousel-panel ${type}`)
  fromClass = `carousel-panel active ${direction}`
  toClass = `carousel-panel ${type} ${direction}`
  return { fromClass, toClass }
}
moveCarouselPanel (fromClass, toClass, $from, $to) {
  $from.setAttribute('class', fromClass)
  $to.setAttribute('class', toClass)
  setTimeout(() => {
    $from.setAttribute('class', 'carousel-panel')
    $to.setAttribute('class', 'carousel-panel active')
    this.isAnimate = false
  }, this.duration)
}
```

这里会遇到一个非常难解决的问题，因为我们的思路是先把两个元素的样式给重置，再添加新的样式，所以需要添加两次类名，然后让它们的样式依次作用到对应元素身上，最开始我是这样实现的：

```javascript
let fromClass = "";
let toClass = "";
const type = direction === "left" ? "next" : "prev";
$to.setAttribute("class", `carousel-panel ${type}`);
fromClass = `carousel-panel active ${direction}`;
toClass = `carousel-panel ${type} ${direction}`;
setTimeout(() => {
  $from.setAttribute("class", fromClass);
  $to.setAttribute("class", toClass);
}, 0);
setTimeout(() => {
  $from.setAttribute("class", "carousel-panel");
  $to.setAttribute("class", "carousel-panel active");
  this.isAnimate = false;
}, 400);
```

第一个`setTimeout`是防止浏览器自动合并样式，第二个`setTimeout`是当动画结束后清除样式，而 400ms 刚好就是`transition`的时间，乍看上去好像没什么太大的问题，但是实际测试的时候发现会有很多诡异的 Bug，检查了很久，最后定位到是第一个`setTimeout`的问题

原因就是使用`setTimeout`并不能 100%的确保样式不会被自动合并，在一些很特殊的情况下浏览器仍然会自动合并样式，比如这种需要加载动画的情况，虽然大部分情况下是可行的。具体原理初步猜测和浏览器的渲染机制有关，查阅了很久的资料，先是在`layui`的[源码](https://github.com/sentsin/layui/blob/master/src/lay/modules/carousel.js)中发现了它的处理办法，直接给第一个`setTimeout`的延时设置为 50ms，虽然不知道为什么要设置为这个值，但是经过我实际测试后发现确实解决了这个问题（个人认为这种办法还是不能 100%保证在所有情况下都能防止样式合并），后来我又查阅了一些其他的资料，最后还是在`stackoverflow`上找到了最靠谱的[解决方案](https://stackoverflow.com/questions/41407861/css-transition-doesnt-animate-when-immediately-changing-size-via-javascript)：

```javascript
window.requestAnimationFrame(function () {
  document.getElementById("two").setAttribute("style", "height: 0px");
  window.requestAnimationFrame(function () {
    document.getElementById("two").setAttribute("style", "height:  200px");
  });
});
```

使用了两次 requestAnimationFrame 方法，把改变样式的代码放入其中依次执行，经过我在多种浏览器上测试后，发现这种方案明显比`setTimeout`的办法更稳定可靠，所以最终我采用了这种办法处理浏览器自动合并样式的问题，具体的一些原因可以参考这个`stackoverflow`帖子里的答案

使用这种办法做轮播动画，还有个好处，就是非常利于拓展功能，比如要把轮播面板的`slide`滑动效果改成`fade`淡入淡出的效果，只需要把对应类的样式从`transfrom`的变化改成`opacity`的变化即可，事实上，一些成熟的 UI 框架也是用类似的思想实现的（如果用以前的动画算法，就只能单独写一个动画模块了，对后期的维护与拓展很不友好）

如果大家有更完美的避免样式合并的办法，或者更优雅高效的轮播算法，也欢迎分享给我~

关于分页和轮播组件的填坑差不多就这些了，基本功能都实现了，效果经过初步测试也没有太大的问题，一些更复杂的功能会在后续的更新里添加进去

## 更新（2020-04-12，修复一个“小”问题）

在截取 Carousel 组件的动态图的时候，发现了一个很隐蔽的 Bug：
![Bug1](https://i.loli.net/2020/04/12/T3Pb5yN1KcInE2F.png)

WTF？！为什么两个`carousel-panel`之间出现了一条很细的线，明明是它们是同步做的移动，按道理来说不应该呀，然后我写了个[demo](https://jsbin.com/gijabuseca/edit?html,css,js,output)验证这个问题，发现果然也出现了同样的问题：
![Bug2](https://i.loli.net/2020/04/12/nk8qCYuBx7dbGTf.png)

看样子，只要是两个一起做 transform 移动的元素，都会出现这个渲染 Bug，经过测试，发现貌似只有 Chrome 上会出现这个问题，Edge、Firefox、Safari 都是正常的，也就是说，这算是一个浏览器的 Bug，我在 stackoverflow、segmentfault 上也提出了相关的问题：
[when-two-elements-use-transform-to-move-at-the-same-time-why-there-is-a-gap-in](https://stackoverflow.com/questions/61141499/when-two-elements-use-transform-to-move-at-the-same-time-why-there-is-a-gap-in)
[两个元素同时用 transform 做位移动画时，中间出现空隙，是浏览器的 BUG 吗](https://segmentfault.com/q/1010000022334636)

此路不通，只能另寻他路，思考了很久以后，我发现了一个可以规避这个 Bug 的动画方案：

```javascript
setCarouselPanel ($from, $to, direction) {
  this.isAnimate = true
  this.resetCarouselPanel($to, direction)
  this.moveCarouselPanel(direction, $from, $to)
}

resetCarouselPanel ($to, direction) {
  const type = direction === 'left' ? 'next' : 'prev'
  $to.setAttribute('class', `carousel-panel ${type}`)
  this.$panelContainer.classList.add(`${direction}`)
}

moveCarouselPanel (direction, $from, $to) {
  setTimeout(() => {
    $from.setAttribute('class', 'carousel-panel')
    $to.setAttribute('class', 'carousel-panel active')
    this.$panelContainer.classList.remove(`${direction}`)
    this.isAnimate = false
  }, this.duration)
}
```

代码中是直接在`carousel-panel`的父级容器上做的移动操作，这样不仅可以完全解决这个渲染问题，连`requestAnimationFrame`的操作也省去了，可以说是非常完美的做法了

> 后续我又测试了很多次，基本没有发现其他问题，现在的轮播感觉才算是达到一个较为“稳定”的版本了，如果你发现了其他问题，欢迎给我提 issue

## 进度

- [x] Tabs-选项卡
- [x] Collapse-折叠面板
- [x] Pager-分页
- [x] Carousel-走马灯
- [ ] Calendar-日历
- [ ] Tree-树形控件
- [ ] 单元测试
- [ ] TypeScript 重构

目前 `Tabs`、`Collapse`、`Pager`、`Carousel` 等四个组件的基本功能已经初步完成了，`Tabs`、`Collapse`以及后续更新组件的教程文章会陆续发布，敬请期待

本套教程会优先在我的博客更新，欢迎关注我的 [个人网站](https://csdoker.com/) 与 [Github](https://github.com/csdoker)
