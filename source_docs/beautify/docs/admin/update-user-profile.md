---
sidebar_position: 5
---

# Update User Profile by id

This is resource for updating user profile by id.

`User: src\entities\User\User.entity.ts`

`Controller: src\controllers\Admin\Admin.controller.ts`

`Method: updateUserProfile`

---
### Endpoint

`PATCH` `{{url}}/admin/user/:id/profile`

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
```