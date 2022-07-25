---
title: Delete Media
sidebar_position: 3
---

`PHP File: wp-content/themes/maxomedia-starter-child/api/controllers/class-maxomedia-child-agency-media.php`

`PHP Method: deleteAgencyMedia`

---

### Endpoint

`POST` `/wp-json/mxm-api/v1/delete-media-item`

### POST Params

`integer: ID`

### Example request body

```json
{
    "ID" : "206",
    "agencyID" : "153"
}
```

### Example response body

```json
{
  "status": "OK",
  "id" : 123,
  "message": "Media file has been deleted"
}
```

### Headers: `X-WP-Nonce`
The rest nonce can be accessed via `window.mxmChildGlobals.wpRestNonce`

### Example request (if using the builtin MXM Request object)

```javascript
    mxmRequest.postParams = {};
    mxmRequest.endpoint = 'delete-media-item';
    mxmRequest.method = 'post';
    mxmRequest.headers['X-WP-Nonce'] = window.mxmChildGlobals.wpRestNonce
    mxmRequest.addPostParam('ID', 208);
    mxmRequest.execute((response)=> {}, (error) => {});
```
