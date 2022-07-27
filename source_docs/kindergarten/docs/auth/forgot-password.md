---
sidebar_position: 5
---

# Forgot Password

This is resource for registering verification token for password reset.

`User: src\entities\User\User.entity.ts`

`Controller: src\controllers\Auth\Auth.controller.ts`

`Method: forgotPassword`

---
### Endpoint

`POST` `{{url}}/auth/forgotPassword`

### Accepted Params:

`email: string`

### Request Body

```json
{
  "email" : "user@gmail.com"
}
```

### Response
```json
{
  "verificationToken": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjE1IiwiaWF0IjoxNjU4ODg1NTM4LCJleHAiOjE2NTg4ODU1OTh9.TNGY3tMVgLZOFJIp0xOB-C2weYW54JPyhNnR1U1qPo0"
}
```