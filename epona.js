console.log('epona was loaded');

function get(body) {
  console.log('the spread body', body);
  const request = new Request(body.route);

  const returnVal = fetch(request)
    .then(blob => blob.json())
    .then(data => data);
  console.log('return val in get', returnVal);
  return returnVal;
}

function post(body) {
  console.log('the posted spread body', body);
  const config = {
     method: 'POST',
     mode: 'cors',
     body: body.body,
     cache: 'default',
  };

  const request = new Request(body.route, config);

  const returnVal = fetch(request)
    .then(blob => blob.json())
    .then(data => data);

    console.log('returnVal in post', returnVal);
  return returnVal;
}

module.exports = {
  get: get,
  post: post,
};
