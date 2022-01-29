export default (router) => {
  const enhanceList = ['push', 'replace', 'reLaunch', 'forward'];
  const obj = Object.create(null);
  const options = { detail: {} };
  const routeTypeEvent = new CustomEvent('routeChange', options);

  if (Object.prototype.hasOwnProperty.call(router, 'push')) {
    router.reLaunch = (to) => router.replace(to);
    enhanceList.forEach((key) => {
      obj[key] = router[key];
      router[key] = (to) => {
        options.detail.type = key;
        window.dispatchEvent(routeTypeEvent);
        return obj[key](to);
      };
    });

  }

  return router;
};
