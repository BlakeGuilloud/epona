import { defaultHeaders } from './defaults';

export default function get(body) {
  const request = new Request(body.route);

  return fetch(request).then(blob => blob.json()).catch(err => err);
}
