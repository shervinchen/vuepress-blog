---
title: JavaScript基础——数组
date: 2020-02-28
sidebar: false
tags:
 - JavaScript
categories:
 - JavaScript
---

# 数组

数组是一种特殊的对象，JS其实没有真正的数组，只是用对象模拟数组

典型的数组：

- 元素的数据类型相同
- 使用连续的内存存储
- 通过数字下标获取元素

<!-- more -->

但JS的数组不这样：

- 元素的数据类型可以不同
- 内存不一定是连续的（对象是随机存储的）
- 不能通过数字下标，而是通过字符串下标

JS数组可以有任何key，比如：

```javascript
let arr = [1,2,3]
arr['xxx'] = 1
```

## 创建数组

### 新建

```javascript
let arr = [1, 2, 3]
let arr = new Array(1, 2, 3)
let arr = new Array(3)
```

### 转化

```javascript
let arr = '1,2,3'.split(',')
let arr = '1,2,3'.split('')
Array.from('123')
```

### 伪数组

没有数组共用属性的数组就是伪数组

```javascript
let divList = document.querySelectorAll('div')
```

> 伪数组的原型链中并没有数组的原型

### 合并

```javascript
// 合并两个数组
arr1.concat(arr2)
// 从第二个元素开始截取
arr.slice(1)
// 全部截取
arr.slice(0)
// JS只提供浅拷贝
```

## 删元素

```javascript
let arr = ['a', 'b', 'c']
delete arr['0']
console.log(arr) // [empty, 'b', 'c']
```

### 删除头部元素

```javascript
// arr 被修改，并返回被删元素
arr.shift()
```

### 删除尾部元素

```javascript
// arr 被修改，并返回被删元素
arr.pop()
```

### 删除中间的元素

```javascript
// 删除index的一个元素
arr.splice(index, 1)
// 并在删除位置添加'x'
arr.splice(index, 1, 'x')
// 并在删除位置添加'x','y'
arr.splice(index, 1, 'x', 'y')
```

## 查看所有元素

### 查看所有属性名

```javascript
let arr = [1, 2, 3, 4, 5]
arr.x = 'xxx'
Object.keys(arr)
Object.values(arr)
for (let key in arr) {
    console.log(`${key}:${arr[key]}`)
}
```

### 查看数字（字符串）属性名和值

```javascript
for (let i = 0; i < arr.length; i++) {
    console.log(`${i} : ${arr[i]}`)
}

arr.forEach(function(item, index)  {
    console.log(`${index}: ${item}`)
})
```

```javascript
function forEach(array, fn) {
    for(let i = 0; i < array.length; i++) {
        fn(array[i], i, array)
    }
}
```

### 查看单个属性

```javascript
let arr = [111, 222, 333]
arr[0]

arr[arr.length] === undefined
arr[-1] === undefined

// 查找某个元素是否在数组里
arr.indexOf(item) // 存在返回索引，否则返回-1

// 使用条件查找元素
arr.find(item => item % 2 === 0) // 找第一个偶数

// 使用条件查找元素的索引
arr.findIndex(item => item % 2 === 0) // 找第一个偶数的索引
```

## 增加数组中的元素

### 在尾部加元素

```javascript
// 修改arr，返回新长度
arr.push(newItem)
// 修改arr，返回新长度
arr.push(item1, item2)
```

### 在头部加元素

```javascript
// 修改arr，返回新长度
arr.unshift(newItem)
// 修改arr，返回新长度
arr.unshift(item1, item2)
```

### 在中间添加元素

```javascript
// 在 index 处插入'x'
arr.splice(index, 0, 'x')
arr.splice(index, 0, 'x', 'y')
```

## 修改数组中的元素

### 反转顺序

```javascript
// 修改原数组
arr.reverse()
```

### 自定义顺序

```javascript
arr.sort((a, b) => a - b)
```

## 数组变换

```javascript
// map filter reduce都不会改变原数组

// 数组的每一项被cook后放入一个新数组内
map(['cow', 'potato', 'chicken', 'corn'], cook) => ['hamburger', 'french fries', 'chicken leg', 'popcorn']

filter(['hamburger', 'french fries', 'chicken leg', 'popcorn'], isVegetarian) => ['french fries', 'popcorn']

// 依次eat数组的每一项 最后得到reduce的返回值
reduce(['hamburger', 'french fries', 'chicken leg', 'popcorn'], eat) => 'shit'

let arr = [1, 2, 3, 4, 5, 6]
arr.map(item => item * item) // [1, 4, 9, 16, 25, 36]
arr.reduce((result, item) => { return result.concat(item * item) }, [])

arr.filter(item => item % 2 === 0) // [2, 4, 6]
arr.reduce((result, item) => {
    return result.concat(item % 2 === 1 ? [] : item)
}, [])

let sum = 0
for (let i = 0; i < arr.length; i++) {
    sum += arr[i]
}

// sum是结果，sum的初始值是第二个参数，每次return的值作为第二次的sum
arr.reduce((sum, item) => { return sum + item }, 0)
```

- map：n变n
- filter：n变少
- reduce：n变1

### 面试题

数据变换：

```javascript
let arr = [
    { 名称: '动物', id: 1, parent: null },
    { 名称: '狗', id: 2, parent: 1 },
    { 名称: '猫', id: 3, parent: 1 }
]
// 以上数据变成对象
{
    id: 1,
    名称: '动物',
    children: [
        {
            id: 2,
            名称: '狗',
            children: null
        },
        {
            id: 3,
            名称: '猫',
            children: null
        }
    ]
}

arr.reduce((result, item) => {
    if (item.parent === null) {
        result.id = item.id
        result['名称']= item['名称']
    } else {
        result.children.push(item)
        delete item.parent
        item.children = null
    }
    return result
}, { id: null, children: [] })
```
