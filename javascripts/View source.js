"use strict";
t = window.open('about:blank').document;
t.write('<!DOCTYPE html><html><head><title>Source</title></head><body></body></html>');
t.close();
t.body.appendChild(t.createElement('pre')).appendChild(t.createElement('code')).appendChild(t.createTextNode(document.documentElement.outerHTML));
