"use strict";
var anchor, id;
var anchors = document.getElementsByTagName("a");
for (anchor in anchors) {
    id = anchor.id;
    if (id !== undefined && id.length > 0) {
        anchor.appendChild(document.createTextNode(" #" + id));
    }
}
