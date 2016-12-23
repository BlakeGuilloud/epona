import { defaultHeaders } from './defaults';

export default function del (requestObject) {
  const request = new Request(requestObject.route, {
  	method: 'DELETE',
    mode: requestObject.mode || 'cors',
  	redirect: requestObject.redirect || 'follow',
  	headers: new Headers(defaultHeaders),
  });

  return fetch(request).then(blob => blob.json()).catch(err => err);
}
