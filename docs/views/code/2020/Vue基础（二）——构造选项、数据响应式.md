---
title: Vue基础（二）——构造选项、数据响应式
date: 2020-05-09
sidebar: false
tags:
 - JavaScript
 - Vue
categories:
 - JavaScript
 - Vue
---

## 实例

```javascript
const vm = new Vue(options)
```

- vm对象封装了对视图的所有操作，包括数据读写、事件绑定、DOM更新
- vm的构造函数是Vue，按照ES6的说法，vm所属的类是Vue
- options是new Vue()的参数，一般称之为选项或构造选项

## 构造选项

- 数据：data、props、propsData、computed、methods、watch
- DOM：el、template、render、renderError
- 生命周期钩子：beforeCreate、created、beforeMount、mounted、beforeUpdate、updated、activated、deactivated、beforeDestroy、destroyed、errorCaptured
- 资源：directives、filters、components
- 组合：parent、mixins、extends、provide、inject

## 数据响应式

```javascript
let data0 = {
  n: 0
}

// 需求一：用 Object.defineProperty 定义 n
let data1 = {}

Object.defineProperty(data1, 'n', {
  value: 0
})

console.log(`需求一：${data1.n}`)

// 总结：这煞笔语法把事情搞复杂了？非也，继续看。

// 需求二：n 不能小于 0
// 即 data2.n = -1 应该无效，但 data2.n = 1 有效

let data2 = {}

data2._n = 0 // _n 用来偷偷存储 n 的值

Object.defineProperty(data2, 'n', {
  get(){
    return this._n
  },
  set(value){
    if(value < 0) return
    this._n = value
  }
})

console.log(`需求二：${data2.n}`)
data2.n = -1
console.log(`需求二：${data2.n} 设置为 -1 失败`)
data2.n = 1
console.log(`需求二：${data2.n} 设置为 1 成功`)

// 抬杠：那如果对方直接使用 data2._n 呢？
// 算你狠

// 需求三：使用代理

let data3 = proxy({ data:{n:0} }) // 括号里是匿名对象，无法访问

function proxy({data}/* 解构赋值，别TM老问 */){
  const obj = {}
  // 这里的 'n' 写死了，理论上应该遍历 data 的所有 key，这里做了简化
  // 因为我怕你们看不懂
  Object.defineProperty(obj, 'n', {
    get(){
      return data.n
    },
    set(value){
      if(value<0)return
      data.n = value
    }
  })
  return obj // obj 就是代理
}

// data3 就是 obj
console.log(`需求三：${data3.n}`)
data3.n = -1
console.log(`需求三：${data3.n}，设置为 -1 失败`)
data3.n = 1
console.log(`需求三：${data3.n}，设置为 1 成功`)

// 杠精你还有话说吗？
// 杠精说有！你看下面代码
// 需求四

let myData = {n:0}
let data4 = proxy({ data:myData }) // 括号里是匿名对象，无法访问

// data3 就是 obj
console.log(`杠精：${data4.n}`)
myData.n = -1
console.log(`杠精：${data4.n}，设置为 -1 失败了吗！？`)

// 我现在改 myData，是不是还能改？！你奈我何
// 艹，算你狠

// 需求五：就算用户擅自修改 myData，也要拦截他

let myData5 = {n:0}
let data5 = proxy2({ data:myData5 }) // 括号里是匿名对象，无法访问

function proxy2({data}/* 解构赋值，别TM老问 */){
  // 这里的 'n' 写死了，理论上应该遍历 data 的所有 key，这里做了简化
  // 因为我怕你们看不懂
  let value = data.n
  Object.defineProperty(data, 'n', {
    get(){
      return value
    },
    set(newValue){
      if(newValue<0)return
      value = newValue
    }
  })
  // 就加了上面几句，这几句话会监听 data

  const obj = {}
  Object.defineProperty(obj, 'n', {
    get(){
      return data.n
    },
    set(value){
      if(value<0)return//这句话多余了
      data.n = value
    }
  })
  
  return obj // obj 就是代理
}

// data3 就是 obj
console.log(`需求五：${data5.n}`)
myData5.n = -1
console.log(`需求五：${data5.n}，设置为 -1 失败了`)
myData5.n = 1
console.log(`需求五：${data5.n}，设置为 1 成功了`)


// 这代码看着眼熟吗？
// let data5 = proxy2({ data:myData5 }) 
// let vm = new Vue({data: myData})

// 现在我们可以说说 new Vue 做了什么了
```

### Object.defineProperty

- 可以给对象添加属性value
- 可以给对象添加getter / setter
- getter / setter用于对属性的读写进行监控

