import { KEEP_BEFORE_ROUTE_CHANGE, KEEP_ROUTE_CHANGE, RE_LAUNCH } from './constants';

function resetComponentsName(router, isChildren) {
  const routerVersion = router.constructor.version?.replace(/\.(\d+)$/, '$1');

  if (routerVersion < 3.5) {
    console.error('vue-with-keep-alive: vue-router version is lower than 3.5.0, please upgrade vue-router');
    return;
  }

  const routes = isChildren ? router : router.getRoutes();
  routes.forEach(function(route) {
    if (!route?.components?.default) return;
    if (route.children?.length > 0) {
      resetComponentsName(route.children, true);
    };

    if (typeof route.components.default === 'function') {
      const originDefault = route.components.default;
      return (route.components.default = async() => {
        const component = await originDefault();
        component.default.name = route.name;
        return component;
      });
    };
    route.components.default.name = route.name;
  });
};

function getBaseOptions() {
  const enhanceList = ['push', 'forward', 'replace', RE_LAUNCH];
  const obj = Object.create(null);
  const options = { detail: {}};
  const beforeRouteTypeEvent = new CustomEvent(KEEP_BEFORE_ROUTE_CHANGE, options);
  const routeTypeEvent = new CustomEvent(KEEP_ROUTE_CHANGE, options);

  return { enhanceList, obj, options, routeTypeEvent, beforeRouteTypeEvent };
}

function withRouter(router) {
  resetComponentsName(router);

  const { enhanceList, obj, options, routeTypeEvent, beforeRouteTypeEvent } = getBaseOptions();
  const historyPrototype = router.history.constructor.prototype;
  const routerPrototype = router.constructor.prototype;

  routerPrototype[RE_LAUNCH] = to => routerPrototype.replace(to);
  historyPrototype[RE_LAUNCH] = to => historyPrototype.replace(to);

  const routerObj = Object.create(null);
  enhanceList.forEach((key) => {
    obj[key] = historyPrototype[key] || (() => historyPrototype.go(1));
    routerObj[key] = routerPrototype[key] || (() => routerPrototype.go(1));

    historyPrototype[key] = (location, onComplete, onAbort) => dispatch(obj, key, location, onComplete, onAbort);
    routerPrototype[key] = (location, onComplete, onAbort) => dispatch(obj, key, location, onComplete, onAbort);
  });

  function dispatch(obj, key, location, onComplete, onAbort) {
    options.detail.type = key;
    options.detail.destroy = location ? location.destroy : null;
    window.dispatchEvent(beforeRouteTypeEvent);
    window.dispatchEvent(routeTypeEvent);

    return new Promise(resolve => {
      setTimeout(() => {
        resolve(obj[key].call(router.history, location, onComplete, onAbort));
      }, 0);
    });
  }

  return router;
}

export default withRouter;
