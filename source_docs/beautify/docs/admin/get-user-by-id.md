---
sidebar_position: 2
---

# Get User by id

This is resource for getting user by id.

`User: src\entities\User\User.entity.ts`

`Controller: src\controllers\Admin\Admin.controller.ts`

`Method: getUser`

---
### Endpoint

`GET` `{{url}}/admin/user/:id`

### Accepted Params:

`NONE`

### Request Body

```json
{}
```

### Response
```json
{
  "id": 14,
  "email": "user@gmail.com",
  "firstName": "John",
  "lastName": "Doe",
  "role": "ADMIN",
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