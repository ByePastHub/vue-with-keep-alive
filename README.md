# vue-with-keep-alive

## 介绍
>这是`keep-alive`增强版，哪里需要缓存，把`keep-alive`组件使用`keep-router-view`来替换。就可以帮助你实现前进刷新，返回时之前的页面还处于激活的状态。可以像`app`一样的体验。

## language
<a href="./README.md">中文</a></br>  
<a href="./README_en-US.md">English</a>

### 安装
```
yarn install vue-with-keep-alive
```

## 快速上手
在线Dome: <a href="https://byepasthub.github.io/vue-with-keep-alive/">https://byepasthub.github.io/vue-with-keep-alive/</a>

### 使用
`vue2.x`版本安装`npm install vue-with-keep-alive@2.x`</br>  
`vue3.x`版本安装`npm install vue-with-keep-alive`

**注意：**
`route`中的`name`必须跟组件导出的`name`值对应(必须要写)，否则不会缓存改组件，例如：
```js
const routes = [
  { path: '/home', name: 'Home', component: Home }
]

<script>
export default {
  name: 'Home' // 必须跟上面的 name 对应上
}
</script>
```

**组件 属性**
<table class="table table-bordered table-striped table-condensed">
  <tr>
    <td>mode</td>
	  <td>模式：全部缓存(默认)`allKeepAlive`，自定义缓存`customizeKeepAlive`</td>
  </tr>
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

#### router 对象
`push/replace/forward`: 缓存跳转页面组件</br>  
`replace`: 跟 `router.push` 很像，唯一的不同就是，它不会向 `history` 添加新记录</br>  
`reLaunch`: 跳转时清除所有缓存组件，然后缓存重新缓存该页面组件</br>  
其他(包括系统返回)的都属于后退，路由发生变化会销毁页面组件</br>

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
  <keep-router-view mode="allKeepAlive" />
</template>
```