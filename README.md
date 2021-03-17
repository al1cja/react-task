# Mohi.to React Task

Applicant's test for React coders.

## Assignment Overview

The assignment is to use React to tie existing data to create a minimal, working top movies website.

## Installation and Setup Instructions

Clone down this repository. You will need node and npm installed globally on your machine.

### Instalation

```bash
npm install
```

### To Start Server:

```bash
npm start
json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js

```

## Functionalities

### Login

User have to be logged in to see movies list. It is possible to login with three accounts:
 
 ```javascript
 username: barrett
password: secret

username: jasmine
password: qwerty

username: maxwell
password: 1234567
```


### Log out

User can log out while looking through movies list.


### Movies list

User can:
* look through movies list
* filter movies by category
* serach for movie title using input

### Movies details

User can see movies details:
* cover
* story line
* link to trailer