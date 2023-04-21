---
title: 桌面端
icon: desktop
---

<ClientOnly>
  <n-space vertical>
    <n-card home title="技术栈" size="medium">
      Electron 13 以及 Vue 3
    </n-card>
    <n-card home title="支持平台" size="medium">
      Windows，Mac OS 以及 Linux
    </n-card>
    <n-card home title="特别说明" size="medium">
      不支持 Windows 7 以下的设备
    </n-card>
  </n-space>

  <n-space justify="center" size="large" style="padding-top: 30px">
    <router-link to="/desktop/document/">
      <n-button tertiary round type="primary" size="large">
        <template #icon>
          <p class="font-icon icon iconfont icon-desktop"></p>
        </template>
        常见问题
      </n-button>
    </router-link>
    <router-link to="/">
      <n-button tertiary round type="primary" size="large">
        <template #icon>
          <p class="font-icon icon iconfont icon-home"></p>
        </template>
        主页
      </n-button>
    </router-link>
    <a href="https://github.com/lyswhut/lx-music-desktop">
      <n-button tertiary round type="primary" size="large">
        <template #icon>
          <p class="font-icon icon iconfont icon-github"></p>
        </template>
        仓库
      </n-button>
    </a>
  </n-space>

  <n-space justify="center" style="padding-top: 25px">
    <a href="https://github.com/lyswhut/lx-music-desktop/releases"><img src="https://img.shields.io/github/release/lyswhut/lx-music-desktop" alt="Release version"></a>
    <a href="https://github.com/lyswhut/lx-music-desktop/actions/workflows/release.yml"><img src="https://github.com/lyswhut/lx-music-desktop/workflows/Build/badge.svg" alt="Build status"></a>
    <a href="https://github.com/lyswhut/lx-music-desktop/actions/workflows/beta-pack.yml"><img src="https://github.com/lyswhut/lx-music-desktop/workflows/Build%20Beta/badge.svg" alt="Build status"></a>
    <a href="https://electronjs.org/releases/stable"><img src="https://img.shields.io/github/package-json/dependency-version/lyswhut/lx-music-desktop/dev/electron/master" alt="Electron version"></a>
    <a href="https://github.com/lyswhut/lx-music-desktop/tree/dev"><img src="https://img.shields.io/github/package-json/v/lyswhut/lx-music-desktop/dev" alt="Dev branch version"></a>
  </n-space>
</ClientOnly>
