---
sidebar_position: 3
---

# Create user

This is resource for creating.

`User: src\entities\User\User.entity.ts`

`Controller: src\controllers\Admin\Admin.controller.ts`

`Method: createUser`

---
### Endpoint

`POST` `{{url}}/admin/user`

### Accepted Params:

`email: string`

`password: string`

`firstName: string`

`lastName: string`

`role: string (ADMIN | EMPLOYEE | USER)`

### Request Body

```json
{
  "email": "user@gmail.com",
  "password": "Pa$$w0rd",
  "firstName": "John",
  "lastName" : "Doe",
  "role": "EMPLOYEE"
}
```

### Response
```json
{
  "id": 14,
  "email": "user@gmail.com",
  "firstName": "John",
  "lastName": "Doe",
  "role": "EMPLOYEE",
  "active": true,
  "createdAt": "2022-08-01T12:36:45.370Z",
  "updatedAt": "2022-08-01T12:44:42.629Z",
  "profile": {
    "address": null,
    "phone": null,
    "mobile": null,
    "profileImage": null,
    "createdAt": "2022-08-03T00:20:56.464Z",
    "updatedAt": "2022-08-03T00:20:56.464Z"
  }
}
```