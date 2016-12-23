import { defaultHeaders } from './defaults';
export default function get(requestObject) {
  const request = new Request(requestObject.route);

  return fetch(request).then(blob => blob.json()).catch(err => err);
}
