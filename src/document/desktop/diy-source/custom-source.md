---
title: 编写自定义源
author: 落雪無痕
category:
  - 软件
  - 桌面端
tag:
  - 自定义源
---

文件请使用 UTF-8 编码格式编写，脚本所用编程语言为 JavaScript，可以使用 ES6+语法，脚本与应用的交互是使用类似事件收发的方
式进行，这是一个基本的脚本例子：

```js
/**
 * @name 测试音乐源
 * @description 我只是一个测试音乐源哦
 * @version 1.0.0
 * @author xxx
 * @homepage http://xxx
 */

const { EVENT_NAMES, request, on, send } = window.lx

const qualitys = {
  kw: {
    '128k': '128',
    '320k': '320',
    flac: 'flac',
  },
}

const httpRequest = (url, options) =>
  new Promise((resolve, reject) => {
    request(url, options, (err, resp) => {
      if (err) return reject(err)
      resolve(resp.body)
    })
  })

const apis = {
  kw: {
    musicUrl({ songmid }, quality) {
      return httpRequest('http://xxx').then(data => {
        return data.url
      })
    },
  },
}

// 注册应用API请求事件
// source 音乐源，可能的值取决于初始化时传入的sources对象的源key值
// info 请求附加信息，内容根据action变化
// action 请求操作类型，目前只有musicUrl，即获取音乐URL链接，
//    当action为musicUrl时info的结构：{type, musicInfo}，
//        info.type：音乐质量，可能的值有128k / 320k / flac（取决于初始化时对应源传入的qualitys值中的一个），
//        info.musicInfo：音乐信息对象，里面有音乐ID、名字等信息

on(EVENT_NAMES.request, ({ source, action, info }) => {
  // 回调必须返回 Promise 对象
  switch (action) {
    // action 为 musicUrl 时需要在 Promise 返回歌曲 url
    case 'musicUrl':
      return apis[source].musicUrl(info.musicInfo, qualitys[source][info.type]).catch(err => {
        console.log(err)
        return Promise.reject(err)
      })
  }
})

// 脚本初始化完成后需要发送inited事件告知应用

send(EVENT_NAMES.inited, {
  status: true, // 初始化成功 or 失败
  openDevTools: false, // 是否打开开发者工具，方便用于调试脚本
  sources: {
    // 当前脚本支持的源
    kw: {
      // 支持的源对象，可用key值：kw/kg/tx/wy/mg
      name: '酷我音乐',
      type: 'music', // 目前固定为 music
      actions: ['musicUrl'], // 目前固定为 ['musicUrl']
      qualitys: ['128k', '320k', 'flac'], // 当前脚本的该源所支持获取的Url音质，有效的值有：['128k', '320k', 'flac']
    },
  },
})
```

## 自定义源信息

文件的开头必须包含以下注释：

```js
/**
 * @name 测试脚本
 * @description 我只是一个测试脚本
 * @version 1.0.0
 * @author xxx
 * @homepage http://xxx
 */
```

- `@name `：源的名字，建议不要过长，24 个字符以内

- `@description `：源的描述，建议不要过长，36 个字符以内，可不填，不填时必须保留 @description

- `@version`：源的版本号，可不填，不填时可以删除 @version

- `@author `：脚本作者名字，可不填，不填时可以删除 @author

- `@homepage `：脚本主页，可不填，不填时可以删除 @homepage

## `window.lx`

应用为脚本暴露的 API 对象。

### `window.lx.version`

自定义源 API 版本，API 变更时此版本号将会更改（新增于 v1.14.0 之后）

### `window.lx.EVENT_NAMES`

常量事件名称对象，发送、注册事件时传入事件名时使用，可用值：

| 事件名        | 描述                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               |
| ------------- | -------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `inited`      | 脚本初始化完成后发送给应用的事件名，发送该事件时需要传入以下信息：`{status, sources, openDevTools}`<br />`status`：初始化结果（`true`成功，`false`失败）<br />`openDevTools`：是否打开 DevTools，此选项可用于开发脚本时的调试<br />`sources`：支持的源信息对象，<br />`sources[kw/kg/tx/wy/mg].name`：源的名字（目前非必须）<br />`sources[kw/kg/tx/wy/mg].type`：源类型，目前固定值需为`music`<br />`sources[kw/kg/tx/wy/mg].actions`：支持的 actions，由于目前只支持`musicUrl`，所以固定传`['musicUrl']`即可<br />`sources[kw/kg/tx/wy/mg].qualitys`：该源支持的音质列表，有效的值为`['128k', '320k', 'flac']`，该字段用于控制应用可用的音质类型 |
| `request`     | 应用 API 请求事件名，回调入参：`handler({ source, action, info})`，回调必须返回`Promise`对象<br />`source`：音乐源，可能的值取决于初始化时传入的`sources`对象的源 key 值<br />`info`：请求附加信息，内容根据`action`变化<br />`action`：请求操作类型，目前只有`musicUrl`，即获取音乐 URL 链接，需要在 Promise 返回歌曲 url，`info`的结构：`{type, musicInfo}`，`info.type`：音乐质量，可能的值有`128k` / `320k` / `flac`（取决于初始化时对应源传入的`qualitys`值中的一个），`info.musicInfo`：音乐信息对象，里面有音乐 ID、名字等信息                                                                                                              |
| `updateAlert` | 显示源更新弹窗，发送该事件时的参数：`{log, updateUrl}`<br />`log`：更新日志，必传，字符串类型，内容可以使用`\n`换行，最大长度 1024，超过此长度后将被截取超出的部分<br />`updateUrl`：更新地址，用于引导用户去该地址更新源，选传，需为 http 协议的 url 地址，最大长度 1024<br />此事件每次运行脚本只能调用一次（源版本 v1.2.0 新增）<br />例子：`lx.send(lx.EVENT_NAMES.updateAlert, { log: 'hello world', updateUrl: 'https://xxx.com' })`                                                                                                                                                                                                         |

### `window.lx.on`

事件注册方法，应用主动与脚本通信时使用：

```js
/**
 * @param event_name 事件名
 * @param handler 事件处理回调 -- 注意：注册的回调必须返回 Promise 对象
 */

window.lx.on(event_name, handler)
```

**注意：** 注册的回调必须返回 `Promise` 对象。

### `window.lx.send`

事件发送方法，脚本主动与应用通信时使用：

```js
/**
 * @param event_name 事件名
 * @param datas 要传给应用的数据
 */

window.lx.send(event_name, datas)
```

### `window.lx.request`

HTTP 请求方法，用于发送 HTTP 请求，此 HTTP 请求方法不受跨域规则限制：

```js
/**
 * @param url 请求的URL
 * @param options 请求选项，可用选项有 method / headers / body / form / formData / timeout
 * @param callback 请求结果的回调 入参：err, resp, body
 * @return 返回一个方法，调用此方法可以终止HTTP请求
 */

const cancelHttp = window.lx.request(url, options, callback)
```

### `window.lx.utils`

应用提供给脚本的工具方法：

- `window.lx.utils.buffer.from`：对应 Node.js 的 `Buffer.from`

- `window.lx.utils.buffer.bufToString`：Buffer 转字符串 `bufToString(buffer, format)`，`format`对应 Node.js

  - `Buffer.toString`的参数（v1.14.0 之后新增）

- `window.lx.utils.crypto.aesEncrypt`：AES 加密 `aesEncrypt(buffer, mode, key, iv)`

- `window.lx.utils.crypto.md5`：MD5 加密 `md5(str)`

- `window.lx.utils.crypto.randomBytes`：生成随机字符串 `randomBytes(size)`

- `window.lx.utils.crypto.rsaEncrypt`：RSA 加密 `rsaEncrypt(buffer, key)`

目前仅提供以上工具方法，如果需要其他方法可以开 issue 讨论。
