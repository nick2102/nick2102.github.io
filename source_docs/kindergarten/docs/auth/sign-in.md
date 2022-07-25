---
sidebar_position: 2
---

# Sign in

This is resource for signing in into the application.

`User: src\entities\User\User.entity.ts`

`Controller: src\controllers\Auth\Auth.controller.ts`

`Method: signIn`

---
### Endpoint

`POST` `{{url}}/auth/signin`

### Accepted Params:

`email: string`

`password: string`

### Request Body

```json
{
    "email" : "user@gmail.com",
    "password": "Pa$$w0rd"
}
```

### Response
```json
{
  "user": {
    "id": 1,
    "email": "user1@gmail.com",
    "role": "EMPLOYEE",
    "createdAt": "2022-07-24T23:56:52.665Z",
    "updatedAt": "2022-07-24T23:56:52.665Z"
  },
  "token": {
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjEiLCJpYXQiOjE2NTg3ODEwNTZ9.xR0n2IMqYccpIbm9V_TkaRmQ9c1r59eXlCrUS7DG7wA",
    "id": 17,
    "createdAt": "2022-07-25T20:30:56.523Z"
  }
}
```