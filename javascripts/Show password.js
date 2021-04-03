"use strict";
if (document.hasFocus()) {
    if (document.activeElement.value) {
        window.alert('Password: ' + document.activeElement.value);
    }
} else {
    window.alert('Move cursor to desired password field.');
}
