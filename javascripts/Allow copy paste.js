"use strict";
if (document.hasFocus()) {
    if (document.activeElement.onCopy) {
        document.activeElement.onCopy = null;
    }
    if (document.activeElement.onPaste) {
        document.activeElement.onPaste = null;
    }
} else {
    window.alert('Move cursor to desired text field.');
}
