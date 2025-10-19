"use strict";
const e = document.getElementsByTagName("*");
let i;
for (i = 0; i < e.length; i += 1) {
  if (e[i].autocomplete) {
    e[i].autocomplete = "on";
  }
}
