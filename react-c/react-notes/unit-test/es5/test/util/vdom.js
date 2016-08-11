'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

exports.default = function (markup, isGobal) {

  var document = (0, _jsdom.jsdom)(markup || '\n    <html>\n    <head>\n    <meta charset="utf-8" />\n    </head>\n    <body></body>\n    </html>\n    ');

  var window = document.defaultView;
  window.navigator = {
    userAgent: 'node.js'
  };

  if (!global.window) {
    global.document = document;
    global.window = window;
    global.navigator = window.navigator;
  }

  return window;
};

var _jsdom = require('jsdom');

;