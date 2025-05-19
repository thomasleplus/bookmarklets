"use strict";
var e;
for (e in document.getElementsByTagName("*")) {
    if (e.disabled) {
        e.disabled = 'false';
    }
}
