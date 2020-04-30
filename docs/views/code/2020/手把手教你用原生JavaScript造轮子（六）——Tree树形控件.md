---
title: 手把手教你用原生JavaScript造轮子（六）——Tree树形控件
date: 2020-04-23
sidebar: false
tags:
 - JavaScript
 - Webpack
 - Babel
 - ES6
 - Wheels
 - Tree
 - 轮子
 - 组件
categories:
 - JavaScript
 - Webpack
 - Babel
---

# Tree 树形控件

> 文档：[Tree](https://csdoker.github.io/tiny-wheels/components/tree.html#%E5%9F%BA%E7%A1%80%E7%94%A8%E6%B3%95)

> 源码：[tiny-wheels](https://github.com/csdoker/tiny-wheels)

> 如果觉得好用就点个 Star 吧~(〃'▽'〃)

<!-- more -->

## 效果

![Tree](https://i.loli.net/2020/04/23/ft7WeCXAVo6TDzH.gif)

## 思路

树形控件的效果，实际上就是对`tree`这种数据结构的一种运用，因为用户传入的数据是嵌套结构的，也就是一种类似于`tree`的结构，我们组件中首先要实现的，就是对这种数据的遍历操作，剩下的所有逻辑都是基于遍历的基础上的

## 实现

> 文章只列出关键部分的代码，其余逻辑可自行研究项目中的源码

这个组件的所有`dom`都是通过 js 生成的，所以`HTML`只需要一个容器元素：

```html
<div class="tree"></div>
```

传入的数据结构是这样的：

```javascript
const treeDatas = [
  {
    title: '标题-1',
    expand: true,
    children: [
      {
        title: '标题-2',
        selected: true
      },
      {
        title: '标题-3',
        expand: true,
        children: [
          {
            title: '标题-4'
          }
        ]
      },
      {
        title: '标题-5',
        expand: true,
        children: [
          {
            title: '标题-6'
          },
          {
            title: '标题-7'
          },
          {
            title: '标题-8'
          }
        ]
      }
    ]
  }
]
```

每一个节点即为一个对象，包含一些配置的属性，而我们要渲染出树形控件的整个结构，就需要遍历它，遍历这种多叉树有很多方法，常用的有递归、DFS、BFS 等，这里使用最简单的递归思路实现：

```javascript
const travel = (node, fn) => {
  fn(node)
  if (!node.children) {
    return
  }
  for (let i = 0; i < node.children.length; i++) {
    travel(node.children[i], fn)
  }
}
```

有了这个遍历方法，就可以渲染出`DOM`结构并绑定事件了：

```javascript
initTreeNode (node) {
    node.key = this.nodeIndex
    this.nodeIndex++
    const { $title, $node, $arrow } = this.getTreeNode(node)
    this.bindTitle($title, node)
    if (!node.children) {
        return $node
    }
    const $children = this.getNodeChildren(node)
    $node.appendChild($children)
    this.$container.appendChild($node)
    this.setTree($children, node)
    this.bindArrow($arrow, $children, node)
    return $node
}
getNodeChildren (node) {
    const $children = document.createElement('div')
    $children.setAttribute('class', 'node-children')
    for (let i = 0; i < node.children.length; i++) {
        const $node = this.initTreeNode(node.children[i])
        $children.appendChild($node)
    }
    return $children
}
```

这个组件的复杂之处就在于，渲染`DOM`结构的时候就需要依次进行绑定事件，设置每个节点的属性等操作，而这些操作都必须拿到当前的节点，对节点和箭头绑定的事件方法如下：

```javascript
bindArrow ($arrow, $children, node) {
    this.isAnimate = false
    $arrow.addEventListener('click', () => {
        if (!this.isAnimate) {
        this.isAnimate = true
        $arrow.classList.toggle('open')
        this.setChildren($children, node)
        node.expand = !node.expand
        this.options.toggle.call(null, node)
        // this.bindChildren($children, node)
        }
    })
    this.bindChildren($children, node)
}

bindTitle ($title, selectedNode) {
    $title.addEventListener('click', () => {
        this.travelTree((node, $node) => {
        if (node.key === selectedNode.key) {
            node.selected = !node.selected
            $node.children[0].children[1].classList.toggle('selected')
        } else {
            if (!this.options.multiple) {
            node.selected = false
            $node.children[0].children[1].classList.remove('selected')
            }
        }
        })
        this.options.select.call(null, this.getSelectedNodes(), selectedNode)
    })
}
travelTree (fn) {
    for (let index = 0; index < this.tree.length; index++) {
        this.travelTreeNode(this.tree[index], this.$container.children[index], fn)
    }
}
travelTreeNode (node, $node, fn) {
    fn(node, $node)
    if (!node.children) {
        return
    }
    for (let i = 0; i < node.children.length; i++) {
        this.travelTreeNode(node.children[i], $node.children[1].children[i], fn)
    }
}
```

`travelTreeNode`方法就是我们最开始实现的遍历方法，只不过由于数据结构是多叉树，根节点可以有多个，所以在外层还需要用一个循环来遍历第一层的节点

这个组件的第二个难点就是点击节点箭头后，子节点的折叠、展开效果，还记得`Carousel`组件中用到的`transitionend`事件吗？这里同样需要借助这个事件来实现我们的逻辑：

```javascript
setChildren ($children, node) {
    if (node.expand) {
        $children.style.height = `${$children.offsetHeight}px`
        setTimeout(() => {
            $children.style.height = '0'
        })
    } else {
        $children.style.display = ''
        const height = $children.offsetHeight
        $children.style.height = '0'
        setTimeout(() => {
            $children.style.height = `${height}px`
        })
    }
}
bindChildren ($children, node) {
    const afterTransition = () => {
        if (!node.expand) {
            $children.style.display = 'none'
        }
        $children.style.height = ''
        this.isAnimate = false
    }
    $children.addEventListener('transitionend', afterTransition)
}
```

动画效果和`Collapse`类似，也是通过改变容器的高度来实现的，只是每次动画结束后都需要重置样式，以防止下次动画时无法获取正确的样式

`Tree`组件的基本功能到这里就算完成了，比较常用的功能还有`checkbox`多选操作等，可以自行拓展

通过这个组件我们可以看到，当组件本身的逻辑变得稍微复杂一点后，代码中的`DOM`操作就会指数级的增加，可以说一大半的代码都是在对`DOM`进行处理，这也是为什么要引入`Vue/React`这样的框架，它们在底层已经帮我们封装了`DOM`操作，极大的减轻了前端工程师的负担，所以当封装像`Tree`这样的业务组件的时候，使用框架后，就可以只关心组件本身的逻辑了

在2020年的当下，用原生JavaScript开发组件的优点也就是在不同的框架、环境之间切换比较方便吧，不过可能也只有这个优点了，因为从易用性、开发效率上讲，框架的优势都是毋庸置疑的

To be continued...
