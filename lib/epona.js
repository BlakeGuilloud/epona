'use strict';

var _del = require('./del');

var _del2 = _interopRequireDefault(_del);

var _get = require('./get');

var _get2 = _interopRequireDefault(_get);

var _patch = require('./patch');

var _patch2 = _interopRequireDefault(_patch);

var _post = require('./post');

var _post2 = _interopRequireDefault(_post);

var _put = require('./put');

var _put2 = _interopRequireDefault(_put);

var _local = require('./local');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

module.exports = {
  get: _get2.default,
  post: _post2.default,
  put: _put2.default,
  patch: _patch2.default,
  delete: _del2.default,
  localSet: _local.localSet,
  localGet: _local.localGet,
  localDelete: _local.localDelete,
  localClear: _local.localClear
};