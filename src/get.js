import { defaultHeaders } from './defaults';
import transferComplete from './transferComplete';

export default function get (requestObject) {
  const request = new XMLHttpRequest();

  request.open('GET', requestObject.route);
  request.addEventListener('load', transferComplete);

  return request.send();
}
