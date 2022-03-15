(function (global, factory) {
  typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports, require('vue')) :
  typeof define === 'function' && define.amd ? define(['exports', 'vue'], factory) :
  (global = typeof globalThis !== 'undefined' ? globalThis : global || self, factory(global.index = {}, global.vue));
})(this, (function (exports, vue) { 'use strict';

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
    var enhanceList = ['push', 'forward', 'replace', 'reLaunch'];
    var obj = Object.create(null);
    var options = {
      detail: {}
    };
    var routeTypeEvent = new CustomEvent('keep-routeChange', options);
    return {
      enhanceList: enhanceList,
      obj: obj,
      options: options,
      routeTypeEvent: routeTypeEvent
    };
  }
  function withRouter2x(router) {
    var _getBaseOptions = getBaseOptions(),
        enhanceList = _getBaseOptions.enhanceList,
        obj = _getBaseOptions.obj,
        options = _getBaseOptions.options,
        routeTypeEvent = _getBaseOptions.routeTypeEvent;
    var historyPrototype = router.history.constructor.prototype;
    var routerPrototype = router.constructor.prototype;
    routerPrototype.reLaunch = function (to) {
      return routerPrototype.replace(to);
    };
    historyPrototype.reLaunch = function (to) {
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
      window.dispatchEvent(routeTypeEvent);
      return obj[key].call(router.history, location, onComplete, onAbort);
    }
    return router;
  }
  function withRouter3x(router) {
    var _getBaseOptions2 = getBaseOptions(),
        enhanceList = _getBaseOptions2.enhanceList,
        obj = _getBaseOptions2.obj,
        options = _getBaseOptions2.options,
        routeTypeEvent = _getBaseOptions2.routeTypeEvent;
    router.reLaunch = function (to) {
      return router.replace(to);
    };
    enhanceList.forEach(function (key) {
      obj[key] = router[key];
      router[key] = function (to) {
        options.detail.type = key;
        options.detail.destroy = to ? to.destroy : null;
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
    var _vm = this;
    var _h = _vm.$createElement;
    var _c = _vm._self._c || _h;
    return _c('keep-alive', {
      attrs: {
        include: [].concat(_vm.includeList),
        max: _vm.max,
        exclude: _vm.exclude
      }
    }, [_c('router-view')], 1);
  }
  function render3x(_ctx, _cache, $props, $setup, $data) {
    var _component_router_view = vue.resolveComponent('router-view');
    return vue.openBlock(), vue.createBlock(_component_router_view, {
      key: 0
    }, {
      default: vue.withCtx(function (_ref) {
        var Component = _ref.Component;
        return [(vue.openBlock(), vue.createBlock(vue.KeepAlive, {
          include: $data.includeList,
          max: $props.max,
          exclude: $props.exclude
        }, [(vue.openBlock(), vue.createBlock(vue.resolveDynamicComponent(Component)))], 1032, ['include', 'max', 'exclude']))];
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
    forward: function forward(name) {
      var includeList = this.includeList;
      if (includeList.includes(name)) {
        var index = includeList.indexOf(name);
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
    back: function back(name) {
      if (this.includeList.length === 1) {
        this.includeList = [name];
      }
      var index = this.includeList.indexOf(name);
      if (index >= 0) {
        this.includeList.splice(index + 1);
      }
    },
    handelDestroy: function handelDestroy(name, mode) {
      var _this = this;
      var destroy = this.destroy,
          destroyTraverse = this.destroyTraverse;
      if (typeof destroy === 'string' && destroy) {
        destroyTraverse(destroy);
      } else if (Array.isArray(destroy)) {
        destroy.forEach(function (name) {
          return destroyTraverse(name);
        });
      }
      this.$nextTick(function () {
        _this.keepComponentDestroy = null;
      });
      if (mode === 'clearSelf') return;
      this.asycnPush(name);
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
    includeKeepComponentDestroy: function includeKeepComponentDestroy(name) {
      var keepComponentDestroy = this.keepComponentDestroy;
      if (typeof keepComponentDestroy === 'string') {
        return keepComponentDestroy === name;
      } else if (Array.isArray(keepComponentDestroy)) {
        return keepComponentDestroy.includes(name);
      }
      return false;
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
    asycnPush: function asycnPush(name) {
      var _this2 = this;
      var push = function push() {
        if (_this2.includeList.includes(name)) return;
        _this2.includeList.push(name);
      };
      if (Promise) {
        Promise.resolve().then(push);
      } else {
        setTimeout(push, 0);
      }
    },
    addRouteChangeEvent: function addRouteChangeEvent() {
      var _this3 = this;
      window.addEventListener('keep-routeChange', function (params) {
        var detail = params.detail;
        if (detail.type === 'reLaunch') {
          _this3.includeList = [];
          _this3.reLaunch = true;
        }
        _this3.destroy = detail.destroy;
        _this3.isForward = true;
        setTimeout(function () {
          return _this3.isForward = false;
        }, 300);
      });
    },
    addComponentDestroyEvent: function addComponentDestroyEvent() {
      var _this4 = this;
      window.addEventListener('keep-componentDestroy', function (params) {
        var detail = params.detail;
        _this4.destroy = detail;
        _this4.keepComponentDestroy = detail;
        _this4.handelDestroy(_this4.$route.name, 'clearSelf');
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
          return ['/'];
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
        vueNext: Number(exports.Vue.version.slice(0, 3)) >= 3,
        includeList: []
      };
    },
    created: function created() {
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
        handler: function handler(to) {
          this.watchRoute(to);
        }
      }
    },
    methods: methods
  };

  function destroy(value) {
    var destroyEvent = new CustomEvent('keep-componentDestroy', {
      detail: value
    });
    window.dispatchEvent(destroyEvent);
  }

  exports.Vue = void 0;
  var index = {
    install: function install(app, router) {
      withRouter(router);
      app.component('KeepRouterView', KeepRouterView);
      exports.Vue = app;
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

  exports.KeepRouterView = KeepRouterView;
  exports["default"] = index;
  exports.withRouter = withRouter;

  Object.defineProperty(exports, '__esModule', { value: true });

}));
