"use strict";
var selection;
if (window.getSelection) {
    selection = window.getSelection().toString();
} else if (document.selection && document.selection.type != "Control") {
    selection = document.selection.createRange().text;
}
if (typeof selection === 'undefined') {
    window.alert('Select the desired text.');
    return;
}
selection = selection.trim();
if (selection.match(/^cve\-\d+\-\d+$/i)) {
    location.href = 'https://nvd.nist.gov/vuln/detail/' + selection;
} else if (selection.match(/^\d+\-\d+$/)) {
    location.href = 'https://nvd.nist.gov/vuln/detail/CVE-' + selection;
} else {
    window.alert('Selection is not a valid CVE number.');
}
