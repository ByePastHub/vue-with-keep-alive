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
    // 页面最大缓存数量
    max: {
      type: Number,
      default: 5,
    },
    // 字符串或正则表达式。任何名称匹配的组件都不会被缓存。
    exclude: {
      type: [Array, RegExp, String],
      default: () => [],
    },
    // 匹配到会除了当前页面的名称外，清空其他的页面名称
    matchClearList: {
      type: Array,
      default: () => ['/'],
    },
    // 如果是后退，匹配到名称时，会把后面所以的名称剔除掉
    matchClearBehindList: {
      type: Array,
      default: () => [],
    },
    // 全部缓存，自定义缓存(设置在 route 的 meta.keepAlive = true 则为缓存)
    mode: {
      type: String,
      default: 'allKeepAlive', // allKeepAlive ｜ customizeKeepAlive
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
    window.addEventListener('routeChange', (params) => {
      const { detail } = params;
      if (detail.type === 'reLaunch') {
        this.includeList = [];
        this.reLaunch = true;
      }
      this.isForward = true;
      this.destroy = detail.destroy;
      setTimeout(() => (this.isForward = false), 300);
    });
    // 如果是vue2，watch 不会执行 $route
    // if (!this.vueNext) {
    //   this.watchRoute(this.$route);
    // }
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
        this.handelDestroy(name);
      }
      this.handleMatchClearList(to);
      if (!this.reLaunch) {
        if (this.includeList.length === 0) {
          this.asycnPush(name);
        }
      }
      this.reLaunch = false;
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
    handelDestroy(name) {
      const { destroy, destroyTraverse } = this;
      if (typeof destroy === 'string' && destroy) {
        destroyTraverse(destroy);
      } else if (Array.isArray(destroy)) {
        destroy.forEach(name => destroyTraverse(name));
      }
      this.asycnPush(name);
    },
    asycnPush(name) {
      // 避免 Vue 数据更新合在一次队列中，导致数据没有发生变化，reLaunch 没有清掉跳转页面的 name
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
    // 前进
    forward(name) {
      if (this.includeList.includes(name)) {
        const index = this.includeList.indexOf(name);
        this.includeList.splice(index, 1);
      }
      if (this.includeList.length === this.max) {
        this.includeList.splice(0, 1);
      }
      if (this.reLaunch) {
        this.asycnPush(name);
      } else {
        this.includeList.push(name);
      }
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
    },
    getRouteName(to) {
      const name = to.name;
      const keepAlive = to.meta.keepAlive;

      return this.mode === 'allKeepAlive' || keepAlive ? name : '__' + name;
    }
  },
};
