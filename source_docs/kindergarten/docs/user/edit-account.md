---
sidebar_position: 2
---

# Edit Account

This is resource for editing account info.

User must be **authenticated** for this action

`User: src\entities\User\User.entity.ts`

`Profile: src\entities\Profile\Profile.entity.ts`

`Controller: src\controllers\User\User.controller.ts`

`Method: editAccount`

---
### Endpoint

`PATCH` `{{url}}/users/me/account`

### Accepted Params:

`firstName: string` - optional

`lastName: string` - optional

### Request Body

```json
{
  "firstName": "New Name",
  "lastName": "New Last Name"
}
```

### Response
```json
{
  "id": 14,
  "email": "user@gmail.com",
  "firstName": "New Name",
  "lastName": "New Last Name",
  "role": "EMPLOYEE",
  "active": true,
  "createdAt": "2022-08-01T12:36:45.370Z",
  "updatedAt": "2022-08-01T12:36:45.405Z",
  "profile": {
    "address": {
      "street": "Street Name",
      "zip": 1000,
      "city": "City Name",
      "country": "Country Name"
    },
    "phone": "123456",
    "mobile": "654987",
    "profileImage": null
  }
}
```