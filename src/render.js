import { resolveComponent, openBlock, createBlock, withCtx, KeepAlive, resolveDynamicComponent, createVNode } from 'vue';

export function render2x(_vm) {
  var _vm = this;
  var _h = _vm.$createElement;
  var _c = _vm._self._c || _h;
  return _c(
    "keep-alive",
    {
      attrs: {
        include: [].concat(_vm.includeList),
        max: _vm.max,
        exclude: _vm.exclude,
      },
    },
    [_c("router-view")],
    1
  );
}

export function render3x(_ctx, _cache, $props, $setup, $data) {
  var _component_router_view = resolveComponent("router-view");

  return (openBlock(), createBlock(_component_router_view, { key: 0}, {
    default: withCtx(function (_ref) {
      var Component = _ref.Component;
      return [(openBlock(), createBlock(KeepAlive, {
        include: $data.includeList,
        max: $props.max,
        exclude: $props.exclude
      }, [(openBlock(), createBlock(resolveDynamicComponent(Component)))], 1032, ["include", "max", "exclude"]))];
    }),
    _: 1
  }));
}
