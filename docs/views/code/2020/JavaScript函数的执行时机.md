---
title: JavaScript函数的执行时机
date: 2020-03-01
sidebar: false
tags:
 - JavaScript
categories:
 - JavaScript
---

# JavaScript函数的执行时机

```javascript
let i = 0
for(i = 0; i < 6; i++){
  setTimeout(() => {
    console.log(i)
  }, 0)
}
```

<!-- more -->

以上代码中，for循环执行完毕后，i的值为6，此时才打印setTimeout中的i，所以会打印6个6

```javascript
for(let i = 0; i < 6; i++){
  setTimeout(() => {
    console.log(i)
  }, 0)
}
```

这样改进后，每一次执行循环会多创建一个i，所以最后打印出的是0、1、2、3、4、5

如果不用let，还可以像这样达到预期的效果：

```javascript
for(var i = 0; i < 6; i++){
    (function(i) {
        setTimeout(() => {
            console.log(i)
        }, 0)
    })(i)
}
```