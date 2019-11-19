# basic-jwt-auth-server

## Endpoints

**Register** - POST https://basic-jwt-auth-server.herokuapp.com/api/auth/register

Returns a user object

Example of Post body:

```js
{
    username: "Chris Daniels",
    password: "password"
}
```

<hr>


**Login** - POST https://basic-jwt-auth-server.herokuapp.com/api/auth/login

Returns a user and a token 

Example of Post body: 

```js
{
    username: "Chris Daniels",
    password: "password"
}
```

<hr>

**All Users** - GET https://basic-jwt-auth-server.herokuapp.com/api/users

Returns an array of all users 

You must have a token to access this endpoint. Acquire a token by logging in.
