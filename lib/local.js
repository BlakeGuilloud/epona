"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports.localSet = localSet;
exports.localGet = localGet;
exports.localDelete = localDelete;
exports.localClear = localClear;
function localSet(key, value) {
  return localStorage.setItem(key, value);
}

function localGet(key) {
  return localStorage.getItem(key);
}

function localDelete(key) {
  return localStorage.removeItem(key);
}

function localClear() {
  return localStorage.clear();
}