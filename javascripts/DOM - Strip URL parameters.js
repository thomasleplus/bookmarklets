const url1 = location.href;
const url2 = window.location.origin + window.location.pathname;
if (url1 !== url2) {
  location.href = url2;
}
