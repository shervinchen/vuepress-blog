---
title: 浅析URL
date: 2020-02-04
sidebar: false
tags:
 - HTTP
categories:
 - HTTP
---

# HTTP

HTTP（协议）：基于TCP、IP

WWW = URL + HTTP+ HTML

## IP：Internet Protocal

主要约定了两件事：

1. 如何定位一台设备
2. 如何封装数据报文，以跟其他设备交流

<!-- more -->

几个特殊的IP：

- 127.0.0.1表示自己
- localhost通过hosts指定为自己
- 0.0.0.0不表示任何设备

## 端口：port

一台机器可以提供不同的服务：

- 要提供HTTP服务最好使用80端口
- 要提供HTTPS服务最好使用443端口
- 要提供FTP服务最好使用21端口
- 一共有65535个端口

规则：

- 0到1023（2的10次方减1）号端口是留给系统使用的
- 你只有拥有了管理员权限后，才能使用这1024个端口
- 其他端口可以给普通用户使用
- 比如http-server默认使用8080端口
- 一个端口如果被占用，你就只能换一个端口

## DNS

使用命令可以查看DNS：
nslookup baidu.com

## 域名

- 一个域名可以对应不同的IP（这个叫做均衡负载，防止一台机器扛不住）
- 一个IP可以对应不同域名（这个叫做共享主机，穷开发者会这么做）

## URL：Uniform Resource Locator

协议 + 域名或IP + 端口号 + 路径 + 查询字符串 + 锚点

## curl

用curl可以发HTTP请求：

curl -v http://baidu.com
curl -s -v -- https://www.baidu.com
