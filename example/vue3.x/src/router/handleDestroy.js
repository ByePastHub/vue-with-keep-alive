import { destroy } from 'vue-with-keep-alive';
// import { destroy } from '../../../../dist/vue-with-keep-alive.esm';

const pageMark = {
  goodsPageId: ''
};

export default to => {
  // 如果商品Id不一样，进行销毁goods页面
  if (to.name === 'goods' && to.query.id !== pageMark.goodsPageId) {
    pageMark.goodsPageId = to.query.id;
    destroy('goods');
  }
};
