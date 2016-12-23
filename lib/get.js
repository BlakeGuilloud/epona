'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.default = get;

var _defaults = require('./defaults');

function get(requestObject) {
  var request = new Request(requestObject.route);

  return fetch(request).then(function (blob) {
    return blob.json();
  }).catch(function (err) {
    return err;
  });
}