"use strict";
var anchors = document.anchors;
for (i=0; i < anchors.length; ++i) {
    var anchor = anchors[i];
    var name = anchor.name;
    if (name !== undefined && name.length > 0) {
	anchor.appendChild(document.createTextNode("#" + name));
    }
}
