"use strict";
var i, anchor, name;
var anchors = document.anchors;
for (i = 0; i < anchors.length; i += 1) {
    anchor = anchors[i];
    name = anchor.name;
    if (name !== undefined && name.length > 0) {
        anchor.appendChild(document.createTextNode("#" + name));
    }
}
