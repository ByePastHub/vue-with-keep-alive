import withRouter from './withRouter';
import KeepRouterView from './KeepRouterView';
import { destroy } from './keepRouter';

export { KeepRouterView, withRouter };
export let Vue;
export default {
  install(app, router) {
    withRouter(router);
    app.component('KeepRouterView', KeepRouterView);
    Vue = app;
    const keepRouter = { destroy };

    if (Number(app.version.slice(0, 1)) < 3) {
      app.prototype.$keepRouter = keepRouter;
    } else {
      app.config.globalProperties.$keepRouter = keepRouter;
    }
  },
};
