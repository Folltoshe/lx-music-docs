---
title: 软件下载
icon: 'download'
category:
  - 下载
tag:
  - 软件下载
---

<n-message-provider>
  <downloadList />
</n-message-provider>

<script setup>
  import downloadList from '@views/Download/list.vue'
</script>

**若你不懂选择哪个版本，电脑建议优先使用安装版(文件名以`x64-Setup.exe`结尾)，手机优先使用arm64版(文件名以`arm64-v8a.apk`结尾)更多请看[说明](#安装包说明)**


:::danger

若网盘链接无法打开:

- 请尝试将域名中的 `lanzoui` 改为 `lanzoux`/`lanzouj`/`lanzoue` 任意一个查看能否打开

- 或者[ [百度](https://ffis.me/baidu/index.html?蓝奏云链接打不开) or [必应](https://kaibinyang.com/bang/?蓝奏云链接打不开) or [Google](https://moedog.org/tools/google/?q=6JOd5aWP5LqR6ZO+5o6l5omT5LiN5byA) ]

---

推荐使用网盘下载!!!!!如果网盘里面没有你想要的版本可以前往 **Github 发布页** 下载!!!!!

如果网盘中没有你想要的版本，再使用 Github 下载！！！Github 打不开或者下载速度慢都是正常现象！！

:::

<ClientOnly>
  <n-space justify="center" size="large" style="padding-top: 30px">
    <a href="https://pan.lxmusic.top/b0bf2cfa?pwd=glqw">
      <n-button tertiary round type="primary" size="large">
        <template #icon>
          <p class="font-icon icon iconfont icon-download"></p>
        </template>
        网盘下载(备用)
      </n-button>
    </a>
    <a href="https://www.lanzoui.com/b0bf2cfa/">
      <n-button tertiary round type="primary" size="large">
        <template #icon>
          <p class="font-icon icon iconfont icon-download"></p>
        </template>
        网盘下载(密码：glqw)
      </n-button>
    </a>
  </n-space>
  <n-space justify="center" size="large" style="padding-top: 30px">
    <a href="https://github.com/lyswhut/lx-music-desktop/releases/latest">
      <n-button tertiary round type="primary" size="large">
        <template #icon>
          <p class="font-icon icon iconfont icon-download"></p>
        </template>
        PC 端 Github 链接
      </n-button>
    </a>
    <a href="https://github.com/lyswhut/lx-music-mobile/releases/latest">
      <n-button tertiary round type="primary" size="large">
        <template #icon>
          <p class="font-icon icon iconfont icon-download"></p>
        </template>
        移动 端 Github 链接
      </n-button>
    </a>
  </n-space>
</ClientOnly>


## 安装包说明

文件名带 `win_` 或带 `Setup` 的是在 Windows 系统上运行的版本；

其中以 `Setup.exe` 结尾的版本为安装版，带自动更新功能，可自动更新软件（但若你所在网络访问 GitHub 较慢，则可能会更新失败，这时需要手动下载安装包覆盖更新）；

以 `green.7z` 结尾的版本为免安装版，==完全解压==后可直接运行里面的 `lx-music-desktop.exe`，但自动更新功能不可用；

带有 `x64` 的为 64 位的系统版本，带 `x86` 的为 32 位的系统版本；

从v2.5.0起，LX的默认 Windows 版不再支持 Win 7、8 系统，但考虑到仍然有许多人使用 Win 7，我们特别构建了能在 Win 7 上使用的免安装版（文件名带`win7`）

:::warning

需要注意的是win7版本将缺乏安全更新，若非必要情况，不要使用该版本

:::

从v2.5.0起，LX的默认 Windows 版已不再提供32位的支持

若你不懂选择哪个版本，建议优先使用安装版！(文件名以`x64-Setup.exe`结尾)

:::tip

绿色版（免安装版）已经被压缩成 7z 文件（以.7z 结尾），需要用 **解压软件** 解压后才可以运行，若你的电脑没有解压缩软件，推荐使用这个软件：<https://www.bandisoft.com/bandizip/old/6/>

:::

以 `.dmg` 结尾的文件为在 MAC 系统上运行的版本。

:::tip

带arm64名称的dmg安装包是给MAC M1用的。

:::

以 `.deb` 结尾的文件为在 Linux 系统上运行的版本，软件还有 `.rpm/AppImage/pacman` 格式的 Linux 包，但没有上传到网盘，可自行到项目发布页面下载。

以 `.apk` 结尾的是安卓手机版，网盘提供两种安卓版本，优先下载 `arm64-v8a` 版，若无法安装再下载 `universal` 版

:::info

带 `sl`版 为 Xposed 模块 墨•状态栏歌词 专版(需要 **root** 权限，不知道不要下载)

这个版本可以在`测试群`群文件中下载，或者[Github 链接](https://github.com/lyswhut/lx-music-mobile/actions/workflows/statusbar-lyric.yml)

:::

另外还有 `armeabi-v7a`、`x86_64`等版本，但没有上传到网盘，若需要可自行到项目发布页面下载。

:::tip

移动版不计划支持苹果设备

:::
