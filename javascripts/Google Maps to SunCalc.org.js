"use strict";
var pieces = location.href.split('/');
var coordinates;
for (i = 0; i < pieces.length; i++) {
    if (pieces[i].startsWith('@')) {
	coordinates = pieces[i].substring(1);
	break;
    }
}
if (typeof coordinates === 'undefined') {
    window.alert('Current Google Maps URL does not contain coordinates.');
} else {
    const now = new Date();
    location.href = 'https://www.suncalc.org/#/' + coordinates + '/' + now.getFullYear() + '.' + (now.getMonth() + 1) + '.' + now.getDate() + '/' + now.getHours() ':' + now.getMinutes() + '/1/3';
}
