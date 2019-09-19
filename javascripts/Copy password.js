if (document.hasFocus()) {
  if (document.activeElement.value) {
    var originalActive = document.activeElement;
    var copyText = document.createTextNode(document.activeElement.value);
    copyText.select();
    copyText.setSelectionRange(0, 999);
    document.execCommand('copy');
    originalActive.select();
    return;
  }
}
window.alert('Move cursor to desired password field.');
