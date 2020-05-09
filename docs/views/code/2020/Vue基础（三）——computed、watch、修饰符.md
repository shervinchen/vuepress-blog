---
title: Vue基础（三）——computed、watch、修饰符
date: 2020-05-09
sidebar: false
tags:
 - JavaScript
 - Vue
categories:
 - JavaScript
 - Vue
---

## computed——计算属性

被计算出来的属性就是计算属性

- 如果依赖的属性没有变化，就不会重新计算
- getter / setter 默认不会做缓存，Vue做了特殊处理

## watch——侦听

当数据变化时，执行一个函数

```javascript
// 引用完整版 Vue，方便讲解
import Vue from "vue/dist/vue.js";

Vue.config.productionTip = false;

new Vue({
  data: {
    n: 0,
    history: [],
    inUndoMode: false
  },
  watch: {
    n: function(newValue, oldValue) {
      console.log(this.inUndoMode);
      if (!this.inUndoMode) {
        this.history.push({ from: oldValue, to: newValue });
      }
    }
  },
  // 不如用 computed 来计算 displayName
  template: `
    <div>
      {{n}}
      <hr />
      <button @click="add1">+1</button>
      <button @click="add2">+2</button>
      <button @click="minus1">-1</button>
      <button @click="minus2">-2</button>
      <hr/>
      <button @click="undo">撤销</button>
      <hr/>

      {{history}}
    </div>
  `,
  methods: {
    add1() {
      this.n += 1;
    },
    add2() {
      this.n += 2;
    },
    minus1() {
      this.n -= 1;
    },
    minus2() {
      this.n -= 2;
    },
    undo() {
      const last = this.history.pop();
      this.inUndoMode = true;
      console.log("ha" + this.inUndoMode);
      const old = last.from;
      this.n = old; // watch n 的函数会异步调用
      this.$nextTick(() => {
        this.inUndoMode = false;
      });
    }
  }
}).$mount("#app");
```

### 语法1

```javascript
watch: {
    o1: () => {}, // 这里的this是全局对象
    o2: function(value, oldValue){},
    o3(){},
    o4: [f1, f2],
    o5: 'methodName',
    o6: {handler: fn, deep: true, immediate: true},
    'object.a': function(){}
}
```

### 语法2

```javascript
vm.$watch('xxx', fn, {deep: .., immediate: ..})
```

## .sync修饰符

修饰符sync的功能是：当一个子组件改变了一个 prop 的值时，这个变化也会同步到父组件中所绑定

```html
<comp :foo.sync="bar"></comp>
<comp :foo="bar" @update:foo="val => bar = val"></comp>
```

```javascript
this.$emit('update:foo', newValue)
```

下边通过一个实例（弹窗的关闭事件）来说明这个代码到底是怎么运用的

```html
<template>
    <div class="details">
        <myComponent :show.sync='valueChild' style="padding: 30px 20px 30px 5px;border:1px solid #ddd;margin-bottom: 10px;"></myComponent>
        <button @click="changeValue">toggle</button>
    </div>
</template>
```

```javascript
import Vue from 'vue'
Vue.component('myComponent', {
      template: `<div v-if="show">
                    <p>默认初始值是{{show}}，所以是显示的</p>
                    <button @click.stop="closeDiv">关闭</button>
                 </div>`,
      props:['show'],
      methods: {
        closeDiv() {
          this.$emit('update:show', false); //触发 input 事件，并传入新值
        }
      }
})
export default{
    data(){
        return{
            valueChild:true,
        }
    },
    methods:{
        changeValue(){
            this.valueChild = !this.valueChild
        }
    }
}
```
