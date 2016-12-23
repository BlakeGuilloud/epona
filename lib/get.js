'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get;

var _defaults = require('./defaults');

function get(body) {
  var request = new Request(body.route);

  return fetch(request).then(function (blob) {
    return blob.json();
  }).catch(function (err) {
    return err;
  });
}