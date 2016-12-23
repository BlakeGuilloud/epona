export function localSet(key, value) {
  return localStorage.setItem(key, value);
}

export function localGet(key) {
  return localStorage.getItem(key);
}

export function localDelete(key) {
  return localStorage.removeItem(key);
}

export function localClear() {
  return localStorage.clear();
}
