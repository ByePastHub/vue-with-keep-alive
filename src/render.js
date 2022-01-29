export function render() {
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
