---
icon: mobile
title: 移动端
---

<n-space vertical>
  <n-card title="技术栈" size="medium" hoverable>
    React native 以及 Redux
  </n-card>
  <n-card title="支持平台" size="medium" hoverable>
    Android(安卓版本 >= 6)
  </n-card>
  <n-card title="特别说明" size="medium" hoverable>
    不计划支持 IOS(苹果手机系统) 以及 Android 版本为6以下的设备
  </n-card>
</n-space>

<n-space justify="center" style="padding-top: 25px">
  <a href="https://github.com/lyswhut/lx-music-mobile/releases"><img src="https://img.shields.io/github/release/lyswhut/lx-music-mobile" alt="Release version"></a>
  <a href="https://github.com/lyswhut/lx-music-mobile/actions/workflows/release.yml"><img src="https://github.com/lyswhut/lx-music-mobile/workflows/Build/badge.svg" alt="Build status"></a>
  <a href="https://github.com/lyswhut/lx-music-mobile/actions/workflows/beta-pack.yml"><img src="https://github.com/lyswhut/lx-music-mobile/workflows/Build%20Beta/badge.svg" alt="Build status"></a>
  <a href="https://github.com/facebook/react-native"><img src="https://img.shields.io/github/package-json/dependency-version/lyswhut/lx-music-mobile/react-native/master" alt="React native version"></a>
  <a href="https://github.com/lyswhut/lx-music-mobile/tree/dev"><img src="https://img.shields.io/github/package-json/v/lyswhut/lx-music-mobile/dev" alt="Dev branch version"></a>
</n-space>

<n-space justify="center" size="large" style="padding-top: 30px">
<router-link to="document/">
  <n-button strong secondary type="primary" size="large">
    <template #icon>
      <p class="font-icon icon iconfont icon-desktop"></p>
    </template>
    常见问题
  </n-button>
</router-link>
<router-link to="/">
  <n-button strong secondary type="primary" size="large">
    <template #icon>
      <p class="font-icon icon iconfont icon-home"></p>
    </template>
    主页
  </n-button>
</router-link>
<a href="https://github.com/lyswhut/lx-music-mobile">
  <n-button strong secondary type="primary" size="large">
    <template #icon>
      <p class="font-icon icon iconfont icon-github"></p>
    </template>
    仓库
  </n-button>
</a>
</n-space>
