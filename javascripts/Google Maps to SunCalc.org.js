"use strict";
var pieces = location.href.split('/');
var i, piece, coordinates;
for (i = 0; i < pieces.length; i += 1) {
    piece = pieces[i];
    if (piece.startsWith('@')) {
        piece = piece.substring(1).split(',');
        coordinates = piece[0] + ',' + piece[1] + ',19';
        break;
    }
}
if (coordinates === undefined || coordinates === null) {
    window.alert('Current Google Maps URL does not contain coordinates.');
} else {
    var now = new Date();
    window.open('https://www.suncalc.org/#/' + coordinates + '/' + now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate() + '/' + now.getHours() + ':' + now.getMinutes() + '/1/3', '_blank').focus();
}
