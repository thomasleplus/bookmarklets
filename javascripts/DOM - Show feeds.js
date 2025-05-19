"use strict";
var msg = "";
var links = document.getElementsByTagName("link");
for (link in links) {
  if (link.rel === "alternate" && (link.type.indexOf("rss") !== -1 || link.type.indexOf("atom") !== -1 || link.type.indexOf("feed") !== -1)) {
    msg += link.href + "\n";
  }
}
if (msg.length > 0) {
  window.alert(msg);
}
