(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}, global.vue));
})(this, (function (exports, vue) { 'use strict';

  var withRouter = (router => {
    const enhanceList = ["push", "replace", "reLaunch", "forward"];
    const obj = Object.create(null);
    const options = {
      detail: {}
    };
    const routeTypeEvent = new CustomEvent("routeChange", options);

    if (Object.prototype.hasOwnProperty.call(router, "push")) {
      router.reLaunch = to => router.replace(to);

      enhanceList.forEach(key => {
        obj[key] = router[key];

        router[key] = to => {
          options.detail.type = key;
          window.dispatchEvent(routeTypeEvent);
          return obj[key](to);
        };
      });
      return router;
    }

    const _prototype = router.history.constructor.prototype;

    _prototype.reLaunch = to => _prototype.replace(to);

    enhanceList.forEach(key => {
      obj[key] = _prototype[key] || (() => _prototype.go(1));

      _prototype[key] = (location, onComplete, onAbort) => {
        options.detail.type = key;
        window.dispatchEvent(routeTypeEvent);
        return obj[key].call(router.history, location, onComplete, onAbort);
      };
    });
    return router;
  });

  var script = {
    name: "KeepRouterView",
    props: {
      // 页面最大缓存数量
      max: {
        type: Number,
        default: 5
      },
      // 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
      exclude: {
        type: [Array, RegExp, String],
        default: () => []
      },
      // 匹配到会除了当前页面的名称外，清空其他的页面名称
      matchClearList: {
        type: Array,
        default: () => ["/"]
      },
      // 如果是后退，匹配到名称时，会把后面所以的名称剔除掉
      matchClearBehindList: {
        type: Array,
        default: () => []
      }
    },

    data() {
      return {
        vueNext: Number(this.$vueVersion.slice(0, 3)) >= 3,
        includeList: []
      };
    },

    created() {
      this.isForward = false;
      window.addEventListener("routeChange", params => {
        const {
          detail
        } = params;

        if (detail.type === "reLaunch") {
          this.includeList = [];
        }

        this.isForward = true;
        setTimeout(() => this.isForward = false, 300);
      });

      if (!this.vueNext) {
        this.watchRoute(this.$route);
      }
    },

    watch: {
      $route(to) {
        this.watchRoute(to);
      }

    },
    methods: {
      watchRoute(to) {
        this.handleMatchClearBehindList(to.name);

        if (this.isForward) {
          this.forward(to.name);
        } else {
          this.back(to.name);
        }

        this.handleMatchClearList(to);

        if (this.includeList.length === 0) {
          this.includeList.push(to.name);
        }
      },

      // 前进
      forward(name) {
        if (this.includeList.includes(name)) {
          const index = this.includeList.indexOf(name);
          this.includeList.splice(index, 1);
        }

        if (this.includeList.length === this.max) {
          this.includeList.splice(0, 1);
        }

        this.includeList.push(name);
      },

      // 后退
      back(name) {
        if (this.includeList.length === 1) {
          this.includeList = [name];
        }

        const index = this.includeList.indexOf(name);

        if (index >= 0) {
          this.includeList.splice(index + 1);
        }
      },

      handleMatchClearBehindList(name) {
        if (this.matchClearBehindList.includes(name)) {
          const index = this.includeList.indexOf(name);
          if (index < 0) return;
          this.includeList.splice(index + 1);
        }
      },

      handleMatchClearList(to) {
        const index = this.matchClearList.indexOf(to.name || to.path);

        if (index >= 0) {
          this.includeList = [];
        }
      }

    }
  };

  function render(_ctx, _cache, $props, $setup, $data, $options) {
    const _component_router_view = vue.resolveComponent("router-view");

    return $data.vueNext ? (vue.openBlock(), vue.createBlock(_component_router_view, {
      key: 0
    }, {
      default: vue.withCtx(({
        Component
      }) => [(vue.openBlock(), vue.createBlock(vue.KeepAlive, {
        include: [...$data.includeList],
        max: $props.max,
        exclude: $props.exclude
      }, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component)))], 1032
      /* PROPS, DYNAMIC_SLOTS */
      , ["include", "max", "exclude"]))]),
      _: 1
      /* STABLE */

    })) : (vue.openBlock(), vue.createBlock(vue.KeepAlive, {
      key: 1,
      include: [...$data.includeList],
      max: $props.max,
      exclude: $props.exclude
    }, [vue.createVNode(_component_router_view)], 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["include", "max", "exclude"]));
  }

  script.render = render;
  script.__file = "src/KeepRouterView.vue";

  var index = {
    install(app, router) {
      withRouter(router);
      app.component("KeepRouterView", script);

      if (Number(app.version.slice(0, 1)) < 3) {
        Object.defineProperty(app.prototype, "$vueVersion", {
          get() {
            return app.version;
          }

        });
      } else {
        Object.defineProperty(app.config.globalProperties, "$vueVersion", {
          get() {
            return app.version;
          }

        });
      }
    }

  };

  exports.KeepRouterView = script;
  exports["default"] = index;
  exports.withRouter = withRouter;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
