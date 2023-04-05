<template>
  <ClientOnly>
    <!--  -->
    <n-card  content-style="padding: 0;">
      <n-tabs type="line" size="large" :tabs-padding="10" pane-style="padding: 10px;width: auto;" animated>
        <n-tab-pane v-for="data of desktopList.packages" :tab="data.display" :name="data.display">
          <n-data-table :columns="columns" :data="data.assets" :pagination="false" :single-line="false" single-column />
        </n-tab-pane>
      </n-tabs>
    </n-card>
    <!--  -->
    <n-card  content-style="padding: 0;">
      <n-tabs type="line" size="large" :tabs-padding="10" pane-style="padding: 10px;width: auto;" animated>
        <n-tab-pane v-for="data of mobileList.packages" :tab="data.display" :name="data.display">
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

const columns = [
  { title: '名称', key: 'name' },
  { title: '大小', key: 'size' },
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
          onClick: () => console.log(row),
        },
        h('span', { class: 'font-icon icon iconfont icon-download' })
      )
    },
  },
]

let desktopList = reactive({
  version: '',
  updateInfo: '',
  packages: {
    windows: { display: 'Windows', assets: [] },
    macos: { display: 'Mac OS', assets: [] },
    linux: { display: 'Linux', assets: [] },
  },
})

let mobileList = reactive({
  version: '',
  updateInfo: '',
  packages: {
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
