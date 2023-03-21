<template>
  <ClientOnly>
    <n-card content-style="padding: 0;">
      <n-tabs type="line" size="large" :tabs-padding="10" pane-style="padding: 10px;width: auto;" animated>
        <n-tab-pane name="windows" tab="Windows">
          <n-data-table :columns="columns" :data="packageList" :pagination="false" :single-line="false" single-column />
        </n-tab-pane>
        <n-tab-pane name="linux" tab="Linux"> Hey Jude </n-tab-pane>
        <n-tab-pane name="macos" tab="Mac OS"> 七里香 </n-tab-pane>
        <n-tab-pane name="android" tab="Android"> 七里香 </n-tab-pane>
      </n-tabs>
    </n-card>
  </ClientOnly>
</template>

<script>
import { ref, reactive, h } from 'vue'
import axios from 'axios'
import _ from 'lodash'
import { NButton } from 'naive-ui'

export default {
  setup() {
    let packageList = reactive([])

    let showDownloadDialog = ref(false)
    let downloadDialogData = reactive([])

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

    const columns = [
      {
        title: '名称',
        key: 'name',
      },
      {
        title: '大小',
        key: 'size',
      },
      {
        title: '操作',
        key: 'data',
        width: 45,
        render(row) {
          return h(
            NButton,
            {
              strong: true,
              tertiary: true,
              size: 'large',
              onClick: () => console.log(row),
            },
            { default: () => '下载' },
            h('span', { class: 'font-icon icon iconfont icon-download' })
          )
        },
      },
    ]

    packageList.push({ name: 'testtwetywteytwyets', data: 'test', size: 666, key: 1 })

    return {
      useDownload,
      useDownloadDialog,
      packageList,
      columns,
    }
  },
}

// axios.get('https://api.github.com/repos/lyswhut/lx-music-desktop/releases').then(e => {
//   if (e.status != 200) return

//   const reqData = e.data[0]
//   const device = [
//     { type: 'windows', name: 'Windows', reg: /(.exe|.7z)/ },
//     { type: 'linux', name: 'Linux', reg: /(.rpm|.deb)/ },
//     { type: 'macos', name: 'Mac OS', reg: /(.dmg)/ },
//   ]
//   _.forEach(device, async e => {
//     let pushData = {
//       type: e.type,
//       name: e.name,
//       assets: [],
//     }

//     await _.forEach(reqData.assets, element => {
//       if (/.blockmap/.test(element.name)) return
//       if (e.reg.test(element.name) != true) return
//       pushData.assets.push({
//         name: element.name,
//         size: element.size,
//         updatedTime: element.updated_at,
//         download: [
//           {
//             name: 'Github代理加速',
//             url: 'https://ghproxy.com/' + element.browser_download_url,
//           },
//           {
//             name: 'Github直链',
//             url: element.browser_download_url,
//           },
//         ],
//       })
//     })

//     assetsList.push(pushData)
//   })
// })
</script>

<style>
table {
  display: revert;
  margin: 0;
}
</style>
