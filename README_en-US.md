# vue-with-keep-alive

## language
<a href="./README.md">中文</a>
<a href="./README_en-US.md">English</a></br>

### Install
```
yarn install vue-with-keep-alive
```

## Get started quickly
Dome online: <a href="https://byepasthub.github.io/vue-with-keep-alive/">https://byepasthub.github.io/vue-with-keep-alive/</a>
### use

**componet property**
<table class="table table-bordered table-striped table-condensed">
  <tr>
    <td>max</td>
	  <td>Maximum number of pages cached</td>
  </tr>
  <tr>
    <td>exclude</td>
	  <td>String or regular expression. Any components whose names match will not be cached.</td>
  </tr>
  <tr>
    <td>matchClearList</td>
	  <td>Matching will clear other page names except the name of the current page.</td>
  </tr>
  <tr>
    <td>matchClearBehindList</td>
	  <td>If it is backward, when the name is matched, the name behind it will be eliminated.</td>
  </tr>
</table>

#### Global registration component
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