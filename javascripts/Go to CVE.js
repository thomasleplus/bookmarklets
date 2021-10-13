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
var url;
if (selection.match(/^cve\-\d+\-\d+$/i)) {
    url = 'https://nvd.nist.gov/vuln/detail/' + selection;
} else if (selection.match(/^\d+\-\d+$/)) {
    url = 'https://nvd.nist.gov/vuln/detail/CVE-' + selection;
} else {
    window.alert('Selection is not a valid CVE number.');
    return;
}
window.open(url, '_blank').focus();
