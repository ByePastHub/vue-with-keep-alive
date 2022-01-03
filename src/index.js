import withRouter from "./withRouter";
import KeepRouterView from "./KeepRouterView.vue";

export { KeepRouterView, withRouter };
export default {
  install(app, router) {
    withRouter(router);
    app.component("KeepRouterView", KeepRouterView);

    if (Number(app.version.slice(0, 1)) < 3) {
      Object.defineProperty(app.prototype, "$vueVersion", {
        get() {
          return app.version;
        },
      });
    } else {
      Object.defineProperty(app.config.globalProperties, "$vueVersion", {
        get() {
          return app.version;
        },
      });
    }
  },
};
