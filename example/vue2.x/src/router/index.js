import Vue from "vue";
import VueRouter from "vue-router";
import Page1 from "../views/Page1.vue";
const Page2 = () => import('../views/Page2.vue');
import Page3 from "../views/Page3.vue";
import Page4 from "../views/Page4.vue";
import Page5 from "../views/Page5.vue";

Vue.use(VueRouter);

const routes = [
  { path: "/", redirect: "/page1" },
  { path: "/page1", name: "Page1", component: Page1, meta: { keepAlive: true } },
  { path: "/page2", name: "Page2", component: Page2 },
  { path: "/page3", name: "Page3", component: Page3, meta: { keepAlive: true } },
  { path: "/page4", name: "Page4", component: Page4, meta: { keepAlive: true } },
  { path: "/page5", name: "Page5", component: Page5, meta: { keepAlive: true } },
];

const router = new VueRouter({
  routes,
});
export default router;
