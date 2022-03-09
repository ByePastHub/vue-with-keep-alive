import { resolveComponent, openBlock, createBlock, withCtx, KeepAlive, resolveDynamicComponent } from 'vue';

export function render2x() {
  const _vm = this;
  const _h = _vm.$createElement;
  const _c = _vm._self._c || _h;
  return _c(
    'keep-alive',
    {
      attrs: {
        include: [].concat(_vm.includeList),
        max: _vm.max,
        exclude: _vm.exclude
      },
    },
    [_c('router-view')],
    1
  );
}

export function render3x(_ctx, _cache, $props, $setup, $data) {
  const _component_router_view = resolveComponent('router-view');

  return (openBlock(), createBlock(_component_router_view, { key: 0 }, {
    default: withCtx(function(_ref) {
      const Component = _ref.Component;
      return [(openBlock(), createBlock(KeepAlive, {
        include: $data.includeList,
        max: $props.max,
        exclude: $props.exclude
      }, [(openBlock(), createBlock(resolveDynamicComponent(Component)))], 1032, ['include', 'max', 'exclude']))];
    }),
    _: 1
  }));
}
