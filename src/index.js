import withRouter from './withRouter';
import KeepRouterView from './KeepRouterView';

export { KeepRouterView, withRouter };
export let Vue;
export default {
  install(app, router) {
    withRouter(router);
    app.component('KeepRouterView', KeepRouterView);
    Vue = app;
  },
};
