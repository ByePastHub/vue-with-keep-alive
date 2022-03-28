import { render } from './render';
import methods from './methods';

export default {
  name: 'KeepRouteView',
  render,
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
      default: () => [],
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
      includeList: [],
    };
  },

  created() {
    this.isForward = false;
    this.addBeforeRouteChangeEvent();
    this.addRouteChangeEvent();
    this.addComponentDestroyEvent();
  },

  watch: {
    $route: {
      immediate: true,
      handler(to) {
        this.watchRoute(to);
      }
    }
  },

  methods,
};
