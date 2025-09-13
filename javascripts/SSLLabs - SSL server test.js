"use strict";
window
  .open(
    "https://www.ssllabs.com/ssltest/analyze.html?d=" +
      encodeURIComponent(location.hostname),
    "_blank",
  )
  .focus();
