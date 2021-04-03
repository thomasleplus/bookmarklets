"use strict";
if (document.hasFocus()) {
    if (document.activeElement.autocomplete) {
        document.activeElement.autocomplete = 'on';
    }
} else {
    window.alert('Move cursor to desired password field.');
}
