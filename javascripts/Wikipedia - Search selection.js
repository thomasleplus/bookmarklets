let selection;
if (window.getSelection) {
  selection = window.getSelection().toString();
} else if (document.selection && document.selection.type !== "Control") {
  selection = document.selection.createRange().text;
}
if (selection === undefined || selection.length === 0) {
  window.alert("Select the desired text to search.");
} else {
  window
    .open(
      "https://en.wikipedia.org/w/index.php?title=Special:Search&search=" +
        encodeURIComponent(selection.trim()),
      "_blank",
    )
    .focus();
}
