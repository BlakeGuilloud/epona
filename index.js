const epona = require('./epona');
const api = 'http://servup.herokuapp.com/collections/dog';

epona.post({ route: api, body: { username: 'blake', password: 'Mclaren' } });
epona.get({ route: api, });


// const myRequest = new Request(api);
//
// fetch(myRequest)
//   .then((blob) => {
//     console.log('blob', blob);
//     return blob.json();
//   })
//   .then((data) => {
//     console.log('data', data);
//   });
//
// const body = {
//   username: 'blake',
//   password: 'Mclaren',
// };
//
// const config = {
//   method: 'POST',
//   mode: 'cors',
//   body,
//   cache: 'default',
// };
//
// const postRequest = new Request(api, config);
//
// fetch(postRequest)
//   .then((blob) => {
//     console.log('blob', blob);
//     return blob.json();
//   })
//   .then((data) => {
//     console.log('data', data);
//   });
