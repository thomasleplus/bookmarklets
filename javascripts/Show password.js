"use strict";
if (document.hasFocus()) {
    if (document.activeElement.value) {
        window.alert('Password: ' + document.activeElement.value);
        return;
    }
}
window.alert('Move cursor to desired password field.');
