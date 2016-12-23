import { defaultHeaders } from './defaults';

export default function put(requestObject) {
  const request = new Request(body.route, {
  	method: 'PUT',
    mode: requestObject.mode || 'cors',
    body: JSON.stringify(requestObject.body),
  	redirect: requestObject.redirect || 'follow',
  	headers: new Headers(requestObject.headers || defaultHeaders),
  });

  return fetch(request).then(blob => blob.json()).catch(err => err);
}
