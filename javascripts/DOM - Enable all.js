"use strict";
var e = document.getElementsByTagName("*");
var i;
for (i = 0; i < e.length; i += 1) {
    if (e[i].disabled) {
        e[i].disabled = 'false';
    }
}
