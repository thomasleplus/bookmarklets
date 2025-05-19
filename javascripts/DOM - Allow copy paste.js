"use strict";
var e;
for (e in document.getElementsByTagName("*")) {
    if (e.onCopy) {
        e.onCopy = null;
    }
    if (e.onPaste) {
        e.onPaste = null;
    }
}
