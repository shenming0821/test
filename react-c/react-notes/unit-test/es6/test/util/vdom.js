import {jsdom} from 'jsdom';

export default function (markup, isGobal) {

 let document = jsdom(markup || `
    <html>
    <head>
    <meta charset="utf-8" />
    </head>
    <body></body>
    </html>
    `);

 let window = document.defaultView;
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