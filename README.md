# vue-with-keep-alive

## language
<a href="./README_zh-CN.md">中文</a></br>
<a href="./README.md">English</a>

### Install
```
yarn install vue-with-keep-alive
```

## Get started quickly
Dome online: <a href="https://byepasthub.github.io/vue-with-keep-alive/">https://byepasthub.github.io/vue-with-keep-alive/</a>
### use

**componet property**
#### Global registration

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