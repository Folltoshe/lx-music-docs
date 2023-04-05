<template>
  <!-- 一言 -->
  <div class="say">
    <p id="say-content" class="content">一言加载中...</p>
    <p id="say-author" class="author">一言作者加载中...</p>
  </div>
  <!-- <div class="home-head">
    这应该是LX Music Docs今年的最后一个版本，提前祝大家新春快乐，事事顺心~
    <br />
    <br />
    <div style="font-size: 18px">By Folltoshe on 2023/1/20</div>
  </div>
  <div class="wp" id="wp">
    <div class="xnkl">
      <div class="deng-box2">
        <div class="deng">
          <div class="xian"></div>
          <div class="deng-a">
            <div class="deng-b">
              <div class="deng-t">年</div>
            </div>
          </div>
          <div class="shui shui-a">
            <div class="shui-c"></div>
            <div class="shui-b"></div>
          </div>
        </div>
      </div>
      <div class="deng-box3">
        <div class="deng">
          <div class="xian"></div>
          <div class="deng-a">
            <div class="deng-b">
              <div class="deng-t">新</div>
            </div>
          </div>
          <div class="shui shui-a">
            <div class="shui-c"></div>
            <div class="shui-b"></div>
          </div>
        </div>
      </div>
      <div class="deng-box1">
        <div class="deng">
          <div class="xian"></div>
          <div class="deng-a">
            <div class="deng-b">
              <div class="deng-t">乐</div>
            </div>
          </div>
          <div class="shui shui-a">
            <div class="shui-c"></div>
            <div class="shui-b"></div>
          </div>
        </div>
      </div>
      <div class="deng-box">
        <div class="deng">
          <div class="xian"></div>
          <div class="deng-a">
            <div class="deng-b">
              <div class="deng-t">快</div>
            </div>
          </div>
          <div class="shui shui-a">
            <div class="shui-c"></div>
            <div class="shui-b"></div>
          </div>
        </div>
      </div>
    </div>
  </div> -->
  <HopeHomePage> </HopeHomePage>
</template>

<script>
import HopeHomePage from 'vuepress-theme-hope/components/HomePage.js'
import axios from 'axios'

export default {
  components: { HopeHomePage },
  mounted() {
    const url = 'https://v1.hitokoto.cn/'

    axios.get(url).then(e => {
      if (e.status != 200 && !e.data) {
        document.getElementById('say-content').innerHTML = '一言加载失败'
        document.getElementById('say-author').innerHTML = `一言作者加载失败`
        return
      }
      document.getElementById('say-content').innerHTML = `${e.data.hitokoto}`
      document.getElementById('say-author').innerHTML = `--  ${e.data.creator}`
    })
  },
}
</script>

<style>
.say {
  padding-top: var(--navbar-height);
  text-align: center;
  width: 100%;
  margin-block-start: 5px;
  margin-block-end: 0px;
  margin-inline-start: 0px;
  margin-inline-end: 0px;
}
.say.content {
  font-size: 22px;
}
.say.author {
  font-size: 20px;
}

@media screen and (max-width: 580px) {
  /* 新 */
  .deng-box3 {
    left: -50px !important;
    right: 0px;
    transform: scale(0.8) !important;
    top: 15px !important;
  }
  /* 年 */
  .deng-box2 {
    left: 60px !important;
    right: 0px !important;
    transform: scale(0.8) !important;
    top: 15px !important;
  }
  /* 快 */
  .deng-box {
    left: none !important;
    right: 70px !important;
    transform: scale(0.8) !important;
    top: 15px !important;
  }
  /* 乐 */
  .deng-box1 {
    left: none !important;
    right: -40px !important;
    transform: scale(0.8) !important;
    top: 15px !important;
  }
}

.deng-box {
  position: fixed;
  top: 40px;
  right: 150px;
  z-index: 9999;
  pointer-events: none;
}

.deng-box1 {
  position: fixed;
  top: 30px;
  right: 10px;
  z-index: 9999;
  pointer-events: none;
}

.deng-box2 {
  position: fixed;
  top: 40px;
  left: 150px;
  z-index: 9999;
  pointer-events: none;
}

.deng-box3 {
  position: fixed;
  top: 30px;
  left: 10px;
  z-index: 9999;
  pointer-events: none;
}

.deng-box1 .deng,
.deng-box3 .deng {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 50px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.8);
  border-radius: 50% 50%;
  transform-origin: 50% -100px;
  animation: swing 5s infinite ease-in-out;
  box-shadow: -5px 5px 30px 4px #fc903d;
}

.deng {
  position: relative;
  width: 120px;
  height: 90px;
  margin: 50px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.8);
  border-radius: 50% 50%;
  transform-origin: 50% -100px;
  animation: swing 3s infinite ease-in-out;
  box-shadow: -5px 5px 50px 4px #fa6c00;
}

.deng-a {
  width: 100px;
  height: 90px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.1);
  margin: 12px 8px 8px 8px;
  border-radius: 50% 50%;
  border: 2px solid #dc8f03;
}

.deng-b {
  width: 45px;
  height: 90px;
  background: #d8000f;
  background: rgba(216, 0, 15, 0.1);
  margin: -4px 8px 8px 26px;
  border-radius: 50% 50%;
  border: 2px solid #dc8f03;
}

.xian {
  position: absolute;
  top: -20px;
  left: 60px;
  width: 2px;
  height: 20px;
  background: #dc8f03;
}

.shui-a {
  position: relative;
  width: 5px;
  height: 20px;
  margin: -5px 0 0 59px;
  animation: swing 4s infinite ease-in-out;
  transform-origin: 50% -45px;
  background: orange;
  border-radius: 0 0 5px 5px;
}

.shui-b {
  position: absolute;
  top: 14px;
  left: -2px;
  width: 10px;
  height: 10px;
  background: #dc8f03;
  border-radius: 50%;
}

.shui-c {
  position: absolute;
  top: 18px;
  left: -2px;
  width: 10px;
  height: 35px;
  background: orange;
  border-radius: 0 0 0 5px;
}

.deng:before {
  position: absolute;
  top: -7px;
  left: 29px;
  height: 12px;
  width: 60px;
  content: ' ';
  display: block;
  z-index: 999;
  border-radius: 5px 5px 0 0;
  border: solid 1px #dc8f03;
  background: orange;
  background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03);
}

.deng:after {
  position: absolute;
  bottom: -7px;
  left: 10px;
  height: 12px;
  width: 60px;
  content: ' ';
  display: block;
  margin-left: 20px;
  border-radius: 0 0 5px 5px;
  border: solid 1px #dc8f03;
  background: orange;
  background: linear-gradient(to right, #dc8f03, orange, #dc8f03, orange, #dc8f03);
}

.deng-t {
  font-size: 3.2rem;
  color: #dc8f03;
  font-weight: 700;
  line-height: 85px;
  text-align: center;
}

.night .deng-box,
.night .deng-box1,
.night .deng-t {
  background: 0 0 !important;
}

@keyframes swing {
  0% {
    -moz-transform: rotate(-10deg);
  }

  50% {
    -moz-transform: rotate(10deg);
  }

  100% {
    -moz-transform: rotate(-10deg);
  }
}

@keyframes swing {
  0% {
    -webkit-transform: rotate(-10deg);
  }

  50% {
    -webkit-transform: rotate(10deg);
  }

  100% {
    -webkit-transform: rotate(-10deg);
  }
}

.wp {
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}
</style>
