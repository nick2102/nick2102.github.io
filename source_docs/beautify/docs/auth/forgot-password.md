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
  "message": "Reset password details were send your email address."
}
```