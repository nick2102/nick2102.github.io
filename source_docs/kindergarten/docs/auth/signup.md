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
  "firstName": "John",
  "lastName": "Doe",
  "password": "Pa$$w0rd",
  "role": "EMPLOYEE"
}
```

### Response
```json
{
  "email": "user@gmail.com",
  "firstName": "John",
  "lastName": "Doe",
  "role": "EMPLOYEE",
  "verificationToken": null,
  "id": 15,
  "createdAt": "2022-07-26T22:32:16.180Z",
  "updatedAt": "2022-07-26T22:32:16.180Z"
}
```