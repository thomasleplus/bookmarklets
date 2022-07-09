"use strict";
let all = document.getElementsByTagName("*");
let i;
let max;
for (i = 0, max = all.length; i < max; i += 1) {
    if (all[i].disabled) {
        all[i].disabled = 'false';
    }
}
