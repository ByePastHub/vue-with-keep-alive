import { createRouter, createWebHashHistory } from 'vue-router';
import handleDestroy from './handleDestroy';

const routes = [
  {
    path: '/',
    redirect: {
      name: 'user',
    },
  },
  {
    name: 'user',
    path: '/user',
    component: () => import('../view/user/index.vue'),
    meta: {
      title: '会员中心',
    },
  },
  {
    name: 'cart',
    path: '/cart',
    component: () => import('../view/cart/index.vue'),
    meta: {
      title: '购物车',
    },
  },
  {
    name: 'goods',
    path: '/goods',
    component: () => import('../view/goods/index.vue'),
    meta: {
      title: '商品详情',
    },
  },
];

const router = createRouter({
  routes,
  history: createWebHashHistory(),
});

router.beforeEach((to, from, next) => {
  handleDestroy(to);
  const title = to.meta && to.meta.title;
  if (title) {
    document.title = title;
  }
  next();
});

export default router;