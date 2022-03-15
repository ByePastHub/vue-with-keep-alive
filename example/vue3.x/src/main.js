import { createApp } from 'vue';
import router from './router/index';
import App from './App.vue';
import withKeepAlive from '../../../dist/vue-with-keep-alive.esm';
// import withKeepAlive from 'vue-with-keep-alive'

const app = createApp(App);
app.use(router);
app.use(withKeepAlive, router);
app.mount('#app');
