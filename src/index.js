import withRouter from './withRouter';
import KeepRouterView from './KeepRouterView';

export { KeepRouterView, withRouter };
export default {
  install(app, router) {
    withRouter(router);
    app.component('KeepRouterView', KeepRouterView);
  },
};
