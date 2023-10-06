<template>
  <ClientOnly>
    <!--  -->
    <n-card  content-style="padding: 0;">
      <n-tabs type="line" size="large" :tabs-padding="10" pane-style="padding: 10px;width: auto;" animated>
        <n-tab-pane v-for="data of allDownloadList.packages" :tab="data.display" :name="data.display">
          <n-data-table :columns="columns" :data="data.assets" :pagination="false" :single-line="false" single-column />
        </n-tab-pane>
      </n-tabs>
    </n-card>
    <!--  -->
  </ClientOnly>
</template>

<script setup>
import { ref, reactive, h } from 'vue'
import axios from 'axios'
import _ from 'lodash'
import { NButton, useMessage } from 'naive-ui'

let sizeFixer = function(size){
  if (!size) return ""

  const num = 1024.00

  if (size < num) return size + "B"
  if (size < Math.pow(num, 2)) return (size / num).toFixed(2) + "KB"
  if (size < Math.pow(num, 3)) return (size / Math.pow(num, 2)).toFixed(2) + "MB"
  if (size < Math.pow(num, 4)) return (size / Math.pow(num, 3)).toFixed(2) + "GB"
  
  return (size / Math.pow(num, 4)).toFixed(2) + "TB"
}

axios({
  method: 'get',
  url: 'https://api.github.com/repos/lyswhut/lx-music-desktop/releases/latest'
})
.then(function (response) {
  const winList = response.data.assets.filter(asset => {
    return !asset.name.includes('blockmap') && /(\.exe|.*win.*)$/.test(asset.name)
  })
  .map(asset => {
    asset.size = sizeFixer(asset.size)
    return asset
  })

  const macList = response.data.assets.filter(asset => {
    return !asset.name.includes('blockmap') && /\.(dmg)$/.test(asset.name)
  })
  .map(asset => {
    asset.size = sizeFixer(asset.size)
    return asset
  })

  const linuxList = response.data.assets.filter(asset => {
    return !asset.name.includes('blockmap') && /\.(rpm|deb|pacman|AppImage)$/.test(asset.name)
  })
  .map(asset => {
    asset.size = sizeFixer(asset.size)
    return asset
  })

  allDownloadList.packages.windows.assets = winList
  allDownloadList.packages.macos.assets = macList
  allDownloadList.packages.linux.assets = linuxList
  // allDownloadList.updateInfo = response.data.body
  // allDownloadList.version = response.data.name
})
.catch(function (error) {
  console.log(error)
})

axios({
  method: 'get',
  url: 'https://api.github.com/repos/lyswhut/lx-music-mobile/releases/latest'
})
.then(function (response) {
  const androidList = response.data.assets.filter(asset => {
    return !asset.name.includes('blockmap') && /\.(apk)$/.test(asset.name)
  })
  .map(asset => {
    asset.size = sizeFixer(asset.size)
    return asset
  })

  allDownloadList.packages.android.assets = androidList
  // allDownloadList.updateInfo = response.data.body
  // allDownloadList.version = response.data.name
})
.catch(function (error) {
  console.log(error)
})



const columns = [
  { title: '名称', key: 'name' },
  { title: '大小', key: 'size' },
  { title: '下载次数', key: 'download_count' },
  {
    title: '操作',
    key: 'data',
    width: 70,
    render(row) {
      return h(
        NButton,
        {
          strong: true,
          tertiary: true,
          size: 'large',
          onClick: () => useDownload(
            "https://ghproxy.com/" + row.browser_download_url
          ),
        },
        h('span', { class: 'font-icon icon iconfont icon-download' })
      )
    },
  },
]

let allDownloadList = reactive({
  version: '',
  updateInfo: '',
  packages: {
    windows: { display: 'Windows', assets: [] },
    macos: { display: 'Mac OS', assets: [] },
    linux: { display: 'Linux', assets: [] },
    android: { display: 'Android', assets: [] },
  },
})

const useDownloadDialog = data => {
  downloadDialogData = []
  data.forEach(element => {
    if (/^http/.test(element.url) != true) return
    downloadDialogData.push(element)
  })
  showDownloadDialog.value = true
}

const useDownload = url => {
  if (/^http/.test(url) != true) return
  window.location.href = url
}
</script>

<style>
table {
  display: revert;
  margin: 0;
}
</style>
