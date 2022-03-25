import { KEEP_BEFORE_ROUTE_CHANGE, KEEP_ROUTE_CHANGE, RE_LAUNCH } from './constants';

function resetComponentsName(router, isChildren) {
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
  router.reLaunch = (to) => router.replace(to);
  enhanceList.forEach((key) => {
    obj[key] = router[key];
    router[key] = (to) => {
      options.detail.type = key;
      options.detail.destroy = to ? to.destroy : null;
      window.dispatchEvent(beforeRouteTypeEvent);
      window.dispatchEvent(routeTypeEvent);
      return obj[key](to);
    };
  });
}

export default withRouter;
