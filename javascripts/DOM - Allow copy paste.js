"use strict";
var e = document.getElementsByTagName("*");
var i;
for (i = 0; i < e.length; i += 1) {
    if (e[i].onCopy) {
        e[i].onCopy = null;
    }
    if (e[i].onPaste) {
        e[i].onPaste = null;
    }
}
