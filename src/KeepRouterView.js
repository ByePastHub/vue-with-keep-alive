import { render2x, render3x } from './render';
import methods from './methods';
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
      default: () => [],
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
    this.addBeforeRouteChangeEvent();
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
  methods
};
