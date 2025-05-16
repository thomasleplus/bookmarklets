"use strict";
var selection;
if (window.getSelection) {
    selection = window.getSelection().toString();
} else if (document.selection && document.selection.type !== "Control") {
    selection = document.selection.createRange().text;
}
if (selection === undefined || selection.length === 0) {
    window.open('https://translate.google.com/?op=websites&langpair=auto%7Cauto&u=' + encodeURIComponent(location.href), '_blank').focus();
} else {
    window.open('https://translate.google.com/?op=translate&langpair=auto%7Cauto&ie=' + encodeURIComponent(document.characterSet) + '&text=' + encodeURIComponent(selection), '_blank').focus();
}
