import { KEEP_BEFORE_ROUTE_CHANGE, KEEP_ROUTE_CHANGE, KEEP_COMPONENT_DESTROY, RE_LAUNCH, DESTROY_ALL } from './constants';

export default {
  watchRoute(to) {
    const name = this.getRouteName(to);
    this.handleMatchClearBehindList(name);
    if (this.isForward) {
      this.forward(name);
    } else {
      this.back(name);
    }
    this.handleMatchClearList(to);
    if (this.includeList.length === 0) {
      this.includeList.push(name);
    }
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
    includeList.push(name);
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
  handelDestroy(destroy) {
    const { destroyTraverse } = this;
    if (typeof destroy === 'string' && destroy) {
      destroyTraverse(destroy);
    } else if (Array.isArray(destroy)) {
      destroy.forEach(name => destroyTraverse(name));
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
  addBeforeRouteChangeEvent() {
    window.addEventListener(KEEP_BEFORE_ROUTE_CHANGE, (params) => {
      const { detail: { type, destroy, toLocation }} = params;
      // this.destroyTraverse(toLocation.name);
      if (type === RE_LAUNCH || destroy === DESTROY_ALL) {
        this.includeList = [];
      }
      this.handelDestroy(destroy);
    });
  },
  addRouteChangeEvent() {
    window.addEventListener(KEEP_ROUTE_CHANGE, (params) => {
      const { detail } = params;
      if (detail.type === RE_LAUNCH) {
        this.includeList = [];
      }
      this.isForward = true;
      setTimeout(() => (this.isForward = false), 300);
    });
  },
  addComponentDestroyEvent() {
    window.addEventListener(KEEP_COMPONENT_DESTROY, (params) => {
      const { detail } = params;
      this.handelDestroy(detail);
    });
  }
};
