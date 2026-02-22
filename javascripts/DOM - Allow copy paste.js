const blockedEvents = ['copy', 'paste', 'cut', 'selectstart', 'contextmenu', 'dragstart', 'select'];
const _addEventListener = EventTarget.prototype.addEventListener;
EventTarget.prototype.addEventListener = function(type, fn, options) {
  if (blockedEvents.includes(type)) return;
  _addEventListener.call(this, type, fn, options);
};
document.querySelectorAll('*').forEach(el => {
  const clone = el.cloneNode(true);
  el.parentNode && el.parentNode.replaceChild(clone, el);
  blockedEvents.forEach(evt => {
    clone.removeAttribute('on' + evt);
    clone[`on${evt}`] = null;
  });
});
blockedEvents.forEach(evt => {
  document.addEventListener(evt, e => e.stopImmediatePropagation(), true);
  document[`on${evt}`] = null;
});
const style = document.createElement('style');
style.textContent = `
  * {
    -webkit-user-select: text !important;
    -moz-user-select: text !important;
    -ms-user-select: text !important;
    user-select: text !important;
    pointer-events: auto !important;
  }
`;
document.head.appendChild(style);
const _dispatchEvent = EventTarget.prototype.dispatchEvent;
EventTarget.prototype.dispatchEvent = function(e) {
  if (blockedEvents.includes(e.type) && e.cancelable) {
    Object.defineProperty(e, 'defaultPrevented', { get: () => false });
  }
  return _dispatchEvent.call(this, e);
};
