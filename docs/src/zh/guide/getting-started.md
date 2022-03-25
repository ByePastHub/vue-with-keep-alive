# 快速上手

## 注册使用
**main.js**
<CodeGroup>
  <CodeGroupItem title="Vue2.x" active>

  ```js
  import Vue from 'vue';
  import withKeepAlive from 'vue-with-keep-alive'
  import App from './App.vue';
  import router from './router';

  Vue.use(withKeepAlive, router)

  new Vue({
    router,
    render: (h) => h(App)
  }).$mount('#app');
  ```

  </CodeGroupItem>

  <CodeGroupItem title="Vue3.x">

  ```js
  import { createApp } from 'vue';
  import withKeepAlive from 'vue-with-keep-alive';
  import router from './router/index';
  import App from './App.vue';

  const app = createApp(App);
  app.use(router);
  app.use(withKeepAlive, router);
  app.mount('#app');
  ```

  </CodeGroupItem>
</CodeGroup>

**App.vue**
```vue
<template>
  <keep-router-riew />
</template>
```

## 组件属性

<table class="table table-bordered table-striped table-condensed">
  <tr>
    <td>mode</td>
	  <td>模式：全部缓存(default) allKeepAlive，自定义缓存组件 customizeKeepAlive 需要在route设置中上meta: { keepAlive: true }</td>
  </tr>
  <tr>
    <td>max</td>
	  <td>页面最大缓存数量 (default: 5)</td>
  </tr>
  <tr>
    <td>exclude</td>
	  <td>字符串或正则表达式。任何名称匹配的组件都不会被缓存</td>
  </tr>
  <tr>
    <td>matchClearList</td>
	  <td>匹配到会除了当前页面的名称外，清空其他的页面名称</td>
  </tr>
  <tr>
    <td>matchClearBehindList</td>
	  <td>如果是后退，匹配到名称时，会把后面所以的名称剔除掉</td>
  </tr>
</table>

## router 对象

- `push/replace/forward`: 缓存跳转页面组件

- `replace`: 跟 push 很像，唯一的不同就是，它不会向 history 添加新记录

- `reLaunch`: 跳转时清除所有缓存组件，然后缓存重新缓存该页面组件

- 其他(包括系统返回)的都属于后退，路由发生变化会销毁页面组件

- 上面 router 对象中，添加`destroy`属性(String|Array)，用做自定义销毁缓存过的页面组件。
::: tip
`reLaunch`: 跳转跟`replace`一样，它不会向 history 添加新记录，如果需要用其他跳转方式可以使用上面这几种方式，比如
```js
this.$router.push({name: 'Home', destroy: 'ALL'})
```
:::

**[关于 destroy](./destroy.md)**