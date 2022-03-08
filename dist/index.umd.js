(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}, global.vue));
})(this, (function (exports, vue) { 'use strict';

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
    var routeTypeEvent = new CustomEvent('routeChange', options);
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
    var _component_router_view = vue.resolveComponent('router-view');

    return vue.openBlock(), vue.createBlock(_component_router_view, {
      key: 0
    }, {
      default: vue.withCtx(function (_ref) {
        var Component = _ref.Component;
        return [(vue.openBlock(), vue.createBlock(vue.KeepAlive, {
          include: $data.includeList,
          max: $props.max,
          exclude: $props.exclude
        }, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component)))], 1032, ['include', 'max', 'exclude']))];
      }),
      _: 1
    });
  }

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
      // 页面最大缓存数量
      max: {
        type: Number,
        default: 5
      },
      // 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
      exclude: {
        type: [Array, RegExp, String],
        default: function _default() {
          return [];
        }
      },
      // 匹配到会除了当前页面的名称外，清空其他的页面名称
      matchClearList: {
        type: Array,
        default: function _default() {
          return ['/'];
        }
      },
      // 如果是后退，匹配到名称时，会把后面所以的名称剔除掉
      matchClearBehindList: {
        type: Array,
        default: function _default() {
          return [];
        }
      },
      // 全部缓存，自定义缓存(设置在 route 的 meta.keepAlive = true 则为缓存)
      mode: {
        type: String,
        default: 'allKeepAlive' // allKeepAlive ｜ customizeKeepAlive

      }
    },
    data: function data() {
      return {
        vueNext: Number(exports.Vue.version.slice(0, 3)) >= 3,
        includeList: []
      };
    },
    created: function created() {
      var _this2 = this;

      this.isForward = false;
      this.reLaunch = false;
      this.destroy = null;
      window.addEventListener('routeChange', function (params) {
        var detail = params.detail;

        if (detail.type === 'reLaunch') {
          _this2.includeList = [];
          _this2.reLaunch = true;
        }

        _this2.isForward = true;
        _this2.destroy = detail.destroy;
        setTimeout(function () {
          return _this2.isForward = false;
        }, 300);
      }); // 如果是vue2，watch 不会执行 $route
      // if (!this.vueNext) {
      //   this.watchRoute(this.$route);
      // }

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
    methods: {
      watchRoute: function watchRoute(to) {
        var name = this.getRouteName(to);
        this.handleMatchClearBehindList(name);

        if (this.isForward) {
          this.forward(name);
        } else {
          this.back(name);
        }

        this.handleMatchClearList(to);

        if (!this.reLaunch) {
          if (this.includeList.length === 0) {
            this.includeList.push(name);
          }
        }

        if (this.destroy) {
          this.handelDestroy();
        }

        this.reLaunch = false;
      },
      destroyTraverse: function destroyTraverse(name) {
        var includeList = this.includeList;

        for (var i = 0; i < includeList.length; i++) {
          if (name === includeList[i]) {
            this.includeList.splice(i, 1);
            break;
          }
        }
      },
      handelDestroy: function handelDestroy() {
        var destroy = this.destroy,
            destroyTraverse = this.destroyTraverse;

        if (typeof destroy === 'string' && destroy) {
          destroyTraverse(destroy);
        } else if (Array.isArray(destroy)) {
          destroy.forEach(function (name) {
            return destroyTraverse(name);
          });
        }
      },
      // 前进
      forward: function forward(name) {
        var _this3 = this;

        if (this.includeList.includes(name)) {
          var index = this.includeList.indexOf(name);
          this.includeList.splice(index, 1);
        }

        if (this.includeList.length === this.max) {
          this.includeList.splice(0, 1);
        } // 避免 Vue 数据更新合在一次队列中，导致数据没有发生变化，reLaunch 没有清掉跳转页面的 name


        if (this.reLaunch) {
          if (Promise) {
            Promise.resolve().then(function () {
              return _this3.includeList.push(name);
            });
          } else {
            setTimeout(function () {
              return _this3.includeList.push(name);
            }, 0);
          }
        } else {
          this.includeList.push(name);
        }
      },
      // 后退
      back: function back(name) {
        if (this.includeList.length === 1) {
          this.includeList = [name];
        }

        var index = this.includeList.indexOf(name);

        if (index >= 0) {
          this.includeList.splice(index + 1);
        }
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
      }
    }
  };

  exports.Vue = void 0;
  var index = {
    install: function install(app, router) {
      withRouter(router);
      app.component('KeepRouterView', KeepRouterView);
      exports.Vue = app;
    }
  };

  exports.KeepRouterView = KeepRouterView;
  exports["default"] = index;
  exports.withRouter = withRouter;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
