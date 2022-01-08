import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import withKeepAlive from '../../../dist/index.umd'

Vue.config.productionTip = false;

Vue.use(withKeepAlive, router)

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
