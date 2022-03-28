import { destroy } from "../../../../dist/vue-with-keep-alive.umd";

const pageMark = {
  goodsPageId: "",
};

export default (to) =>
  new Promise((resolve) => {
    if (to.name === "goods" && to.query.id !== pageMark.goodsPageId) {
      pageMark.goodsPageId = to.query.id;
      destroy("goods");
    }
    resolve();
  });
