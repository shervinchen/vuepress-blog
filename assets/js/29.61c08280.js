(window.webpackJsonp=window.webpackJsonp||[]).push([[29],{473:function(v,_,a){"use strict";a.r(_);var t=a(4),s=Object(t.a)({},(function(){var v=this,_=v.$createElement,a=v._self._c||_;return a("ContentSlotsDistributor",{attrs:{"slot-key":v.$parent.slotKey}},[a("h1",{attrs:{id:"数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数据类型"}},[v._v("#")]),v._v(" 数据类型")]),v._v(" "),a("h2",{attrs:{id:"数字与字符串"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字与字符串"}},[v._v("#")]),v._v(" 数字与字符串")]),v._v(" "),a("p",[v._v("都是一，为什么要分1和'1'")]),v._v(" "),a("h3",{attrs:{id:"功能不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#功能不同"}},[v._v("#")]),v._v(" 功能不同")]),v._v(" "),a("ul",[a("li",[v._v("数字是数字，字符串是字符串，要严谨")]),v._v(" "),a("li",[v._v("数字能加减乘除，字符串不行")]),v._v(" "),a("li",[v._v("字符串能表示电话号码，数字不行")])]),v._v(" "),a("h3",{attrs:{id:"存储形式不同"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#存储形式不同"}},[v._v("#")]),v._v(" 存储形式不同")]),v._v(" "),a("ul",[a("li",[v._v("JS中，数字是用64位浮点数的形式存储的")]),v._v(" "),a("li",[v._v("JS中，字符串是用类似的UTF8形式存储的（UCS-2）")])]),v._v(" "),a("h2",{attrs:{id:"二进制"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#二进制"}},[v._v("#")]),v._v(" 二进制")]),v._v(" "),a("p",[v._v("如何存数字？十进制转二进制")]),v._v(" "),a("h3",{attrs:{id:"_10转2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_10转2"}},[v._v("#")]),v._v(" 10转2")]),v._v(" "),a("p",[v._v("31变成二进制：\n31 = 0 × 2^5 + 1 × 2^4 + 1 × 2^3 + 1 × 2^2 + 1 × 2^1 + 1 × 2^0")]),v._v(" "),a("p",[v._v("31（十进制） = 011111（二进制）")]),v._v(" "),a("h3",{attrs:{id:"_2转10"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2转10"}},[v._v("#")]),v._v(" 2转10")]),v._v(" "),a("p",[v._v("100011变成十进制：\n100011 = 1 × 2^5 + 1 × 2^1 + 1 × 2^0 = 35")]),v._v(" "),a("p",[v._v("每一位乘以2的N次方，然后加起来即可")]),v._v(" "),a("h2",{attrs:{id:"数字-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#数字-number"}},[v._v("#")]),v._v(" 数字 number")]),v._v(" "),a("p",[v._v("64位浮点数")]),v._v(" "),a("h3",{attrs:{id:"写法"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#写法"}},[v._v("#")]),v._v(" 写法")]),v._v(" "),a("ul",[a("li",[v._v("整数写法：1")]),v._v(" "),a("li",[v._v("小数写法：0.1")]),v._v(" "),a("li",[v._v("科学计数法：1.23e4")]),v._v(" "),a("li",[v._v("八进制写法：0123或00123或0o123")]),v._v(" "),a("li",[v._v("十六进制写法：0x3F或0X3F")]),v._v(" "),a("li",[v._v("二进制写法：0b11或0B11")])]),v._v(" "),a("h3",{attrs:{id:"特殊值"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#特殊值"}},[v._v("#")]),v._v(" 特殊值")]),v._v(" "),a("ul",[a("li",[v._v("正0和负0，都等于0")]),v._v(" "),a("li",[v._v("无穷大：Infinity / +Infinity / -Infinity")]),v._v(" "),a("li",[v._v("无法表示的数字：NaN（Not a Number）")])]),v._v(" "),a("h2",{attrs:{id:"字符串-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#字符串-string"}},[v._v("#")]),v._v(" 字符串 string")]),v._v(" "),a("p",[v._v("每个字符两个字节")]),v._v(" "),a("ul",[a("li",[v._v("单引号：'你好'")]),v._v(" "),a("li",[v._v('双引号："你好"')]),v._v(" "),a("li",[v._v("反引号："),a("code",[v._v("你好")])])]),v._v(" "),a("blockquote",[a("p",[v._v("注意：引号不属于字符串的一部分")])]),v._v(" "),a("p",[v._v("在单引号里面包含单引号：")]),v._v(" "),a("ul",[a("li",[v._v("'it's ok'")]),v._v(" "),a("li",[v._v('"it\'s ok"')]),v._v(" "),a("li",[a("code",[v._v("it's ok")])])]),v._v(" "),a("h2",{attrs:{id:"布尔-boolean"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#布尔-boolean"}},[v._v("#")]),v._v(" 布尔 boolean")]),v._v(" "),a("p",[v._v("只有两个值：true和false，注意大小写")]),v._v(" "),a("p",[v._v("下列运算符会得到bool值：")]),v._v(" "),a("ul",[a("li",[v._v("否定运算：!value")]),v._v(" "),a("li",[v._v("相等运算：1==2 / 1!=2 / 3===4 / 3!==4")]),v._v(" "),a("li",[v._v("比较运算：1>2 / 1>=2 / 3<4 / 3<=4")])]),v._v(" "),a("h2",{attrs:{id:"转义"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#转义"}},[v._v("#")]),v._v(" 转义")]),v._v(" "),a("p",[v._v("用一种写法表示你想要的东西：")]),v._v(" "),a("ul",[a("li",[v._v("' 表示 '")]),v._v(" "),a("li",[v._v('" 表示 "')]),v._v(" "),a("li",[v._v("\\n 表示 换行")]),v._v(" "),a("li",[v._v("\\r 表示 回车")]),v._v(" "),a("li",[v._v("\\t 表示 tab制表符")]),v._v(" "),a("li",[v._v("\\ 表示 \\")]),v._v(" "),a("li",[v._v("\\uFFFF 表示对应的Unicode字符")]),v._v(" "),a("li",[v._v("\\xFF 表示前256个Unicode字符")])]),v._v(" "),a("h2",{attrs:{id:"base64转码"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#base64转码"}},[v._v("#")]),v._v(" base64转码")]),v._v(" "),a("ul",[a("li",[v._v("window.btoa：正常字符串转为Base64编码的字符串")]),v._v(" "),a("li",[v._v("window.atob：Base64编码的字符串转为原来的字符串")])]),v._v(" "),a("h2",{attrs:{id:"js中的数据类型"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#js中的数据类型"}},[v._v("#")]),v._v(" JS中的数据类型")]),v._v(" "),a("p",[v._v("7种（大小写无所谓）：")]),v._v(" "),a("ul",[a("li",[v._v("数字 number")]),v._v(" "),a("li",[v._v("字符串 string")]),v._v(" "),a("li",[v._v("布尔 bool")]),v._v(" "),a("li",[v._v("符号 symbol")]),v._v(" "),a("li",[v._v("空 undefined")]),v._v(" "),a("li",[v._v("空 null")]),v._v(" "),a("li",[v._v("对象 object")]),v._v(" "),a("li",[v._v("总结：四基两空一对象")])]),v._v(" "),a("p",[v._v("以下不是数据类型：\n数组、函数、日期，它们都属于object")]),v._v(" "),a("p",[v._v("五个falsy值：")]),v._v(" "),a("blockquote",[a("p",[v._v("falsy就是相当于false但又不是false的值")])]),v._v(" "),a("p",[v._v("分别是：")]),v._v(" "),a("ol",[a("li",[v._v("undefined")]),v._v(" "),a("li",[v._v("null")]),v._v(" "),a("li",[v._v("0")]),v._v(" "),a("li",[v._v("NaN")]),v._v(" "),a("li",[v._v("''")])]),v._v(" "),a("h2",{attrs:{id:"变量声明"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#变量声明"}},[v._v("#")]),v._v(" 变量声明")]),v._v(" "),a("p",[v._v("三种声明方式：")]),v._v(" "),a("div",{staticClass:"language-javascript line-numbers-mode"},[a("pre",{pre:!0,attrs:{class:"language-javascript"}},[a("code",[a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("var")]),v._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("let")]),v._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),v._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[v._v("const")]),v._v(" a "),a("span",{pre:!0,attrs:{class:"token operator"}},[v._v("=")]),v._v(" "),a("span",{pre:!0,attrs:{class:"token number"}},[v._v("1")]),v._v("\n")])]),v._v(" "),a("div",{staticClass:"line-numbers-wrapper"},[a("span",{staticClass:"line-number"},[v._v("1")]),a("br"),a("span",{staticClass:"line-number"},[v._v("2")]),a("br"),a("span",{staticClass:"line-number"},[v._v("3")]),a("br")])]),a("p",[v._v("区别：")]),v._v(" "),a("ul",[a("li",[v._v("var 是过时的、不好用的方式")]),v._v(" "),a("li",[v._v("let是新的，更合理的方式")]),v._v(" "),a("li",[v._v("const是声明时必须赋值，且不能再改的方式")])]),v._v(" "),a("h2",{attrs:{id:"类型转换"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#类型转换"}},[v._v("#")]),v._v(" 类型转换")]),v._v(" "),a("h3",{attrs:{id:"number-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#number-string"}},[v._v("#")]),v._v(" number => string")]),v._v(" "),a("ul",[a("li",[v._v("String(n)")]),v._v(" "),a("li",[v._v("n + ''")])]),v._v(" "),a("h3",{attrs:{id:"string-number"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#string-number"}},[v._v("#")]),v._v(" string => number")]),v._v(" "),a("ul",[a("li",[v._v("Number(s)")]),v._v(" "),a("li",[v._v("parseInt(s) / parseFloat(s)")]),v._v(" "),a("li",[v._v("s - 0")])]),v._v(" "),a("h3",{attrs:{id:"x-bool"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#x-bool"}},[v._v("#")]),v._v(" x => bool")]),v._v(" "),a("ul",[a("li",[v._v("Boolean(x)")]),v._v(" "),a("li",[v._v("!!x")])]),v._v(" "),a("h3",{attrs:{id:"x-string"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#x-string"}},[v._v("#")]),v._v(" x => string")]),v._v(" "),a("ul",[a("li",[v._v("String(x)")]),v._v(" "),a("li",[v._v("x.toString(x)")])])])}),[],!1,null,null,null);_.default=s.exports}}]);