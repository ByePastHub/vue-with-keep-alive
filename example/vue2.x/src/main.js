import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import { Toast } from "vant";
// import withKeepAlive from "../../../dist/vue-with-keep-alive.umd";
import withKeepAlive from "vue-with-keep-alive";

Vue.config.productionTip = false;

Vue.use(withKeepAlive, router);
Vue.use(Toast);

new Vue({
  router,
  render: (h) => h(App),
}).$mount("#app");
