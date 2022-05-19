import { createApp } from 'vue';
import router from './router/index.js';
import App from './App.vue';
// import withKeepAlive from './vue-with-keep-alive.esm.js';
import { Toast } from 'vant';
import withKeepAlive from '../../../dist/vue-with-keep-alive.esm.js';
// import withKeepAlive from 'vue-with-keep-alive';

const app = createApp(App);
app.use(router);
app.use(Toast);
app.use(withKeepAlive, router);
app.mount('#app');
