"use strict";
var all = document.getElementsByTagName("*");
for (var i=0, max=all.length; i < max; i++) {
  if (all[i].onCopy) {
    all[i].onCopy = null;
  }
  if (all[i].onPaste) {
    all[i].onPaste = null;
  }
}
