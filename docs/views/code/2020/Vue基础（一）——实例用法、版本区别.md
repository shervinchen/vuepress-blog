---
title: Vue基础（一）——实例用法、版本区别
date: 2020-05-08
sidebar: false
tags:
 - JavaScript
 - Vue
categories:
 - JavaScript
 - Vue
---

## 如何使用Vue实例

### 方法一：从HTML得到视图

- 使用完整版Vue
- 从CDN引用vue.js或者vue.min.js即可
- 也可以通过import引用vue.js或者vue.min.js

### 方法二：用JS构建视图

- 使用vue.runtime.js

### 方法三：使用vue-loader

- 可以把.vue文件翻译成h构建方法

## 版本区别

### 完整版

- 有compiler
- 写在HTML里或者写在template选项中
- cdn引入：vue.js
- webpack引入：需要配置alias
- @vue/cli引入：需要额外配置

### 非完整版（运行版本）

- 没有compiler
- 写在render函数里，用h来创建标签
- cdn引入：vue.runtime.js
- webpack引入：默认使用运行版
- @vue/cli引入：默认使用运行版

### 最佳实践

总是使用非完整版，然后配合vue-loader和vue文件，思路：

1. 保证用户体验，用户下载的JS文件体积更小，但只支持h函数
2. 保证开发体验，开发者可直接在vue文件中写HTML标签，而不写h函数
3. 脏活让loader做，vue-loader把vue文件里的HTML转为h函数