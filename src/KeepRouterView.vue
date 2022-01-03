<template>
  <router-view v-if="vueNext" v-slot="{ Component }">
    <keep-alive :include="[...includeList]" :max="max" :exclude="exclude">
      <component :is="Component"></component>
    </keep-alive>
  </router-view>
  <keep-alive v-else :include="[...includeList]" :max="max" :exclude="exclude">
    <router-view />
  </keep-alive>
</template>

<script>
export default {
  name: "KeepRouterView",
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
      default: () => ["/"],
    },
    // 如果是后退，匹配到名称时，会把后面所以的名称剔除掉
    matchClearBehindList: {
      type: Array,
      default: () => [],
    },
  },
  data() {
    return {
      vueNext: Number(this.$vueVersion.slice(0, 3)) >= 3,
      includeList: [],
    };
  },

  created() {
    this.isForward = false;
    window.addEventListener("routeChange", (params) => {
      const { detail } = params;
      if (detail.type === "reLaunch") {
        this.includeList = [];
      }
      this.isForward = true;
      setTimeout(() => (this.isForward = false), 300);
    });
    if (!this.vueNext) {
      this.watchRoute(this.$route);
    }
  },

  watch: {
    $route(to) {
      this.watchRoute(to);
    },
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
    },
  },
};
</script>
