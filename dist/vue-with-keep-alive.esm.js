import * as Vue$1 from 'vue';

function getDefaultExportFromCjs (x) {
	return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
}

var asyncToGenerator = {exports: {}};

(function (module) {
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
module.exports = _asyncToGenerator, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(asyncToGenerator));
var _asyncToGenerator = getDefaultExportFromCjs(asyncToGenerator.exports);

var regeneratorRuntime$1 = {exports: {}};

var _typeof = {exports: {}};

(function (module) {
function _typeof(obj) {
  "@babel/helpers - typeof";
  return (module.exports = _typeof = "function" == typeof Symbol && "symbol" == typeof Symbol.iterator ? function (obj) {
    return typeof obj;
  } : function (obj) {
    return obj && "function" == typeof Symbol && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports), _typeof(obj);
}
module.exports = _typeof, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(_typeof));
getDefaultExportFromCjs(_typeof.exports);

(function (module) {
var _typeof$1 = _typeof.exports["default"];
function _regeneratorRuntime() {
  /*! regenerator-runtime -- Copyright (c) 2014-present, Facebook, Inc. -- license (MIT): https://github.com/facebook/regenerator/blob/main/LICENSE */
  module.exports = _regeneratorRuntime = function _regeneratorRuntime() {
    return exports;
  }, module.exports.__esModule = true, module.exports["default"] = module.exports;
  var exports = {},
      Op = Object.prototype,
      hasOwn = Op.hasOwnProperty,
      $Symbol = "function" == typeof Symbol ? Symbol : {},
      iteratorSymbol = $Symbol.iterator || "@@iterator",
      asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator",
      toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    return Object.defineProperty(obj, key, {
      value: value,
      enumerable: !0,
      configurable: !0,
      writable: !0
    }), obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function define(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator,
        generator = Object.create(protoGenerator.prototype),
        context = new Context(tryLocsList || []);
    return generator._invoke = function (innerFn, self, context) {
      var state = "suspendedStart";
      return function (method, arg) {
        if ("executing" === state) throw new Error("Generator is already running");
        if ("completed" === state) {
          if ("throw" === method) throw arg;
          return doneResult();
        }
        for (context.method = method, context.arg = arg;;) {
          var delegate = context.delegate;
          if (delegate) {
            var delegateResult = maybeInvokeDelegate(delegate, context);
            if (delegateResult) {
              if (delegateResult === ContinueSentinel) continue;
              return delegateResult;
            }
          }
          if ("next" === context.method) context.sent = context._sent = context.arg;else if ("throw" === context.method) {
            if ("suspendedStart" === state) throw state = "completed", context.arg;
            context.dispatchException(context.arg);
          } else "return" === context.method && context.abrupt("return", context.arg);
          state = "executing";
          var record = tryCatch(innerFn, self, context);
          if ("normal" === record.type) {
            if (state = context.done ? "completed" : "suspendedYield", record.arg === ContinueSentinel) continue;
            return {
              value: record.arg,
              done: context.done
            };
          }
          "throw" === record.type && (state = "completed", context.method = "throw", context.arg = record.arg);
        }
      };
    }(innerFn, self, context), generator;
  }
  function tryCatch(fn, obj, arg) {
    try {
      return {
        type: "normal",
        arg: fn.call(obj, arg)
      };
    } catch (err) {
      return {
        type: "throw",
        arg: err
      };
    }
  }
  exports.wrap = wrap;
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf,
      NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  NativeIteratorPrototype && NativeIteratorPrototype !== Op && hasOwn.call(NativeIteratorPrototype, iteratorSymbol) && (IteratorPrototype = NativeIteratorPrototype);
  var Gp = GeneratorFunctionPrototype.prototype = Generator.prototype = Object.create(IteratorPrototype);
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function (method) {
      define(prototype, method, function (arg) {
        return this._invoke(method, arg);
      });
    });
  }
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if ("throw" !== record.type) {
        var result = record.arg,
            value = result.value;
        return value && "object" == _typeof$1(value) && hasOwn.call(value, "__await") ? PromiseImpl.resolve(value.__await).then(function (value) {
          invoke("next", value, resolve, reject);
        }, function (err) {
          invoke("throw", err, resolve, reject);
        }) : PromiseImpl.resolve(value).then(function (unwrapped) {
          result.value = unwrapped, resolve(result);
        }, function (error) {
          return invoke("throw", error, resolve, reject);
        });
      }
      reject(record.arg);
    }
    var previousPromise;
    this._invoke = function (method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function (resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise = previousPromise ? previousPromise.then(callInvokeWithMethodAndArg, callInvokeWithMethodAndArg) : callInvokeWithMethodAndArg();
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (undefined === method) {
      if (context.delegate = null, "throw" === context.method) {
        if (delegate.iterator["return"] && (context.method = "return", context.arg = undefined, maybeInvokeDelegate(delegate, context), "throw" === context.method)) return ContinueSentinel;
        context.method = "throw", context.arg = new TypeError("The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if ("throw" === record.type) return context.method = "throw", context.arg = record.arg, context.delegate = null, ContinueSentinel;
    var info = record.arg;
    return info ? info.done ? (context[delegate.resultName] = info.value, context.next = delegate.nextLoc, "return" !== context.method && (context.method = "next", context.arg = undefined), context.delegate = null, ContinueSentinel) : info : (context.method = "throw", context.arg = new TypeError("iterator result is not an object"), context.delegate = null, ContinueSentinel);
  }
  function pushTryEntry(locs) {
    var entry = {
      tryLoc: locs[0]
    };
    1 in locs && (entry.catchLoc = locs[1]), 2 in locs && (entry.finallyLoc = locs[2], entry.afterLoc = locs[3]), this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal", delete record.arg, entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{
      tryLoc: "root"
    }], tryLocsList.forEach(pushTryEntry, this), this.reset(!0);
  }
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) return iteratorMethod.call(iterable);
      if ("function" == typeof iterable.next) return iterable;
      if (!isNaN(iterable.length)) {
        var i = -1,
            next = function next() {
          for (; ++i < iterable.length;) {
            if (hasOwn.call(iterable, i)) return next.value = iterable[i], next.done = !1, next;
          }
          return next.value = undefined, next.done = !0, next;
        };
        return next.next = next;
      }
    }
    return {
      next: doneResult
    };
  }
  function doneResult() {
    return {
      value: undefined,
      done: !0
    };
  }
  return GeneratorFunction.prototype = GeneratorFunctionPrototype, define(Gp, "constructor", GeneratorFunctionPrototype), define(GeneratorFunctionPrototype, "constructor", GeneratorFunction), GeneratorFunction.displayName = define(GeneratorFunctionPrototype, toStringTagSymbol, "GeneratorFunction"), exports.isGeneratorFunction = function (genFun) {
    var ctor = "function" == typeof genFun && genFun.constructor;
    return !!ctor && (ctor === GeneratorFunction || "GeneratorFunction" === (ctor.displayName || ctor.name));
  }, exports.mark = function (genFun) {
    return Object.setPrototypeOf ? Object.setPrototypeOf(genFun, GeneratorFunctionPrototype) : (genFun.__proto__ = GeneratorFunctionPrototype, define(genFun, toStringTagSymbol, "GeneratorFunction")), genFun.prototype = Object.create(Gp), genFun;
  }, exports.awrap = function (arg) {
    return {
      __await: arg
    };
  }, defineIteratorMethods(AsyncIterator.prototype), define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  }), exports.AsyncIterator = AsyncIterator, exports.async = function (innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    void 0 === PromiseImpl && (PromiseImpl = Promise);
    var iter = new AsyncIterator(wrap(innerFn, outerFn, self, tryLocsList), PromiseImpl);
    return exports.isGeneratorFunction(outerFn) ? iter : iter.next().then(function (result) {
      return result.done ? result.value : iter.next();
    });
  }, defineIteratorMethods(Gp), define(Gp, toStringTagSymbol, "Generator"), define(Gp, iteratorSymbol, function () {
    return this;
  }), define(Gp, "toString", function () {
    return "[object Generator]";
  }), exports.keys = function (object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    return keys.reverse(), function next() {
      for (; keys.length;) {
        var key = keys.pop();
        if (key in object) return next.value = key, next.done = !1, next;
      }
      return next.done = !0, next;
    };
  }, exports.values = values, Context.prototype = {
    constructor: Context,
    reset: function reset(skipTempReset) {
      if (this.prev = 0, this.next = 0, this.sent = this._sent = undefined, this.done = !1, this.delegate = null, this.method = "next", this.arg = undefined, this.tryEntries.forEach(resetTryEntry), !skipTempReset) for (var name in this) {
        "t" === name.charAt(0) && hasOwn.call(this, name) && !isNaN(+name.slice(1)) && (this[name] = undefined);
      }
    },
    stop: function stop() {
      this.done = !0;
      var rootRecord = this.tryEntries[0].completion;
      if ("throw" === rootRecord.type) throw rootRecord.arg;
      return this.rval;
    },
    dispatchException: function dispatchException(exception) {
      if (this.done) throw exception;
      var context = this;
      function handle(loc, caught) {
        return record.type = "throw", record.arg = exception, context.next = loc, caught && (context.method = "next", context.arg = undefined), !!caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i],
            record = entry.completion;
        if ("root" === entry.tryLoc) return handle("end");
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc"),
              hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) return handle(entry.catchLoc, !0);
          } else {
            if (!hasFinally) throw new Error("try statement without catch or finally");
            if (this.prev < entry.finallyLoc) return handle(entry.finallyLoc);
          }
        }
      }
    },
    abrupt: function abrupt(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev && hasOwn.call(entry, "finallyLoc") && this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      finallyEntry && ("break" === type || "continue" === type) && finallyEntry.tryLoc <= arg && arg <= finallyEntry.finallyLoc && (finallyEntry = null);
      var record = finallyEntry ? finallyEntry.completion : {};
      return record.type = type, record.arg = arg, finallyEntry ? (this.method = "next", this.next = finallyEntry.finallyLoc, ContinueSentinel) : this.complete(record);
    },
    complete: function complete(record, afterLoc) {
      if ("throw" === record.type) throw record.arg;
      return "break" === record.type || "continue" === record.type ? this.next = record.arg : "return" === record.type ? (this.rval = this.arg = record.arg, this.method = "return", this.next = "end") : "normal" === record.type && afterLoc && (this.next = afterLoc), ContinueSentinel;
    },
    finish: function finish(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) return this.complete(entry.completion, entry.afterLoc), resetTryEntry(entry), ContinueSentinel;
      }
    },
    "catch": function _catch(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if ("throw" === record.type) {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function delegateYield(iterable, resultName, nextLoc) {
      return this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      }, "next" === this.method && (this.arg = undefined), ContinueSentinel;
    }
  }, exports;
}
module.exports = _regeneratorRuntime, module.exports.__esModule = true, module.exports["default"] = module.exports;
}(regeneratorRuntime$1));
getDefaultExportFromCjs(regeneratorRuntime$1.exports);

var runtime = regeneratorRuntime$1.exports();
var regenerator = runtime;
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}

var KEEP_BEFORE_ROUTE_CHANGE = 'KEEP_BEFORE_ROUTE_CHANGE';
var KEEP_ROUTE_CHANGE = 'KEEP_ROUTE_CHANGE';
var KEEP_COMPONENT_DESTROY = 'KEEP_COMPONENT_DESTROY';
var RE_LAUNCH = 'reLaunch';
var DESTROY_ALL = 'ALL';

function resetComponentsName(router, isChildren) {
  var _router$constructor$v;
  var routerVersion = (_router$constructor$v = router.constructor.version) === null || _router$constructor$v === void 0 ? void 0 : _router$constructor$v.replace(/\.(\d+)$/, '$1');
  if (routerVersion < 3.5) {
    console.error('vue-with-keep-alive: vue-router version is lower than 3.5.0, please upgrade vue-router');
    return;
  }
  var routes = isChildren ? router : router.getRoutes();
  routes.forEach(function (route) {
    var _route$components, _route$children;
    if (!(route !== null && route !== void 0 && (_route$components = route.components) !== null && _route$components !== void 0 && _route$components.default)) return;
    if (((_route$children = route.children) === null || _route$children === void 0 ? void 0 : _route$children.length) > 0) {
      resetComponentsName(route.children, true);
    }
    if (typeof route.components.default === 'function') {
      var oldComponent = route.components.default;
      return route.components.default = _asyncToGenerator( regenerator.mark(function _callee() {
        var newComponent;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return oldComponent();
              case 2:
                newComponent = _context.sent;
                newComponent.default.name = route.name;
                return _context.abrupt("return", newComponent);
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
  var enhanceList = ['push', 'forward', 'replace', RE_LAUNCH];
  var obj = Object.create(null);
  var options = {
    detail: {}
  };
  var beforeRouteTypeEvent = new CustomEvent(KEEP_BEFORE_ROUTE_CHANGE, options);
  var routeTypeEvent = new CustomEvent(KEEP_ROUTE_CHANGE, options);
  return {
    enhanceList: enhanceList,
    obj: obj,
    options: options,
    routeTypeEvent: routeTypeEvent,
    beforeRouteTypeEvent: beforeRouteTypeEvent
  };
}
function withRouter2x(router) {
  var _getBaseOptions = getBaseOptions(),
      enhanceList = _getBaseOptions.enhanceList,
      obj = _getBaseOptions.obj,
      options = _getBaseOptions.options,
      routeTypeEvent = _getBaseOptions.routeTypeEvent,
      beforeRouteTypeEvent = _getBaseOptions.beforeRouteTypeEvent;
  var historyPrototype = router.history.constructor.prototype;
  var routerPrototype = router.constructor.prototype;
  routerPrototype[RE_LAUNCH] = function (to) {
    return routerPrototype.replace(to);
  };
  historyPrototype[RE_LAUNCH] = function (to) {
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
    window.dispatchEvent(beforeRouteTypeEvent);
    window.dispatchEvent(routeTypeEvent);
    return new Promise(function (resolve) {
      setTimeout(function () {
        resolve(obj[key].call(router.history, location, onComplete, onAbort));
      }, 0);
    });
  }
  return router;
}
function withRouter3x(router) {
  var _getBaseOptions2 = getBaseOptions(),
      enhanceList = _getBaseOptions2.enhanceList,
      obj = _getBaseOptions2.obj,
      options = _getBaseOptions2.options,
      routeTypeEvent = _getBaseOptions2.routeTypeEvent,
      beforeRouteTypeEvent = _getBaseOptions2.beforeRouteTypeEvent;
  router[RE_LAUNCH] = function (to) {
    return router.replace(to);
  };
  enhanceList.forEach(function (key) {
    obj[key] = router[key];
    router[key] = function (to) {
      var toLocation = router.resolve(to);
      options.detail.type = key;
      options.detail.toLocation = toLocation;
      options.detail.destroy = to ? to.destroy : null;
      window.dispatchEvent(beforeRouteTypeEvent);
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
  var vm = this;
  var h = vm.$createElement;
  var c = vm._self.c || h;
  return c('keep-alive', {
    attrs: {
      include: [].concat(vm.includeList),
      max: vm.max,
      exclude: vm.exclude
    }
  }, [c('router-view')], 1);
}
function render3x(ctx, cache, props, setup, data) {
  var _Vue = Vue$1;
  var componentRouterView = _Vue.resolveComponent('router-view');
  var openBlock = _Vue.openBlock;
  var createBlock = _Vue.createBlock;
  var withCtx = _Vue.withCtx;
  var KeepAlive = _Vue.KeepAlive;
  var resolveDynamicComponent = _Vue.resolveDynamicComponent;
  return openBlock(), createBlock(componentRouterView, {
    key: 0
  }, {
    default: withCtx(function (ref) {
      var Component = ref.Component;
      return [(openBlock(), createBlock(KeepAlive, {
        include: data.includeList,
        max: props.max,
        exclude: props.exclude
      }, [(openBlock(), createBlock(resolveDynamicComponent(Component)))], 1032, ['include', 'max', 'exclude']))];
    }),
    _: 1
  });
}

var methods = {
  watchRoute: function watchRoute(to) {
    var name = this.getRouteName(to);
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
  forward: function forward(name) {
    var includeList = this.includeList;
    if (includeList.includes(name)) {
      var index = includeList.indexOf(name);
      includeList.splice(index, 1);
    }
    if (includeList.length === this.max) {
      includeList.splice(0, 1);
    }
    includeList.push(name);
  },
  back: function back(name) {
    if (this.includeList.length === 1) {
      this.includeList = [name];
    }
    var index = this.includeList.indexOf(name);
    if (index >= 0) {
      this.includeList.splice(index + 1);
    }
  },
  handelDestroy: function handelDestroy(destroy) {
    var destroyTraverse = this.destroyTraverse;
    if (typeof destroy === 'string' && destroy) {
      destroyTraverse(destroy);
    } else if (Array.isArray(destroy)) {
      destroy.forEach(function (name) {
        return destroyTraverse(name);
      });
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
  },
  destroyTraverse: function destroyTraverse(name) {
    var includeList = this.includeList;
    for (var i = 0; i < includeList.length; i++) {
      if (name === includeList[i]) {
        includeList.splice(i, 1);
        break;
      }
    }
  },
  addBeforeRouteChangeEvent: function addBeforeRouteChangeEvent() {
    var _this = this;
    window.addEventListener(KEEP_BEFORE_ROUTE_CHANGE, function (params) {
      var _params$detail = params.detail,
          type = _params$detail.type,
          destroy = _params$detail.destroy;
          _params$detail.toLocation;
      if (type === RE_LAUNCH || destroy === DESTROY_ALL) {
        _this.includeList = [];
      }
      _this.handelDestroy(destroy);
    });
  },
  addRouteChangeEvent: function addRouteChangeEvent() {
    var _this2 = this;
    window.addEventListener(KEEP_ROUTE_CHANGE, function (params) {
      var detail = params.detail;
      if (detail.type === RE_LAUNCH) {
        _this2.includeList = [];
      }
      _this2.isForward = true;
      setTimeout(function () {
        return _this2.isForward = false;
      }, 300);
    });
  },
  addComponentDestroyEvent: function addComponentDestroyEvent() {
    var _this3 = this;
    window.addEventListener(KEEP_COMPONENT_DESTROY, function (params) {
      var detail = params.detail;
      _this3.handelDestroy(detail);
    });
  }
};

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
    max: {
      type: Number,
      default: 5
    },
    exclude: {
      type: [Array, RegExp, String],
      default: function _default() {
        return [];
      }
    },
    matchClearList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    matchClearBehindList: {
      type: Array,
      default: function _default() {
        return [];
      }
    },
    mode: {
      type: String,
      default: 'allKeepAlive'
    }
  },
  data: function data() {
    return {
      vueNext: Number(Vue.version.slice(0, 3)) >= 3,
      includeList: []
    };
  },
  created: function created() {
    this.isForward = false;
    this.addBeforeRouteChangeEvent();
    this.addRouteChangeEvent();
    this.addComponentDestroyEvent();
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
  methods: methods
};

function destroy(_x) {
  return _destroy.apply(this, arguments);
}
function _destroy() {
  _destroy = _asyncToGenerator( regenerator.mark(function _callee(value) {
    var destroyEvent;
    return regenerator.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            destroyEvent = new CustomEvent(KEEP_COMPONENT_DESTROY, {
              detail: value
            });
            window.dispatchEvent(destroyEvent);
          case 2:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _destroy.apply(this, arguments);
}

var Vue;
var index = {
  install: function install(app, router) {
    withRouter(router);
    app.component('KeepRouterView', KeepRouterView);
    Vue = app;
    var keepRouter = {
      destroy: destroy
    };
    if (Number(app.version.slice(0, 1)) < 3) {
      app.prototype.$keepRouter = keepRouter;
    } else {
      app.config.globalProperties.$keepRouter = keepRouter;
    }
  }
};

export { KeepRouterView, Vue, index as default, destroy, withRouter };
