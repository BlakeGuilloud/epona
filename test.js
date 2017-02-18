const get = require('./lib/get');
console.log('get', get);
const test = new XMLHttpRequest();

test.open('GET', 'servup.herokuapp.com/collections/dog');
test.send();
