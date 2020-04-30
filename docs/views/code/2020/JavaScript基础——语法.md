---
title: JavaScript基础——语法
date: 2020-02-20
sidebar: false
tags:
 - JavaScript
categories:
 - JavaScript
---

# 语法

## 表达式

- 1+2表达式的值为3
- add(1,2)表达式的值为函数的返回值
- console.log表达式的值为函数本身
- console.log(3)表达式的值为undefined

<!-- more -->

## 语句

`var a = 1`是一个语句

## 标识符

### 规则

- 第一个字符，可以是Unicode字母或$或_或中文
- 后面的字符，除了上面所说，还可以有数字

### 变量名是标识符

```javascript
var _ = 1
var $ = 2
var ______ = 6
var 你好 = 'hi'
```

## 区块 block

把代码包在一起，常常与if / for / while合用
```javascript
{
    let a = 1
    let b = 2
}
```

## if语句

- if(表达式){语句1}else{语句2}
- {}在语句只有一句的时候可以省略，不建议这样做

最推荐使用的写法：
if (表达式) {
    语句
} else if (表达式) {
    语句
} else {
    语句
}

## switch语句

```javascript
switch (fruit) {
    case "banana":
        // ...
        break;
    case "apple":
        // ...
        break;
    default:
    //...
}
```

## 问号冒号表达式

表达式1 ? 表达式2 : 表达式3

## 短路逻辑

- A && B && C && D 取第一个假值或D，并不会取 true / false
- A || B || C || D 取第一个真值或D，并不会取 true / false

如果fn存在，则执行fn：
fn && fn()

如果A存在则取A，不存在则取B，B是A的保底值：
A = A || B

## while循环

- while(表达式){语句}
- 判断表达式的真假
- 当表达式为真，执行语句，执行完再判断表达式的真假
- 当表达式为假，执行后面的语句

## for循环

for(语句1;表达式2;语句3){
    循环体
}

- 先执行语句1
- 然后判断表达式2
- 如果为真，执行循环体，然后执行语句3
- 如果为假，直接退出循环，执行后面的语句

## label

```javascript
foo: {
    console.log(1);
    break foo;
    console.log('本行不会输出');
}
console.log(2);
```