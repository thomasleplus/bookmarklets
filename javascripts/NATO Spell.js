"use strict";
var selection;
let h = {
    "0": "Zero",
    "1": "One",
    "2": "Two",
    "3": "Three",
    "4": "Four",
    "5": "Five",
    "6": "Six",
    "7": "Seven",
    "8": "Eight",
    "9": "Nine",
    "A": "Alpha",
    "B": "Bravo",
    "C": "Charlie",
    "D": "Delta",
    "E": "Echo",
    "F": "Foxtrot",
    "G": "Golf",
    "H": "Hotel",
    "I": "India",
    "J": "Juliett",
    "K": "Kilo",
    "L": "Lima",
    "M": "Mike",
    "N": "November",
    "O": "Oscar",
    "P": "Papa",
    "Q": "Quebec",
    "R": "Romeo",
    "S": "Sierra",
    "T": "Tango",
    "U": "Uniform",
    "V": "Victor",
    "W": "Whiskey",
    "X": "X-ray",
    "Y": "Yankee",
    "Z": "Zulu"
};
if (window.getSelection) {
    selection = window.getSelection().toString();
} else if (document.selection && document.selection.type !== "Control") {
    selection = document.selection.createRange().text;
}
if (selection === undefined) {
    window.alert('Select the desired text.');
} else {
    selection = selection.trim();
    var result = '';
    for (let i = 0; i < selection.length; i++) {
        var c = selection.charAt(i);
        var d = escape(c).replace(/%(..)/g, "&#x$1;");
        if (d === c) {
            d = h[c];
        }
        if (d == null) {
            var t = h[c.toUpperCase()];
            if (t == null) {
               d = "&#x" + c.codePointAt(0).toString(16).toUpperCase() + ";";
            } else {
               d = t.toLowerCase();
            }
        }
        result += d + ' ';
    }
    window.alert(result);
}
