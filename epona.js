const defaultHeaders = { 'Content-Type': 'application/json' };

function get(body) {
  const request = new Request(body.route);

  return fetch(request).then(blob => blob.json());
}

function post(body) {

  const request = new Request(body.route, {
  	method: 'POST',
  	mode: body.mode || 'cors',
    body: JSON.stringify(body.body),
  	redirect: body.redirect || 'follow',
  	headers: new Headers(body.headers || defaultHeaders),
  });

  return fetch(request).then(blob => blob.json());
}

function patch(body) {
  const request = new Request(body.route, {
  	method: 'PATCH',
    mode: body.mode || 'cors',
    body: JSON.stringify(body.body),
  	redirect: body.redirect || 'follow',
  	headers: new Headers(body.headers || defaultHeaders),
  });

  return fetch(request).then(blob => blob.json());
}

function put(body) {
  const request = new Request(body.route, {
  	method: 'PUT',
    mode: body.mode || 'cors',
    body: JSON.stringify(body.body),
  	redirect: body.redirect || 'follow',
  	headers: new Headers(body.headers || defaultHeaders),
  });

  return fetch(request).then(blob => blob.json());
}

module.exports = {
  get: get,
  post: post,
  put: put,
  patch: patch,
};
