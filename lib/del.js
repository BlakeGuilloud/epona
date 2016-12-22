'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.del = del;

var _defaults = require('./defaults');

function del(requestObject) {
  var request = new Request(requestObject.route, {
    method: 'DELETE',
    mode: requestObject.mode || 'cors',
    redirect: requestObject.redirect || 'follow',
    headers: new Headers(_defaults.defaultHeaders)
  });

  return fetch(request).then(function (blob) {
    return blob.json();
  }).catch(function (err) {
    return err;
  });
}