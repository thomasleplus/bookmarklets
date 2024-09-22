"use strict";
var url1 = location.href;
var url2 = window.location.origin + window.location.pathname;
if (url1 !== url2) {
  location.href = url2;
}
