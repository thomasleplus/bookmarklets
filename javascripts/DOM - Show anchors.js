"use strict";
var i, id;
var anchors = document.getElementsByTagName("a");
for (i = 0; i < anchors.length; i += 1) {
    id = anchors[i].id;
    if (id !== undefined && id.length > 0) {
        anchor.appendChild(document.createTextNode(" #" + id));
    }
}
