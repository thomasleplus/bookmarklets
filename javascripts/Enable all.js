"use strict";
var all = document.getElementsByTagName("*");
var i;
var max;
for (i = 0, max = all.length; i < max; i += 1) {
    if (all[i].disabled) {
        all[i].disabled = 'false';
    }
}
