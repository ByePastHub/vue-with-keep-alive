# vue-with-keep-alive

## introduce
>`vue-with-keep-alive` can help you achieve forward refresh, the previous page is still active when you return, and you can experience the same as `app`. Where caching is needed, replace the `router-view` component with `keep-router-view`.

## language
<a href="./README.md">中文</a></br>  
<a href="./README_en-US.md">English</a></br>

### Install
```
yarn install vue-with-keep-alive
```

## Get started quickly
Online Dome: <a href="https://byepasthub.github.io/vue-with-keep-alive/">https://byepasthub.github.io/vue-with-keep-alive/</a>
### use
`vue2.x` version install `npm install vue-with-keep-alive@2.x`</br>  
`vue3.x` version install `npm install vue-with-keep-alive`

**Component Properties**
<table class="table table-bordered table-striped table-condensed">
  <tr>
    <td>mode</td>
	  <td>Mode: All cache (default) `allKeepAlive`, custom cache component `customizeKeepAlive` needs to be set in route settings `meta: { keepAlive: true }`</td>
  </tr>
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

#### router Object
`push/replace/forward`: Cache jump page component</br>  
`replace`: Like `router.push`, the only difference is that it does not add new records to `history`</br>  
`reLaunch`: Clear all cached components when jumping, and then cache the page component again</br>  
Others (including system return) are all backwards, and the page component will be destroyed when the route changes</br>

**In the router object above, add the `destroy` attribute (String|Array), which is used to customize the destroyed cached component**
```html
<button @click="() => $router.replace({name: 'Page4', destroy: 'Page2'})">destroy Page2, to Page4<button>
<button @click="() => $router.push({name: 'Page4', destroy: ['Page2', 'Page3']})">destroy Page2、Page3, to Page4<button>
<button @click="() => {
  $router.push({name: 'Page4'})
  $keepRouter.destroy('Page2')
}">destroy Page2, to Page4<button>
```

>**提示**<br/> 
>If the jump page exists in `destroy`, it will clear the cache first, and then add itself

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