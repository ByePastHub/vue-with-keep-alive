export default (router) => {
  const enhanceList = ["push", "replace", "reLaunch", "forward"];
  const obj = Object.create(null);
  const options = { detail: {} };
  const routeTypeEvent = new CustomEvent("routeChange", options);

  if (Object.prototype.hasOwnProperty.call(router, "push")) {
    router.reLaunch = (to) => router.replace(to);
    enhanceList.forEach((key) => {
      obj[key] = router[key];
      router[key] = (to) => {
        options.detail.type = key;
        window.dispatchEvent(routeTypeEvent);
        return obj[key](to);
      };
    });

    return router;
  }


  const _prototype = router.history.constructor.prototype;

  _prototype.reLaunch = (to) => _prototype.replace(to);
  enhanceList.forEach((key) => {
    obj[key] = _prototype[key] || (() => _prototype.go(1));

    _prototype[key] = (location, onComplete, onAbort) => {
      options.detail.type = key;
      window.dispatchEvent(routeTypeEvent);
      return obj[key].call(router.history, location, onComplete, onAbort);
    };
  });

  return router;
};
