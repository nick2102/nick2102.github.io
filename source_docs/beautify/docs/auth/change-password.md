---
sidebar_position: 6
---

# Change Password

This is resource for changing the user password.

`User: src\entities\User\User.entity.ts`

`Controller: src\controllers\Auth\Auth.controller.ts`

`Method: changePassword`

---
### Endpoint

`PATCH` `{{url}}/auth/changePassword`

**Bearer token is required**

### Accepted Params:

`verificationToken: string` - When changing password with verification token. User can be Unauthorized.

`oldPassword: string` - User must be authorized.

`password: string`

`repeatPassword: string`

### Request Body with token

```json
{
  "verificationToken" : "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1IiwiaWF0IjoxNjU4ODg1NTM4LCJleHAiOjE2NTg4ODU1OTh9.TNGY3tMVgLZOFJIp0xOB-C2weYW54JPyhNnR1U1qPo0",
  "password": "Pa$$w0rd",
  "repeatPassword": "Pa$$w0rd"
}
```

### Request Body with authorized user

```json
{
  "oldPassword" : "Pa$$w0rd",
  "password": "Pa$$w0rd",
  "repeatPassword": "Pa$$w0rd"
}
```

### Response
`NONE`