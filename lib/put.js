'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _stringify = require('babel-runtime/core-js/json/stringify');

var _stringify2 = _interopRequireDefault(_stringify);

exports.default = put;

var _defaults = require('./defaults');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function put(requestObject) {
  var request = new Request(body.route, {
    method: 'PUT',
    mode: requestObject.mode || 'cors',
    body: (0, _stringify2.default)(requestObject.body),
    redirect: requestObject.redirect || 'follow',
    headers: new Headers(requestObject.headers || _defaults.defaultHeaders)
  });

  return fetch(request).then(function (blob) {
    return blob.json();
  }).catch(function (err) {
    return err;
  });
}