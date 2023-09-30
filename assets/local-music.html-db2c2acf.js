import{_ as l}from"./plugin-vue_export-helper-c27b6911.js";import{r as s,o as r,c as t,a as e,b as n,d as a,e as d}from"./app-ebbe95b2.js";const o={},c=e("h2",{id:"添加本地歌曲方式方式",tabindex:"-1"},[e("a",{class:"header-anchor",href:"#添加本地歌曲方式方式","aria-hidden":"true"},"#"),n(" 添加本地歌曲方式方式：")],-1),h=e("ol",null,[e("li",null,[n("进入"),e("strong",null,"我的列表"),n("界面")]),e("li",null,"右击任意列表名称"),e("li",null,[n("选择"),e("strong",null,"添加本地歌曲")])],-1),u={class:"hint-container tip"},p=e("p",{class:"hint-container-title"},"提示",-1),m={href:"https://www.mp3tag.de/en/download.html",target:"_blank",rel:"noopener noreferrer"},v={href:"https://www.mp3tag.de/en/download.html",target:"_blank",rel:"noopener noreferrer"},_=d(`<div class="hint-container tip"><p class="hint-container-title">提示</p><p>当已被添加到列表中的本地歌曲无法播放时（如文件损坏或被删除时），LX将尝试使用当前歌曲名、歌手名搜索在线歌曲播放</p></div><h2 id="格式支持状态" tabindex="-1"><a class="header-anchor" href="#格式支持状态" aria-hidden="true">#</a> 格式支持状态：</h2><div class="language-text line-numbers-mode" data-ext="text"><pre class="language-text"><code>支持的本地音乐格式：

  1.mp3
  2.flac
  3.ogg
  4.wav

兼容的本地音乐格式：
含义：可以导入，但是不可以离线播放的格式
在播放时会匹配在线源的音频，如果匹配失败会报错source not found
  1.wma
  2.m4a

</code></pre><div class="line-numbers" aria-hidden="true"><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div><div class="line-number"></div></div></div><h2 id="本地音乐歌词及封面相关" tabindex="-1"><a class="header-anchor" href="#本地音乐歌词及封面相关" aria-hidden="true">#</a> 本地音乐歌词及封面相关：</h2><h3 id="歌词相关" tabindex="-1"><a class="header-anchor" href="#歌词相关" aria-hidden="true">#</a> 歌词相关：</h3><ol><li><p>软件在播放本地音乐时会自动匹配与歌曲文件相同目录下的同名lrc歌词</p></li><li><p>如没有，软件会尝试匹配音频文件中嵌入的歌词</p></li><li><p>如果还是没有，则会在线搜索匹配的歌词</p></li></ol><h3 id="封面相关" tabindex="-1"><a class="header-anchor" href="#封面相关" aria-hidden="true">#</a> 封面相关</h3><ol><li><p>软件会尝试匹配本地音频文件中的封面</p></li><li><p>如没有，则会在线搜索进行封面匹配</p></li></ol>`,8);function b(f,g){const i=s("ExternalLinkIcon");return r(),t("div",null,[c,h,e("div",u,[p,e("p",null,[n("若导入的歌曲名字出现乱码，则表明目标歌曲文件内的标签文字编码不是UTF-8，建议使用"),e("a",m,[n("mp3Tag"),a(i)]),n("重新编辑歌曲文件的标签内容")]),e("p",null,[n("若导入的歌曲名显示的是原始文件名，则表明因为目标歌曲没有标签内容而回退到使用文件名作为歌曲名显示，建议使用"),e("a",v,[n("mp3Tag"),a(i)]),n("重新编辑歌曲文件的标签内容，mp3Tag可以批量从文件名提取内容写入歌曲标签内")])]),_])}const k=l(o,[["render",b],["__file","local-music.html.vue"]]);export{k as default};
