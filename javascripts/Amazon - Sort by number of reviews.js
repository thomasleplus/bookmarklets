"use strict";
var url = new URL(location.href);
var params = new URLSearchParams(url.search);
if (!params.get("rh") && !params.get("i")) {
  window.alert(
    "Please narrow down your search to a specific department for the sort to take effect.",
  );
} else if (params.get("s") !== "review-count-rank") {
  params.set("s", "review-count-rank");
  url.search = params.toString();
  location.href = url.toString();
}
