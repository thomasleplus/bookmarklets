"use strict";
var pieces = location.href.split('/');
var i;
var coordinates;
for (i = 0; i < pieces.length; i += 1) {
    if (pieces[i].startsWith('@')) {
	pieces = pieces[i].substring(1).split(',');
        coordinates = pieces[0] + ',' + pieces[1] + ',19';
        break;
    }
}
if (coordinates === undefined || coordinates === null) {
    window.alert('Current Google Maps URL does not contain coordinates.');
} else {
    var now = new Date();
    location.href = 'https://www.suncalc.org/#/' + coordinates + '/' + now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate() + '/' + now.getHours() + ':' + now.getMinutes() + '/1/3';
}
