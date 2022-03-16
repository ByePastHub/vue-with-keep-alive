import withRouter from './withRouter';
import KeepRouterView from './KeepRouterView';
import { destroy } from './keepRouter';

export { KeepRouterView, withRouter, destroy };
export default {
  install(app, router) {
    withRouter(router);
    app.component('KeepRouterView', KeepRouterView);
    app.prototype.$keepRouter = { destroy };
  },
};
