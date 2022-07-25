---
sidebar_position: 1
---

# Signup

This is resource for registering two types of users Employees and End users.

`User: src\entities\User\User.entity.ts`

`Controller: src\controllers\Auth\Auth.controller.ts`

`Method: register`

---
### Endpoint

`POST` `{{url}}/auth/register`

### Accepted Params:

`email: string`

`password: string`

`role: EMPLOYEE | USER (string)`

### Request Body

```json
{
    "email" : "user@gmail.com",
    "password": "Pa$$w0rd",
    "role": "EMPLOYEE"
}
```

### Response
```json
{
    "email": "user@gmail.com",
    "role": "EMPLOYEE",
    "id": 5,
    "createdAt": "2022-07-25T20:26:44.006Z",
    "updatedAt": "2022-07-25T20:26:44.006Z"
}
```