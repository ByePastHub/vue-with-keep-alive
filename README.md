# vue-with-keep-alive

## language
<a href="./README_zh-CN.md">中文</a></br>
<a href="./README.md">English</a>

### 安装
```
yarn install vue-with-keep-alive
```

## 快速上手
在线Dome: <a href="https://byepasthub.github.io/vue-with-keep-alive/">https://byepasthub.github.io/vue-with-keep-alive/</a>

### 使用
**组件 属性**

<table class="table table-bordered table-striped table-condensed">
  <tr>
    <td>max</td>
	  <td>页面最大缓存数量</td>
  </tr>
  <tr>
    <td>exclude</td>
	  <td>字符串或正则表达式。任何名称匹配的组件都不会被缓存。</td>
  </tr>
  <tr>
    <td>matchClearList</td>
	  <td>匹配到会除了当前页面的名称外，清空其他的页面名称。</td>
  </tr>
  <tr>
    <td>matchClearBehindList</td>
	  <td>如果是后退，匹配到名称时，会把后面所以的名称剔除掉。</td>
  </tr>
</table>

#### 全局注册组件
`KeepRouteView`

**main.js**
```js
import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import withKeepAlive from 'vue-with-keep-alive'

const app = createApp(App)
app.use(router)
app.use(withKeepAlive, router)
app.mount("#app");
```

**App.vue**
```vue
<template>
  <keep-router-view />
</template>
```