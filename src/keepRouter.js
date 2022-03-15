function destroy(value) {
  const destroyEvent = new CustomEvent('keep-componentDestroy', { detail: value });
  window.dispatchEvent(destroyEvent);
}

export {
  destroy
};
