# basic-jwt-auth-server

## Endpoints

register - POST https://basic-jwt-auth-server.herokuapp.com/api/auth/register
Returns a user object

Example of Post body:

```js
{
    username: "Chris Daniels",
    password: "password"
}
```


login - POST https://basic-jwt-auth-server.herokuapp.com/api/auth/login
Returns a user and a token 

Example of Post body: 

```js
{
    username: "Chris Daniels",
    password: "password"
}
```