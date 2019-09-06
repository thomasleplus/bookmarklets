if (document.hasFocus()) {
  document.activeElement.onCopy = null;
  document.activeElement.onPaste = null;
} else {
  window.alert('Move cursor to desired text field.');
}
