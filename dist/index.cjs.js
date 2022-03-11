import { resolveComponent, openBlock, createBlock, withCtx, KeepAlive, resolveDynamicComponent } from 'vue';

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) {
  try {
    var info = gen[key](arg);
    var value = info.value;
  } catch (error) {
    reject(error);
    return;
  }

  if (info.done) {
    resolve(value);
  } else {
    Promise.resolve(value).then(_next, _throw);
  }
}

function _asyncToGenerator(fn) {
  return function () {
    var self = this,
        args = arguments;
    return new Promise(function (resolve, reject) {
      var gen = fn.apply(self, args);

      function _next(value) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value);
      }

      function _throw(err) {
        asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err);
      }

      _next(undefined);
    });
  };
}

function resetComponentsName(router, isChildren) {
  var routes = isChildren ? router : router.getRoutes();
  routes.forEach(function (route) {
    var _route$components, _route$children;

    if (!(route !== null && route !== void 0 && (_route$components = route.components) !== null && _route$components !== void 0 && _route$components.default)) return;

    if (((_route$children = route.children) === null || _route$children === void 0 ? void 0 : _route$children.length) > 0) {
      resetComponentsName(route.children, true);
    }

    if (typeof route.components.default === 'function') {
      var originDefault = route.components.default;
      return route.components.default = /*#__PURE__*/_asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee() {
        var component;
        return regeneratorRuntime.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return originDefault();

              case 2:
                component = _context.sent;
                component.default.name = route.name;
                return _context.abrupt("return", component);

              case 5:
              case "end":
                return _context.stop();
            }
          }
        }, _callee);
      }));
    }
    route.components.default.name = route.name;
  });
}

function getBaseOptions() {
  var enhanceList = ['push', 'forward', 'replace', 'reLaunch'];
  var obj = Object.create(null);
  var options = {
    detail: {}
  };
  var routeTypeEvent = new CustomEvent('keep-routeChange', options);
  return {
    enhanceList: enhanceList,
    obj: obj,
    options: options,
    routeTypeEvent: routeTypeEvent
  };
}

function withRouter2x(router) {
  var _getBaseOptions = getBaseOptions(),
      enhanceList = _getBaseOptions.enhanceList,
      obj = _getBaseOptions.obj,
      options = _getBaseOptions.options,
      routeTypeEvent = _getBaseOptions.routeTypeEvent;

  var historyPrototype = router.history.constructor.prototype;
  var routerPrototype = router.constructor.prototype;

  routerPrototype.reLaunch = function (to) {
    return routerPrototype.replace(to);
  };

  historyPrototype.reLaunch = function (to) {
    return historyPrototype.replace(to);
  };

  var routerObj = Object.create(null);
  enhanceList.forEach(function (key) {
    obj[key] = historyPrototype[key] || function () {
      return historyPrototype.go(1);
    };

    routerObj[key] = routerPrototype[key] || function () {
      return routerPrototype.go(1);
    };

    historyPrototype[key] = function (location, onComplete, onAbort) {
      return dispatch(obj, key, location, onComplete, onAbort);
    };

    routerPrototype[key] = function (location, onComplete, onAbort) {
      return dispatch(obj, key, location, onComplete, onAbort);
    };
  });

  function dispatch(obj, key, location, onComplete, onAbort) {
    options.detail.type = key;
    options.detail.destroy = location ? location.destroy : null;
    window.dispatchEvent(routeTypeEvent);
    return obj[key].call(router.history, location, onComplete, onAbort);
  }

  return router;
}

function withRouter3x(router) {
  var _getBaseOptions2 = getBaseOptions(),
      enhanceList = _getBaseOptions2.enhanceList,
      obj = _getBaseOptions2.obj,
      options = _getBaseOptions2.options,
      routeTypeEvent = _getBaseOptions2.routeTypeEvent;

  router.reLaunch = function (to) {
    return router.replace(to);
  };

  enhanceList.forEach(function (key) {
    obj[key] = router[key];

    router[key] = function (to) {
      options.detail.type = key;
      options.detail.destroy = to ? to.destroy : null;
      window.dispatchEvent(routeTypeEvent);
      return obj[key](to);
    };
  });
}

var withRouter = (function (router) {
  resetComponentsName(router);

  if (Object.prototype.hasOwnProperty.call(router, 'push')) {
    return withRouter3x(router);
  }

  return withRouter2x(router);
});

function render2x() {
  var _vm = this;

  var _h = _vm.$createElement;

  var _c = _vm._self._c || _h;

  return _c('keep-alive', {
    attrs: {
      include: [].concat(_vm.includeList),
      max: _vm.max,
      exclude: _vm.exclude
    }
  }, [_c('router-view')], 1);
}
function render3x(_ctx, _cache, $props, $setup, $data) {
  var _component_router_view = resolveComponent('router-view');

  return openBlock(), createBlock(_component_router_view, {
    key: 0
  }, {
    default: withCtx(function (_ref) {
      var Component = _ref.Component;
      return [(openBlock(), createBlock(KeepAlive, {
        include: $data.includeList,
        max: $props.max,
        exclude: $props.exclude
      }, [(openBlock(), createBlock(resolveDynamicComponent(Component)))], 1032, ['include', 'max', 'exclude']))];
    }),
    _: 1
  });
}

var methods = {
  watchRoute: function watchRoute(to) {
    var name = this.getRouteName(to);
    this.handleMatchClearBehindList(name);

    if (this.isForward) {
      this.forward(name);
    } else {
      this.back(name);
    }

    if (this.destroy) {
      this.handelDestroy(name, 'addSelf');
    }

    this.handleMatchClearList(to);

    if (!this.reLaunch) {
      if (this.includeList.length === 0) {
        this.asycnPush(name);
      }
    }

    this.reLaunch = false;
  },
  forward: function forward(name) {
    var includeList = this.includeList;

    if (includeList.includes(name)) {
      var index = includeList.indexOf(name);
      includeList.splice(index, 1);
    }

    if (includeList.length === this.max) {
      includeList.splice(0, 1);
    }

    if (this.reLaunch) {
      this.asycnPush(name);
    } else if (this.keepComponentDestroy && this.includeKeepComponentDestroy(name)) {
      this.asycnPush(name);
    } else {
      includeList.push(name);
    }
  },
  back: function back(name) {
    if (this.includeList.length === 1) {
      this.includeList = [name];
    }

    var index = this.includeList.indexOf(name);

    if (index >= 0) {
      this.includeList.splice(index + 1);
    }
  },
  handelDestroy: function handelDestroy(name, mode) {
    var _this = this;

    var destroy = this.destroy,
        destroyTraverse = this.destroyTraverse;

    if (typeof destroy === 'string' && destroy) {
      destroyTraverse(destroy);
    } else if (Array.isArray(destroy)) {
      destroy.forEach(function (name) {
        return destroyTraverse(name);
      });
    }

    this.$nextTick(function () {
      _this.keepComponentDestroy = null;
    });
    if (mode === 'clearSelf') return;
    this.asycnPush(name);
  },
  handleMatchClearBehindList: function handleMatchClearBehindList(name) {
    if (this.matchClearBehindList.includes(name)) {
      var index = this.includeList.indexOf(name);
      if (index < 0) return;
      this.includeList.splice(index + 1);
    }
  },
  handleMatchClearList: function handleMatchClearList(to) {
    var index = this.matchClearList.indexOf(to.name || to.path);

    if (index >= 0) {
      this.includeList = [];
    }
  },
  getRouteName: function getRouteName(to) {
    var name = to.name;
    var keepAlive = to.meta.keepAlive;
    return this.mode === 'allKeepAlive' || keepAlive ? name : '__' + name;
  },
  includeKeepComponentDestroy: function includeKeepComponentDestroy(name) {
    var keepComponentDestroy = this.keepComponentDestroy;

    if (typeof keepComponentDestroy === 'string') {
      return keepComponentDestroy === name;
    } else if (Array.isArray(keepComponentDestroy)) {
      return keepComponentDestroy.includes(name);
    }

    return false;
  },
  destroyTraverse: function destroyTraverse(name) {
    var includeList = this.includeList;

    for (var i = 0; i < includeList.length; i++) {
      if (name === includeList[i]) {
        includeList.splice(i, 1);
        break;
      }
    }
  },
  asycnPush: function asycnPush(name) {
    var _this2 = this;

    var push = function push() {
      if (_this2.includeList.includes(name)) return;

      _this2.includeList.push(name);
    };

    if (Promise) {
      Promise.resolve().then(push);
    } else {
      setTimeout(push, 0);
    }
  },
  addRouteChangeEvent: function addRouteChangeEvent() {
    var _this3 = this;

    window.addEventListener('keep-routeChange', function (params) {
      var detail = params.detail;

      if (detail.type === 'reLaunch') {
        _this3.includeList = [];
        _this3.reLaunch = true;
      }

      _this3.destroy = detail.destroy;
      _this3.isForward = true;
      setTimeout(function () {
        return _this3.isForward = false;
      }, 300);
    });
  },
  addComponentDestroyEvent: function addComponentDestroyEvent() {
    var _this4 = this;

    window.addEventListener('keep-componentDestroy', function (params) {
      var detail = params.detail;
      _this4.destroy = detail;
      _this4.keepComponentDestroy = detail;

      _this4.handelDestroy(_this4.$route.name, 'clearSelf');
    });
  }
};

var _this;

var KeepRouterView = {
  name: 'KeepRouteView',
  render: function render() {
    if (!_this.vueNext) {
      return render2x.call(_this);
    } else {
      return render3x.apply(void 0, arguments);
    }
  },
  props: {
    max: {
      type: Number,
      default: 5
    },
    exclude: {
      type: [Array, RegExp, String],
      default: function _default() {
        return [];
      }
    },
    matchClearList: {
      type: Array,
      default: function _default() {
        return ['/'];
      }
    },
    matchClearBehindList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mode: {
      type: String,
      default: 'allKeepAlive'
    }
  },
  data: function data() {
    return {
      vueNext: Number(Vue.version.slice(0, 3)) >= 3,
      includeList: []
    };
  },
  created: function created() {
    this.isForward = false;
    this.reLaunch = false;
    this.destroy = null;
    this.addRouteChangeEvent();
    this.addComponentDestroyEvent();
    _this = this;
  },
  watch: {
    $route: {
      immediate: true,
      handler: function handler(to) {
        this.watchRoute(to);
      }
    }
  },
  methods: methods
};

function destroy(value) {
  var destroyEvent = new CustomEvent('keep-componentDestroy', {
    detail: value
  });
  window.dispatchEvent(destroyEvent);
}

var Vue;
var index = {
  install: function install(app, router) {
    withRouter(router);
    app.component('KeepRouterView', KeepRouterView);
    Vue = app;
    var keepRouter = {
      destroy: destroy
    };

    if (Number(app.version.slice(0, 1)) < 3) {
      app.prototype.$keepRouter = keepRouter;
    } else {
      app.config.globalProperties.$keepRouter = keepRouter;
    }
  }
};

export { KeepRouterView, Vue, index as default, withRouter };
