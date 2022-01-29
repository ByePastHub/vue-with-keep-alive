(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
  typeof define === 'function' && define.amd ? define(['exports'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}));
})(this, (function (exports) { 'use strict';

  var withRouter = (function (router) {
    var enhanceList = ['push', 'replace', 'reLaunch', 'forward'];
    var obj = Object.create(null);
    var options = {
      detail: {}
    };
    var routeTypeEvent = new CustomEvent('routeChange', options);
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
      window.dispatchEvent(routeTypeEvent);
      return obj[key].call(router.history, location, onComplete, onAbort);
    }

    return router;
  });

  function render() {
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

  var KeepRouterView = {
    name: 'KeepRouteView',
    render: render,
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
        includeList: []
      };
    },
    created: function created() {
      var _this = this;

      this.isForward = false;
      this.reLaunch = false;
      window.addEventListener('routeChange', function (params) {
        var detail = params.detail;

        if (detail.type === 'reLaunch') {
          _this.includeList = [];
          _this.reLaunch = true;
        }

        _this.isForward = true;
        setTimeout(function () {
          return _this.isForward = false;
        }, 300);
      });
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

        this.reLaunch = false;
      },
      // 前进
      forward: function forward(name) {
        var _this2 = this;

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
              return _this2.includeList.push(name);
            });
          } else {
            setTimeout(function () {
              return _this2.includeList.push(name);
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

  var index = {
    install: function install(app, router) {
      withRouter(router);
      app.component('KeepRouterView', KeepRouterView);
    }
  };

  exports.KeepRouterView = KeepRouterView;
  exports["default"] = index;
  exports.withRouter = withRouter;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
