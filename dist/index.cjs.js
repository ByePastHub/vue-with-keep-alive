import { resolveComponent, openBlock, createBlock, withCtx, KeepAlive, resolveDynamicComponent, createVNode } from 'vue';

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
      console.log(to);
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
  const _component_router_view = resolveComponent("router-view");

  return $data.vueNext ? (openBlock(), createBlock(_component_router_view, {
    key: 0
  }, {
    default: withCtx(({
      Component
    }) => [(openBlock(), createBlock(KeepAlive, {
      include: [...$data.includeList],
      max: $props.max,
      exclude: $props.exclude
    }, [(openBlock(), createBlock(resolveDynamicComponent(Component)))], 1032
    /* PROPS, DYNAMIC_SLOTS */
    , ["include", "max", "exclude"]))]),
    _: 1
    /* STABLE */

  })) : (openBlock(), createBlock(KeepAlive, {
    key: 1,
    include: [...$data.includeList],
    max: $props.max,
    exclude: $props.exclude
  }, [createVNode(_component_router_view)], 1032
  /* PROPS, DYNAMIC_SLOTS */
  , ["include", "max", "exclude"]));
}

script.render = render;
script.__file = "src/KeepRouterView.vue";

var index = {
  install(app, router) {
    withRouter(router);
    app.component("KeepRouterView", script);
    console.log(Number(app.version.slice(0, 1)));

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

export { script as KeepRouterView, index as default, withRouter };
