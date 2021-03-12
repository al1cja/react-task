![Example](http://mohi.to/misc/87qu1pcAg1SXEPOwPNbS%20FKVcY9M6cF0r1ylodeJ8.png)

# Mohi.to React/Vue Task

Applicant's test for React/Vue coders.

## Assignment Overview

The assignment is to use React/Vue to tie existing data to create a minimal, working top movies website.

Basic data is provided, however, feel free to impress by changing and enhancing any of these parts for an even better
experience!

Your mission is to provide the React/Vue "app" that makes the parts work as described, below.
**Feel free to use any openly available library for validation, templating, styling, dependency injection, etc.**

## Assignment Criteria

We want to see how you approach and solve a problem, as well as look at code style and quality. Do take your time to do it right, rather than fast.

These parts needs all to be completed for the assignment to be complete:

### Login functionality

* Connect the login form to the /login ajax call.
* On valid username/password, transition to the movies list screen.
* On invalid username/password, provide feedback and allow to try again.

### Log out functionality

* Connect the log out button to the /logout ajax call.
* On valid log out, transition to login screen with empty input fields.

### Movies list screen

* Requires user to be logged in
* List all movies from the /movies ajax call.
* List categories from /categories ajax call.
* Provide functionality for filtering by typing.
* Provide functionality to filter by category.

### Movies details screen

* Requires user to be logged in
* Make it possible to start a trailer video.
* Provide a way to go back to the Movies list screen

### Setup mock api

```javascript
npm install -g json-server
```

```javascript
json-server --watch mock/mock-data.json --port 3001 --middlewares mock/mock-api.js
```

## API

There are four methods on the API: login, logout, movies, and categories.

### Login

Path: `/login`

Will give you user information. It is possible to login with three accounts:

```
username: barrett
password: secret

username: jasmine
password: qwerty

username: maxwell
password: 1234567
```

##### Request

```javascript
fetch('http://localhost:3001/login', {
    method: 'post',
    headers: {
    	'Accept': 'application/json',
    	'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    	username: 'barrett',
    	password: 'secret'
    })
});
```

##### Response

```javascript
{
    status: 'success', 
    player: {
        name: 'Barrett Gardner', 
        avatar: 'images/avatar/rebecka.jpg',
        event: 'God will make you fertile.'
    }
}
```

### Log out

Path: `/logout`

Use the current user's username.

##### Request

```javascript
fetch('http://localhost:3001/logout', {
    method: 'post',
    headers: {
    	'Accept': 'application/json',
    	'Content-Type': 'application/json'
    },
    body: JSON.stringify({
    	username: 'barrett'
    })
});
```

### Movies and Categories

These methods are located on paths `/movies` and `/categories`.

Please explore the response of these methods.

```javascript
fetch('http://localhost:3001/movies', {method: 'get'});
```
