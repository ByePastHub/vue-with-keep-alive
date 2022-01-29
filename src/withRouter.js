export default (router) => {
  const enhanceList = ['push', 'replace', 'reLaunch', 'forward'];
  const obj = Object.create(null);
  const options = { detail: {} };
  const routeTypeEvent = new CustomEvent('routeChange', options);

  const historyPrototype = router.history.constructor.prototype;
  const routerPrototype = router.constructor.prototype;

  routerPrototype.reLaunch = to => routerPrototype.replace(to)
  historyPrototype.reLaunch = to => historyPrototype.replace(to);

  const routerObj = Object.create(null);
  enhanceList.forEach((key) => {
    obj[key] = historyPrototype[key] || (() => historyPrototype.go(1));
    routerObj[key] = routerPrototype[key] || (() => routerPrototype.go(1));

    historyPrototype[key] = (location, onComplete, onAbort) => dispatch(obj, key, location, onComplete, onAbort);
    routerPrototype[key] = (location, onComplete, onAbort) => dispatch(obj, key, location, onComplete, onAbort);
  });

  function dispatch (obj, key, location, onComplete, onAbort) {
    options.detail.type = key;
    window.dispatchEvent(routeTypeEvent);
    return obj[key].call(router.history, location, onComplete, onAbort);
  }

  return router;
};
