---
title: 源码使用方法
icon: 'code'
author: 落雪無痕
category:
  - 软件
  - 桌面端
tag:
  - 源码
---

#### 环境要求

- Node.js 16+

#### 环境准备

1. **安装 Node.js 环境（如已安装请跳过）:** 下载[Node.js](https://nodejs.org/en/)安装结束后，打开命令行输入`node -v`将会
   输出 Node.js 的版本号即表示已安装完成
2. **拉取代码:** 克隆本仓库代码
3. **安装依赖:** 在项目根目录打开命令行，执行命令：`npm install`，若此命令执行的过程中报错可以尝试百度报错内容找解决方法

:::tip

若`npm install`执行错误，你可以尝试使用 `cnpm`，或者修改 npm 源为`淘宝源`。

:::

#### 开发&构建

```bash
# 开发模式
npm run dev

# 构建免安装版
npm run pack:dir

# 构建安装包（Windows版）
npm run pack:win

# 构建安装包（Mac版）
npm run pack:mac

# 构建安装包（Linux版）
npm run pack:linux

```
