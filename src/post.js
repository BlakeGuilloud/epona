import { defaultHeaders } from './defaults';

export default function post(requestObject) {
  const request = new Request(requestObject.route, {
  	method: 'POST',
  	mode: requestObject.mode || 'cors',
    body: JSON.stringify(requestObject.body),
  	redirect: requestObject.redirect || 'follow',
  	headers: new Headers(requestObject.headers || defaultHeaders),
  });

  return fetch(request).then(blob => blob.json()).catch(err => err);
}
