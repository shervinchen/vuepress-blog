---
title: HTML常用标签
date: 2020-01-22
sidebar: false
tags:
 - HTML
categories:
 - HTML
---

一些HTML常用标签的用法总结

<!-- more -->

# a标签

## 属性

- href
- target
- download
- rel=noopener

## 作用

- 跳转到外部页面
- 跳转内部锚点
- 跳转到邮箱或电话

## 取值

### 网址

- https://google.com
- http://google.com
- //google.com

### 路径

- /a/b/c 以及 a/b/c
- index.html 以及 ./index.html

### 伪协议

- javascript:代码;
- mailto:邮箱
- tel:手机号

### id

- href=#xxx

## 内置名字

- blank
- top
- parent
- self

# img 标签

## 作用

发出 get 请求，展示一张图片

## 属性

alt / height / width / src

## 事件

onload / onerror

## 响应式

max-width: 100%

# table 标签

## 普通用法

```html
<table>
    <thead>
        <tr>
            <th>英语</th>
            <th>翻译</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <td>hyper</td>
            <td>超级</td>
        </tr>
        <tr>
            <td>target</td>
            <td>目标</td>
        </tr>
        <tr>
            <td>reference</td>
            <td>引用</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <td>空</td>
            <td>空</td>
        </tr>
    </tfoot>
</table>
```

## 多表头

```html
<table>
    <thead>
        <tr>
            <th></th>
            <th>小红</th>
            <th>小明</th>
            <th>小颖</th>
        </tr>
    </thead>
    <tbody>
        <tr>
            <th>数学</th>
            <td>61</td>
            <td>91</td>
            <td>85</td>
        </tr>
        <tr>
            <th>语文</th>
            <td>61</td>
            <td>91</td>
            <td>85</td>
        </tr>
        <tr>
            <th>英语</th>
            <td>61</td>
            <td>91</td>
            <td>85</td>
        </tr>
    </tbody>
    <tfoot>
        <tr>
            <th>总分</th>
            <td>200</td>
            <td>200</td>
            <td>200</td>
        </tr>
    </tfoot>
</table>
```

## style reset

```css
table {
    table-layout: auto;
    border-collapse: collapse;
    border-spacing: 0;
}
```

# form标签

## 作用

发 get 或 post 请求，然后刷新页面

## 属性

action / autocomplete / method / target

## 事件

onsubmit
