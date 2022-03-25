import { resolveComponent, openBlock, createBlock, withCtx, KeepAlive, resolveDynamicComponent } from 'vue';

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

var runtime = {exports: {}};

(function (module) {
var runtime = (function (exports) {
  var Op = Object.prototype;
  var hasOwn = Op.hasOwnProperty;
  var undefined$1;
  var $Symbol = typeof Symbol === "function" ? Symbol : {};
  var iteratorSymbol = $Symbol.iterator || "@@iterator";
  var asyncIteratorSymbol = $Symbol.asyncIterator || "@@asyncIterator";
  var toStringTagSymbol = $Symbol.toStringTag || "@@toStringTag";
  function define(obj, key, value) {
    Object.defineProperty(obj, key, {
      value: value,
      enumerable: true,
      configurable: true,
      writable: true
    });
    return obj[key];
  }
  try {
    define({}, "");
  } catch (err) {
    define = function(obj, key, value) {
      return obj[key] = value;
    };
  }
  function wrap(innerFn, outerFn, self, tryLocsList) {
    var protoGenerator = outerFn && outerFn.prototype instanceof Generator ? outerFn : Generator;
    var generator = Object.create(protoGenerator.prototype);
    var context = new Context(tryLocsList || []);
    generator._invoke = makeInvokeMethod(innerFn, self, context);
    return generator;
  }
  exports.wrap = wrap;
  function tryCatch(fn, obj, arg) {
    try {
      return { type: "normal", arg: fn.call(obj, arg) };
    } catch (err) {
      return { type: "throw", arg: err };
    }
  }
  var GenStateSuspendedStart = "suspendedStart";
  var GenStateSuspendedYield = "suspendedYield";
  var GenStateExecuting = "executing";
  var GenStateCompleted = "completed";
  var ContinueSentinel = {};
  function Generator() {}
  function GeneratorFunction() {}
  function GeneratorFunctionPrototype() {}
  var IteratorPrototype = {};
  define(IteratorPrototype, iteratorSymbol, function () {
    return this;
  });
  var getProto = Object.getPrototypeOf;
  var NativeIteratorPrototype = getProto && getProto(getProto(values([])));
  if (NativeIteratorPrototype &&
      NativeIteratorPrototype !== Op &&
      hasOwn.call(NativeIteratorPrototype, iteratorSymbol)) {
    IteratorPrototype = NativeIteratorPrototype;
  }
  var Gp = GeneratorFunctionPrototype.prototype =
    Generator.prototype = Object.create(IteratorPrototype);
  GeneratorFunction.prototype = GeneratorFunctionPrototype;
  define(Gp, "constructor", GeneratorFunctionPrototype);
  define(GeneratorFunctionPrototype, "constructor", GeneratorFunction);
  GeneratorFunction.displayName = define(
    GeneratorFunctionPrototype,
    toStringTagSymbol,
    "GeneratorFunction"
  );
  function defineIteratorMethods(prototype) {
    ["next", "throw", "return"].forEach(function(method) {
      define(prototype, method, function(arg) {
        return this._invoke(method, arg);
      });
    });
  }
  exports.isGeneratorFunction = function(genFun) {
    var ctor = typeof genFun === "function" && genFun.constructor;
    return ctor
      ? ctor === GeneratorFunction ||
        (ctor.displayName || ctor.name) === "GeneratorFunction"
      : false;
  };
  exports.mark = function(genFun) {
    if (Object.setPrototypeOf) {
      Object.setPrototypeOf(genFun, GeneratorFunctionPrototype);
    } else {
      genFun.__proto__ = GeneratorFunctionPrototype;
      define(genFun, toStringTagSymbol, "GeneratorFunction");
    }
    genFun.prototype = Object.create(Gp);
    return genFun;
  };
  exports.awrap = function(arg) {
    return { __await: arg };
  };
  function AsyncIterator(generator, PromiseImpl) {
    function invoke(method, arg, resolve, reject) {
      var record = tryCatch(generator[method], generator, arg);
      if (record.type === "throw") {
        reject(record.arg);
      } else {
        var result = record.arg;
        var value = result.value;
        if (value &&
            typeof value === "object" &&
            hasOwn.call(value, "__await")) {
          return PromiseImpl.resolve(value.__await).then(function(value) {
            invoke("next", value, resolve, reject);
          }, function(err) {
            invoke("throw", err, resolve, reject);
          });
        }
        return PromiseImpl.resolve(value).then(function(unwrapped) {
          result.value = unwrapped;
          resolve(result);
        }, function(error) {
          return invoke("throw", error, resolve, reject);
        });
      }
    }
    var previousPromise;
    function enqueue(method, arg) {
      function callInvokeWithMethodAndArg() {
        return new PromiseImpl(function(resolve, reject) {
          invoke(method, arg, resolve, reject);
        });
      }
      return previousPromise =
        previousPromise ? previousPromise.then(
          callInvokeWithMethodAndArg,
          callInvokeWithMethodAndArg
        ) : callInvokeWithMethodAndArg();
    }
    this._invoke = enqueue;
  }
  defineIteratorMethods(AsyncIterator.prototype);
  define(AsyncIterator.prototype, asyncIteratorSymbol, function () {
    return this;
  });
  exports.AsyncIterator = AsyncIterator;
  exports.async = function(innerFn, outerFn, self, tryLocsList, PromiseImpl) {
    if (PromiseImpl === void 0) PromiseImpl = Promise;
    var iter = new AsyncIterator(
      wrap(innerFn, outerFn, self, tryLocsList),
      PromiseImpl
    );
    return exports.isGeneratorFunction(outerFn)
      ? iter
      : iter.next().then(function(result) {
          return result.done ? result.value : iter.next();
        });
  };
  function makeInvokeMethod(innerFn, self, context) {
    var state = GenStateSuspendedStart;
    return function invoke(method, arg) {
      if (state === GenStateExecuting) {
        throw new Error("Generator is already running");
      }
      if (state === GenStateCompleted) {
        if (method === "throw") {
          throw arg;
        }
        return doneResult();
      }
      context.method = method;
      context.arg = arg;
      while (true) {
        var delegate = context.delegate;
        if (delegate) {
          var delegateResult = maybeInvokeDelegate(delegate, context);
          if (delegateResult) {
            if (delegateResult === ContinueSentinel) continue;
            return delegateResult;
          }
        }
        if (context.method === "next") {
          context.sent = context._sent = context.arg;
        } else if (context.method === "throw") {
          if (state === GenStateSuspendedStart) {
            state = GenStateCompleted;
            throw context.arg;
          }
          context.dispatchException(context.arg);
        } else if (context.method === "return") {
          context.abrupt("return", context.arg);
        }
        state = GenStateExecuting;
        var record = tryCatch(innerFn, self, context);
        if (record.type === "normal") {
          state = context.done
            ? GenStateCompleted
            : GenStateSuspendedYield;
          if (record.arg === ContinueSentinel) {
            continue;
          }
          return {
            value: record.arg,
            done: context.done
          };
        } else if (record.type === "throw") {
          state = GenStateCompleted;
          context.method = "throw";
          context.arg = record.arg;
        }
      }
    };
  }
  function maybeInvokeDelegate(delegate, context) {
    var method = delegate.iterator[context.method];
    if (method === undefined$1) {
      context.delegate = null;
      if (context.method === "throw") {
        if (delegate.iterator["return"]) {
          context.method = "return";
          context.arg = undefined$1;
          maybeInvokeDelegate(delegate, context);
          if (context.method === "throw") {
            return ContinueSentinel;
          }
        }
        context.method = "throw";
        context.arg = new TypeError(
          "The iterator does not provide a 'throw' method");
      }
      return ContinueSentinel;
    }
    var record = tryCatch(method, delegate.iterator, context.arg);
    if (record.type === "throw") {
      context.method = "throw";
      context.arg = record.arg;
      context.delegate = null;
      return ContinueSentinel;
    }
    var info = record.arg;
    if (! info) {
      context.method = "throw";
      context.arg = new TypeError("iterator result is not an object");
      context.delegate = null;
      return ContinueSentinel;
    }
    if (info.done) {
      context[delegate.resultName] = info.value;
      context.next = delegate.nextLoc;
      if (context.method !== "return") {
        context.method = "next";
        context.arg = undefined$1;
      }
    } else {
      return info;
    }
    context.delegate = null;
    return ContinueSentinel;
  }
  defineIteratorMethods(Gp);
  define(Gp, toStringTagSymbol, "Generator");
  define(Gp, iteratorSymbol, function() {
    return this;
  });
  define(Gp, "toString", function() {
    return "[object Generator]";
  });
  function pushTryEntry(locs) {
    var entry = { tryLoc: locs[0] };
    if (1 in locs) {
      entry.catchLoc = locs[1];
    }
    if (2 in locs) {
      entry.finallyLoc = locs[2];
      entry.afterLoc = locs[3];
    }
    this.tryEntries.push(entry);
  }
  function resetTryEntry(entry) {
    var record = entry.completion || {};
    record.type = "normal";
    delete record.arg;
    entry.completion = record;
  }
  function Context(tryLocsList) {
    this.tryEntries = [{ tryLoc: "root" }];
    tryLocsList.forEach(pushTryEntry, this);
    this.reset(true);
  }
  exports.keys = function(object) {
    var keys = [];
    for (var key in object) {
      keys.push(key);
    }
    keys.reverse();
    return function next() {
      while (keys.length) {
        var key = keys.pop();
        if (key in object) {
          next.value = key;
          next.done = false;
          return next;
        }
      }
      next.done = true;
      return next;
    };
  };
  function values(iterable) {
    if (iterable) {
      var iteratorMethod = iterable[iteratorSymbol];
      if (iteratorMethod) {
        return iteratorMethod.call(iterable);
      }
      if (typeof iterable.next === "function") {
        return iterable;
      }
      if (!isNaN(iterable.length)) {
        var i = -1, next = function next() {
          while (++i < iterable.length) {
            if (hasOwn.call(iterable, i)) {
              next.value = iterable[i];
              next.done = false;
              return next;
            }
          }
          next.value = undefined$1;
          next.done = true;
          return next;
        };
        return next.next = next;
      }
    }
    return { next: doneResult };
  }
  exports.values = values;
  function doneResult() {
    return { value: undefined$1, done: true };
  }
  Context.prototype = {
    constructor: Context,
    reset: function(skipTempReset) {
      this.prev = 0;
      this.next = 0;
      this.sent = this._sent = undefined$1;
      this.done = false;
      this.delegate = null;
      this.method = "next";
      this.arg = undefined$1;
      this.tryEntries.forEach(resetTryEntry);
      if (!skipTempReset) {
        for (var name in this) {
          if (name.charAt(0) === "t" &&
              hasOwn.call(this, name) &&
              !isNaN(+name.slice(1))) {
            this[name] = undefined$1;
          }
        }
      }
    },
    stop: function() {
      this.done = true;
      var rootEntry = this.tryEntries[0];
      var rootRecord = rootEntry.completion;
      if (rootRecord.type === "throw") {
        throw rootRecord.arg;
      }
      return this.rval;
    },
    dispatchException: function(exception) {
      if (this.done) {
        throw exception;
      }
      var context = this;
      function handle(loc, caught) {
        record.type = "throw";
        record.arg = exception;
        context.next = loc;
        if (caught) {
          context.method = "next";
          context.arg = undefined$1;
        }
        return !! caught;
      }
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        var record = entry.completion;
        if (entry.tryLoc === "root") {
          return handle("end");
        }
        if (entry.tryLoc <= this.prev) {
          var hasCatch = hasOwn.call(entry, "catchLoc");
          var hasFinally = hasOwn.call(entry, "finallyLoc");
          if (hasCatch && hasFinally) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            } else if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else if (hasCatch) {
            if (this.prev < entry.catchLoc) {
              return handle(entry.catchLoc, true);
            }
          } else if (hasFinally) {
            if (this.prev < entry.finallyLoc) {
              return handle(entry.finallyLoc);
            }
          } else {
            throw new Error("try statement without catch or finally");
          }
        }
      }
    },
    abrupt: function(type, arg) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc <= this.prev &&
            hasOwn.call(entry, "finallyLoc") &&
            this.prev < entry.finallyLoc) {
          var finallyEntry = entry;
          break;
        }
      }
      if (finallyEntry &&
          (type === "break" ||
           type === "continue") &&
          finallyEntry.tryLoc <= arg &&
          arg <= finallyEntry.finallyLoc) {
        finallyEntry = null;
      }
      var record = finallyEntry ? finallyEntry.completion : {};
      record.type = type;
      record.arg = arg;
      if (finallyEntry) {
        this.method = "next";
        this.next = finallyEntry.finallyLoc;
        return ContinueSentinel;
      }
      return this.complete(record);
    },
    complete: function(record, afterLoc) {
      if (record.type === "throw") {
        throw record.arg;
      }
      if (record.type === "break" ||
          record.type === "continue") {
        this.next = record.arg;
      } else if (record.type === "return") {
        this.rval = this.arg = record.arg;
        this.method = "return";
        this.next = "end";
      } else if (record.type === "normal" && afterLoc) {
        this.next = afterLoc;
      }
      return ContinueSentinel;
    },
    finish: function(finallyLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.finallyLoc === finallyLoc) {
          this.complete(entry.completion, entry.afterLoc);
          resetTryEntry(entry);
          return ContinueSentinel;
        }
      }
    },
    "catch": function(tryLoc) {
      for (var i = this.tryEntries.length - 1; i >= 0; --i) {
        var entry = this.tryEntries[i];
        if (entry.tryLoc === tryLoc) {
          var record = entry.completion;
          if (record.type === "throw") {
            var thrown = record.arg;
            resetTryEntry(entry);
          }
          return thrown;
        }
      }
      throw new Error("illegal catch attempt");
    },
    delegateYield: function(iterable, resultName, nextLoc) {
      this.delegate = {
        iterator: values(iterable),
        resultName: resultName,
        nextLoc: nextLoc
      };
      if (this.method === "next") {
        this.arg = undefined$1;
      }
      return ContinueSentinel;
    }
  };
  return exports;
}(
  module.exports 
));
try {
  regeneratorRuntime = runtime;
} catch (accidentalStrictMode) {
  if (typeof globalThis === "object") {
    globalThis.regeneratorRuntime = runtime;
  } else {
    Function("r", "regeneratorRuntime = r")(runtime);
  }
}
}(runtime));

var regenerator = runtime.exports;

var KEEP_BEFORE_ROUTE_CHANGE = 'KEEP_BEFORE_ROUTE_CHANGE';
var KEEP_ROUTE_CHANGE = 'KEEP_ROUTE_CHANGE';
var KEEP_COMPONENT_DESTROY = 'KEEP_COMPONENT_DESTROY';
var RE_LAUNCH = 'reLaunch';
var DESTROY_ALL = 'ALL';

function resetComponentsName(router, isChildren) {
  var routes = isChildren ? router : router.getRoutes();
  routes.forEach(function (route) {
    var _route$components, _route$children;
    if (!(route !== null && route !== void 0 && (_route$components = route.components) !== null && _route$components !== void 0 && _route$components.default)) return;
    if (((_route$children = route.children) === null || _route$children === void 0 ? void 0 : _route$children.length) > 0) {
      resetComponentsName(route.children, true);
    }
    if (typeof route.components.default === 'function') {
      var originDefault = route.components.default;
      return route.components.default = _asyncToGenerator( regenerator.mark(function _callee() {
        var component;
        return regenerator.wrap(function _callee$(_context) {
          while (1) {
            switch (_context.prev = _context.next) {
              case 0:
                _context.next = 2;
                return originDefault();
              case 2:
                component = _context.sent;
                component.default.name = route.name;
                return _context.abrupt("return", component);
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
function withRouter(router) {
  resetComponentsName(router);
  var _getBaseOptions = getBaseOptions(),
      enhanceList = _getBaseOptions.enhanceList,
      obj = _getBaseOptions.obj,
      options = _getBaseOptions.options,
      routeTypeEvent = _getBaseOptions.routeTypeEvent,
      beforeRouteTypeEvent = _getBaseOptions.beforeRouteTypeEvent;
  router.reLaunch = function (to) {
    return router.replace(to);
  };
  enhanceList.forEach(function (key) {
    obj[key] = router[key];
    router[key] = function (to) {
      options.detail.type = key;
      options.detail.destroy = to ? to.destroy : null;
      window.dispatchEvent(beforeRouteTypeEvent);
      window.dispatchEvent(routeTypeEvent);
      return obj[key](to);
    };
  });
}

function render(_ctx, _cache, $props, $setup, $data) {
  var _component_router_view = resolveComponent('router-view');
  return openBlock(), createBlock(_component_router_view, {
    key: 0
  }, {
    default: withCtx(function (_ref) {
      var Component = _ref.Component;
      return [(openBlock(), createBlock(KeepAlive, {
        include: $data.includeList,
        max: $props.max,
        exclude: $props.exclude
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
      var detail = params.detail;
      if (detail.type === RE_LAUNCH || detail.destroy === DESTROY_ALL) {
        _this.includeList = [];
      }
      _this.handelDestroy(detail.destroy);
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

var KeepRouterView = {
  name: 'KeepRouteView',
  render: render,
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
      includeList: []
    };
  },
  created: function created() {
    this.isForward = false;
    this.addBeforeRouteChangeEvent();
    this.addRouteChangeEvent();
    this.addComponentDestroyEvent();
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

function destroy(value) {
  var destroyEvent = new CustomEvent(KEEP_COMPONENT_DESTROY, {
    detail: value
  });
  window.dispatchEvent(destroyEvent);
}

var index = {
  install: function install(app, router) {
    withRouter(router);
    app.component('KeepRouterView', KeepRouterView);
    app.config.globalProperties.$keepRouter = {
      destroy: destroy
    };
  }
};

export { KeepRouterView, index as default, destroy, withRouter };
