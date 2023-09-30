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

let sizeFixer = function(size){
  if (!size){
    return "";
  }

  var num = 1024.00;

  if (size < num){
    return size + "B";
  }
  if (size < Math.pow(num, 2)){
    return (size / num).toFixed(2) + "KB";
  }
  if (size < Math.pow(num, 3)){
    return (size / Math.pow(num, 2)).toFixed(2) + "MB";
  }
  if (size < Math.pow(num, 4)){
    return (size / Math.pow(num, 3)).toFixed(2) + "GB";
  }
  return (size / Math.pow(num, 4)).toFixed(2) + "TB";
}

let i;

axios({
  method: 'get',
  url: 'https://api.github.com/repos/lyswhut/lx-music-desktop/releases/latest'
})
.then(function (resp) {
  var response = JSON.parse(JSON.stringify(resp.data));

  let winList = [];
  for (i of response['assets']){
    if (i['name'].search('blockmap') == -1){
      if (i['name'].search('exe') != -1 || i['name'].search('win') != -1){
        i['size'] = sizeFixer(i['size']);
        winList.push(i);
      }
    }
  }
  // console.log(winList);
  
  let macList = [];
  for (i of response['assets']){
    if (i['name'].search('blockmap') == -1 && i['name'].search('dmg') != -1){
      i['size'] = sizeFixer(i['size']);
      macList.push(i);
    }
  }
  // console.log(macList);

  let linuxList = [];
  for (i of response['assets']){
    if (i['name'].search('blockmap') == -1){
      if (i['name'].search('rpm') != -1 || i['name'].search('deb') != -1 || i['name'].search('pacman') != -1 || i['name'].search('AppImage') != -1){
        i['size'] = sizeFixer(i['size']);
        linuxList.push(i);
      }
    }
  }
  // console.log(linuxList);

  desktopList['packages']['windows']['assets'] = winList;
  desktopList['packages']['macos']['assets'] = macList;
  desktopList['packages']['linux']['assets'] = linuxList;
  desktopList['updateInfo'] = response["body"];
  desktopList['version'] = response["name"];
})
.catch(function (error) {
  console.log(error);
});

axios({
  method: 'get',
  url: 'https://api.github.com/repos/lyswhut/lx-music-mobile/releases/latest'
})
.then(function (resp) {
  var response = JSON.parse(JSON.stringify(resp.data));

  let androidList = [];
  for (i of response['assets']){
    if (i['name'].search('blockmap') == -1 && i['name'].search('apk') != -1){
      i['size'] = sizeFixer(i['size']);
      androidList.push(i);
    }
  }
  // console.log(androidList);

  mobileList['packages']['android']['assets'] = androidList;
  mobileList['updateInfo'] = response["body"];
  mobileList['version'] = response["name"];
})
.catch(function (error) {
  console.log(error);
});



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
            "https://ghproxy.com/" + row['browser_download_url']
          ),
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
