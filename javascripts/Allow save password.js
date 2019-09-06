if (document.hasFocus()) {
  document.activeElement.autocomplete = 'on';
} else {
  window.alert('Move cursor in password field.');
}
