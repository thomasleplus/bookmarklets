"use strict";
var all = document.getElementsByTagName("*");
var i;
var max;
for (i = 0, max = all.length; i < max; i++) {
    if (all[i].autocomplete) {
        all[i].autocomplete = 'on';
    }
}
