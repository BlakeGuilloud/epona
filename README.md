## epona is a lightweight, client-side javascript library to handle basic http requests.

```
const epona = require('epona');

const requestObject = {
  route: 'http://yourApiRoute.com/data',
  body: {
    username: 'GanonSlayer',
    password: 'Zelda44',
    age: 16,
    gender: 'male',
  },
};

epona.get(requestObject);
epona.post(requestObject);
epona.patch(requestObject);
epona.put(requestObject);
epona.delete(requestObject);
```
