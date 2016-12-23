## epona is a lightweight, client-side javascript library to handle basic http requests.

```
const epona = require('epona');

const requestObject = {
  route: '/api/ocarina',
  mode: 'cors',
  redirect: 'follow',
  headers: {
    'Content-Type': 'application/json',
  },
  body: {
    username: 'GanonSlayer',
    password: 'Zelda44',
    age: 16,
    gender: 'male',
  },
};

epona.get(requestObject).catch(err => err);
epona.post(requestObject).catch(err => err);
epona.patch(requestObject).catch(err => err);
epona.put(requestObject).catch(err => err);
epona.delete(requestObject).catch(err => err);
```
