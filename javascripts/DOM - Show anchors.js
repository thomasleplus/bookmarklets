let i, anchor, id;
const anchors = document.getElementsByTagName("a");
for (i = 0; i < anchors.length; i += 1) {
  anchor = anchors[i];
  id = anchor.id;
  if (id !== undefined && id.length > 0) {
    anchor.appendChild(document.createTextNode(" #" + id));
  }
}
