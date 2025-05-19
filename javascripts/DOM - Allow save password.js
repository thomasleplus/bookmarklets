"use strict";
var e;
for (e in document.getElementsByTagName("*")) {
    if (e.autocomplete) {
        e.autocomplete = 'on';
    }
}
