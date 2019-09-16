if (document.hasFocus()) {
  if (document.activeElement.autocomplete) {
    document.activeElement.autocomplete = 'on';
    return;
  }
}
window.alert('Move cursor to desired password field.');
