console.log('hello world');
const api = 'http://servup.herokuapp.com/collections/dog';

const myRequest = new Request(api);

fetch(myRequest)
  .then((blob) => {
    console.log('blob', blob);
    return blob.json();
  })
  .then((data) => {
    console.log('data', data);
  });
