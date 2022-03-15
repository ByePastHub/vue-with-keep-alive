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
  const enhanceList = ['push', 'forward', 'replace', 'reLaunch'];
  const obj = Object.create(null);
  const options = { detail: {}};
  const routeTypeEvent = new CustomEvent('keep-routeChange', options);

  return { enhanceList, obj, options, routeTypeEvent };
}

function withRouter(router) {
  resetComponentsName(router);

  const { enhanceList, obj, options, routeTypeEvent } = getBaseOptions();
  router.reLaunch = (to) => router.replace(to);
  enhanceList.forEach((key) => {
    obj[key] = router[key];
    router[key] = (to) => {
      options.detail.type = key;
      options.detail.destroy = to ? to.destroy : null;
      window.dispatchEvent(routeTypeEvent);
      return obj[key](to);
    };
  });
}

export default withRouter;
