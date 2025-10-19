let msg = "";
const links = document.getElementsByTagName("link");
let i, link;
for (i = 0; i < links.length; i += 1) {
  link = links[i];
  if (
    link.rel === "alternate" &&
    (link.type.indexOf("rss") !== -1 ||
      link.type.indexOf("atom") !== -1 ||
      link.type.indexOf("feed") !== -1)
  ) {
    msg += link.href + "\n";
  }
}
if (msg.length > 0) {
  window.alert(msg);
}
