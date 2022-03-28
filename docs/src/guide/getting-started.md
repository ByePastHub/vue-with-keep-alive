# Get started quickly

## Register to use
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

## Component properties

<table class="table table-bordered table-striped table-condensed">
  <tr>
    <td>mode (String)</td>
	  <td>Mode: all caches (default) allKeepAlive, custom cache component customizeKeepAlive needs to be set in the route settings meta: { keepAlive: true }</td>
  </tr>
  <tr>
    <td>max (Number)</td>
	  <td>Maximum number of pages to cache (default: 5)</td>
  </tr>
  <tr>
    <td>exclude  (Array | String)</td>
	  <td>String or regular expression. Any component whose name matches will not be cached</td>
  </tr>
  <tr>
    <td>matchClearList (Array)</td>
	  <td>When a name is matched, except the name of the current page, clear other page names</td>
  </tr>
  <tr>
    <td>matchClearBehindList (Array)</td>
	  <td>If it is backward, when a name is matched, all subsequent names will be removed</td>
  </tr>
</table>

## router Object

- `push/replace/forward`: Cache jump page component

- `replace`: Similar to push, the only difference is that it does not add new records to history

- `reLaunch`: Clear all cached components when jumping, and then cache the page component again

- Others (including system return) are all backwards, and the page component will be destroyed when the route changes.

- In the above router object, add the `destroy` property (String|Array) to customize the page component that has been destroyed by the cache.
::: tip
`reLaunch`: Jump is the same as `replace`, it will not add new records to history, if you need to use other jump methods, you can use the above methods, such as
```js
this.$router.push({name: 'Home', destroy: 'ALL'})
```
:::

**[About destroy](./destroy.md)**