---
title: JavaScript基础——对象基本用法
date: 2020-02-23
sidebar: false
tags:
 - JavaScript
categories:
 - JavaScript
---

# 对象

## 定义

- 无序的数据集合
- 键值对的集合

## 写法

```javascript
let obj = { 'name': 'frank', 'age': 18 }
let obj = new Object({ 'name': 'frank' })
console.log({ 'name': 'frank', 'age': 18 })
```

<!-- more -->

### 细节

- 键名是字符串，不是标识符，可以包含任意字符
- 引号可省略，省略之后就只能写标识符
- 就算引号省略了，键名也还是字符串

> Object.keys(obj)可以得到 obj 的所有 key

- 属性名：每个key都是对象的属性名（property）
- 属性值：每个value都是对象的属性值

## 删除属性

delete obj.xxx 或 delete obj['xxx']

不含属性名：xxx in obj === false

含有属性名，但是值为undefined：
'xxx' in obj && obj.xxx === undefined

## 查看所有属性

查看自身所有属性：Object.keys(obj)
查看所有值：Object.values
查看所有属性和值：Object.entries

查看自身+共有属性：
console.dir(obj)
或者依次用Object.keys打印出obj.__proto__

判断一个属性是自身的还是共有的：obj.hasOwnProperty('toString')

## 原型

### 每个对象都有原型

- 原型里存着对象的共有属性
- 比如obj的原型就是一个对象
- obj.__proto__存着这个对象的地址
- 这个对象里有toString / constructor / valueOf等属性

### 对象的原型也是对象

- 所有对象的原型也有原型
- obj={}的原型即为所有对象的原型
- 这个原型包含所有对象的共有属性，是对象的根
- 这个原型也有原型，是null

## 修改或增加属性（写属性）

### 直接赋值

```javascript
let obj = { name: 'frank' } // name是字符串
obj.name = 'frank' // name是字符串
obj['name'] = 'frank'
obj[name] = 'frank' // 错，因name值不确定
obj['na'+'me'] = 'frank'

let key = 'name'
obj[key] = 'frank'

let key = 'name'
obj.key = 'frank' // 错，因为 obj.key 等价于 obj['key']
```

### 批量赋值

```javascript
Object.assign(obj, { age: 18, gender: 'man' })
```

### 修改或增加共有属性

```javascript
obj.__proto__.toString = 'xxx'
Object.prototype.toString = 'xxx'
```

### 修改隐藏属性

```javascript
let obj = { name: 'frank' }
let common = { kind: 'human' }
obj.__proto__ = common // 不推荐

let obj = Object.create(common)
obj.name = 'frank'
```