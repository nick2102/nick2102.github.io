---
sidebar_position: 1
---

# Profile

This is resource for getting user profile.

User must be **authenticated** for this action

`User: src\entities\User\User.entity.ts`

`Profile: src\entities\Profile\Profile.entity.ts`

`Controller: src\controllers\User\User.controller.ts`

`Method: getAccount`

---
### Endpoint

`GET` `{{url}}/users/me`

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