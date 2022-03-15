function resetComponentsName(router, isChildren) {
  const routes = isChildren ? router : router.getRoutes();
  routes.forEach(function(route) {
    if (!route?.components?.default) return;
    if (route.children?.length > 0) {
      resetComponentsName(route.children, true);
    };

    if (typeof route.components.default === 'function') {
      const originDefault = route.components.default;
      return route.components.default = async() => {
        const component = await originDefault();
        component.default.name = route.name;
        return component;
      };
    };
    route.components.default.name = route.name;
  });
};

function getBaseOptions() {
  const enhanceList = ['push', 'forward', 'replace', 'reLaunch'];
  const obj = Object.create(null);
  const options = { detail: {}};
  const routeTypeEvent = new CustomEvent('keep-routeChange', options);

  return { enhanceList, obj, options, routeTypeEvent };
}

function withRouter(router) {
  resetComponentsName(router);

  const { enhanceList, obj, options, routeTypeEvent } = getBaseOptions();
  const historyPrototype = router.history.constructor.prototype;
  const routerPrototype = router.constructor.prototype;

  routerPrototype.reLaunch = to => routerPrototype.replace(to);
  historyPrototype.reLaunch = to => historyPrototype.replace(to);

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
    window.dispatchEvent(routeTypeEvent);
    return obj[key].call(router.history, location, onComplete, onAbort);
  }

  return router;
}

export default withRouter;
