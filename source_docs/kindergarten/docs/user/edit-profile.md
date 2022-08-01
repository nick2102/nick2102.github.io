---
sidebar_position: 3
---

# Edit Profile

This is resource for editing Profile info.

User must be **authenticated** for this action

`User: src\entities\User\User.entity.ts`

`Profile: src\entities\Profile\Profile.entity.ts`

`Controller: src\controllers\User\User.controller.ts`

`Method: updateProfile`

---
### Endpoint

`PATCH` `{{url}}/users/me/profile`

### Accepted Params:

`phone: string` - optional

`mobile: string` - optional

Address:

`street: string` - optional

`zip: number` - optional

`city: string` - optional

`country: string` - optional

### Request Body

```json
{
  "phone": "111111",
  "mobile": "222222",
  "address": {
    "street": "New Street",
    "zip": 1001,
    "city": "New city",
    "country": "New Country"
  }
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
  "updatedAt": "2022-08-01T12:36:45.405Z",
  "profile": {
    "address": {
      "street": "New Street",
      "zip": 1001,
      "city": "New city",
      "country": "New Country"
    },
    "phone": "111111",
    "mobile": "222222",
    "profileImage": null
  }
}
```