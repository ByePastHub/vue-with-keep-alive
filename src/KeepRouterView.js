import { render2x, render3x } from './render';
import { Vue } from './index';
let _this;
export default {
  name: 'KeepRouteView',
  render: function() {
    if (!_this.vueNext) {
      return render2x.call(_this);
    } else {
      return render3x(...arguments);
    }
  },
  props: {
    max: {
      type: Number,
      default: 5,
    },
    exclude: {
      type: [Array, RegExp, String],
      default: () => [],
    },
    matchClearList: {
      type: Array,
      default: () => ['/'],
    },
    matchClearBehindList: {
      type: Array,
      default: () => [],
    },
    mode: {
      type: String,
      default: 'allKeepAlive',
    }
  },
  data() {
    return {
      vueNext: Number(Vue.version.slice(0, 3)) >= 3,
      includeList: [],
    };
  },
  created() {
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
      handler(to) {
        this.watchRoute(to);
      }
    }
  },
  methods: {
    watchRoute(to) {
      const name = this.getRouteName(to);
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
    forward(name) {
      const { includeList } = this;
      if (includeList.includes(name)) {
        const index = includeList.indexOf(name);
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
    back(name) {
      if (this.includeList.length === 1) {
        this.includeList = [name];
      }
      const index = this.includeList.indexOf(name);
      if (index >= 0) {
        this.includeList.splice(index + 1);
      }
    },
    handelDestroy(name, mode) {
      const { destroy, destroyTraverse } = this;
      if (typeof destroy === 'string' && destroy) {
        destroyTraverse(destroy);
      } else if (Array.isArray(destroy)) {
        destroy.forEach(name => destroyTraverse(name));
      }
      this.$nextTick(() => {
        this.keepComponentDestroy = null;
      });
      if (mode === 'clearSelf') return;
      this.asycnPush(name);
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
    },
    getRouteName(to) {
      const name = to.name;
      const keepAlive = to.meta.keepAlive;
      return this.mode === 'allKeepAlive' || keepAlive ? name : '__' + name;
    },
    includeKeepComponentDestroy(name) {
      const { keepComponentDestroy } = this;
      if (typeof keepComponentDestroy === 'string') {
        return keepComponentDestroy === name;
      } else if (Array.isArray(keepComponentDestroy)) {
        return keepComponentDestroy.includes(name);
      }
      return false;
    },
    destroyTraverse(name) {
      const { includeList } = this;
      for (let i = 0; i < includeList.length; i++) {
        if (name === includeList[i]) {
          includeList.splice(i, 1);
          break;
        }
      }
    },
    asycnPush(name) {
      const push = () => {
        if (this.includeList.includes(name)) return;
        this.includeList.push(name);
      };
      if (Promise) {
        Promise.resolve().then(push);
      } else {
        setTimeout(push, 0);
      }
    },
    addRouteChangeEvent() {
      window.addEventListener('keep-routeChange', (params) => {
        const { detail } = params;
        if (detail.type === 'reLaunch') {
          this.includeList = [];
          this.reLaunch = true;
        }
        this.destroy = detail.destroy;
        this.isForward = true;
        setTimeout(() => (this.isForward = false), 300);
      });
    },
    addComponentDestroyEvent() {
      window.addEventListener('keep-componentDestroy', (params) => {
        const { detail } = params;
        this.destroy = detail;
        this.keepComponentDestroy = detail;
        this.handelDestroy(this.$route.name, 'clearSelf');
      });
    }
  },
};
