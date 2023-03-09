<template>
  <ClientOnly>
    <n-spin :show="true">
      <n-card content-style="padding: 0;">
        <n-tabs type="line" size="large" :tabs-padding="10" pane-style="padding: 10px;width: auto;" animated>
          <n-tab-pane name="windows" tab="Windows">
            <n-data-table size="large" :columns="columns" :data="assetsData" :pagination="10" />
          </n-tab-pane>
          <n-tab-pane name="linux" tab="Linux"> Hey Jude </n-tab-pane>
          <n-tab-pane name="macos" tab="Mac OS"> 七里香 </n-tab-pane>
          <n-tab-pane name="android" tab="Android"> 七里香 </n-tab-pane>
        </n-tabs>
      </n-card>
      <template #description>
        在做了，做完可以直接在这个页面下载安装包
      </template>
    </n-spin>
  </ClientOnly>
</template>

<script>
import { ref, reactive, h } from 'vue'
import axios from 'axios'
import _ from 'lodash'
import { NButton } from 'naive-ui'

export default {
  setup() {
    let assetsData = reactive([])
    let loading = ref(true)

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
        title: 'Name',
        key: 'name',
      },
      {
        title: 'Data',
        key: 'data',
        render(row) {
          return h(
            NButton,
            {
              strong: true,
              tertiary: true,
              size: 'large',
              onClick: () => console.log(row),
            },
            { default: () => 'Send Email' }
          )
        },
      },
    ]

    assetsData.push({ name: 'testtwetywteytwyets', data: 'test' })

    return {
      useDownload,
      useDownloadDialog,
      assetsData,
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
.tab {
  width: 100%;
  background: var(--bg-color);
  border: 1px solid var(--light-grey);
}

.el-tabs--border-card > .el-tabs__header {
  background-color: var(--bg-color);
  border-bottom: 1px solid var(--light-grey);
}
.el-tabs--border-card > .el-tabs__header .el-tabs__item.is-active {
  background-color: var(--theme-color);
  color: var(--white);
  border: none;
}

@media screen and (max-width: 580px) {
  .dialog {
    width: 65% !important;
  }
}
.dialog {
  width: 26%;
  max-height: 50%;
  overflow: hidden;
}
.dialogButtonGroup {
  display: flex;
  flex-flow: column nowrap;
  justify-content: center;
}
.dialogButton {
  width: 100%;
  height: 40px;
  font-size: 16px;
  display: block;
  margin-bottom: 35px;
}
.dialogButton:last-child {
  margin-bottom: 0;
}

.fileInfo {
  line-height: 2;
  padding: 10px 10px 10px 10px;
}
.buttonGroup {
  position: relative;
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  align-items: center;
  gap: 15px;
}
.buttonItem {
  position: relative;
}

table {
  margin: 0;
}
.el-table {
  --el-table-bg-color: var(--bg-color);
  --el-table-border-color: var(--light-grey);
  --el-table-text-color: var(--text-color);
  --el-table-header-bg-color: var(--bg-color);
  --el-table-tr-bg-color: var(--bg-color);
  --el-table-expanded-cell-bg-color: var(--bg-color);
  --el-table-row-hover-bg-color: var(--theme-color-mask);
}

.el-table tr {
  background-color: var(--el-table-tr-bg-color) !important;
}
.el-table tr:hover {
  background-color: var(--theme-color-mask) !important;
}
th.el-table_1_column_3.is-leaf.el-table__cell {
  text-align: center;
}

.el-button + .el-button {
  margin-left: 0;
}
.el-button--primary {
  --el-button-bg-color: var(--theme-color);
  --el-button-border-color: var(--theme-color);
  color: var(--white);
}
.el-button.is-text {
  color: var(--text-color);
}
.el-button.is-text:not(.is-disabled):focus,
.el-button.is-text:not(.is-disabled):hover {
  color: var(--white);
  background-color: var(--theme-color);
}

.el-dialog__title {
  color: var(--text-color);
}
.el-dialog {
  --el-dialog-bg-color: var(--bg-color);
}
</style>
