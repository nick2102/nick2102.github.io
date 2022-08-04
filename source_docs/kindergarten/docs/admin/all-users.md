---
sidebar_position: 1
---

# Get All users

This is resource for listing all users.

`User: src\entities\User\User.entity.ts`

`Controller: src\controllers\Admin\Admin.controller.ts`

`Method: allUsers`

---
### Endpoint

`GET` `{{url}}/admin/users`

### Accepted Params:

`search: string` - search phrase

`role: string` - filter users by role

`items: integer` - Items per page

`order: string` - asc | desc

`page: integer` - current page

`orderBy: string (date | id | firstName | lastName | role | status) default is id` - order by creation date, user id, first name, last name, role or account status.

### Request Body

```json
{
  "search" : "Doe",
  "role": "ADMIN",
  "items": 10,
  "order": "asc",
  "orderBy": "firstName"
}
```

### Response
```json
{
  "itemsPerPage": 10,
  "currentPage": 1,
  "totalPages": 1,
  "recordsNumber": 2,
  "totalRecordsNumber": 2,
  "users": [
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
    },
    {
      "id": 31,
      "email": "user2@gmail.com",
      "firstName": "Jean",
      "lastName": "Doe",
      "role": "ADMIN",
      "active": true,
      "createdAt": "2022-08-02T23:59:45.199Z",
      "updatedAt": "2022-08-02T23:59:45.226Z",
      "profile": {
        "address": {},
        "phone": "223305",
        "mobile": "654321",
        "profileImage": null,
        "createdAt": "2022-08-03T00:20:56.464Z",
        "updatedAt": "2022-08-03T15:14:32.098Z"
      }
    }
  ]
}
```