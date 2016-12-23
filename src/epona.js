import del from './del';
import get from './get';
import patch from './patch';
import post from './post';
import put from './put';

import {
  localSet,
  localGet,
  localDelete,
  localClear,
} from './local';

module.exports = {
  get,
  post,
  put,
  patch,
  delete: del,
  localSet,
  localGet,
  localDelete,
  localClear,
};
