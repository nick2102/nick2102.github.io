---
title: Reorder Projects
sidebar_position: 4
---

`PHP File: wp-content/themes/maxomedia-starter-child/api/controllers/class-maxomedia-child-agency-projects.php`

`PHP Method: reorderProjects`

---

### Endpoint

`POST` `/wp-json/mxm-api/v1/reorder-projects`

### Post params

`integer: agencyID`

`Array: projects`

### Example body request

```json
{
    "agencyID":153,
    "projects": [
      {"id": 929, "order": 5},
      {"id": 927, "order": 4},
      {"id": 692, "order": 2},
      {"id": 685, "order": 3},
      {"id": 678, "order": 1}
    ]
}
```

### Example body response

```json
{
  "status": "OK",
  "message": "Projects successfully reordered."
}
```

### Headers: `X-WP-Nonce`
The rest nonce can be accessed via `window.mxmChildGlobals.wpRestNonce`

### Example request (if using the builtin MXM Request object)

```javascript
    mxmRequest.getParams = {};
    mxmRequest.method = 'post';
    mxmRequest.formData = false;
    mxmRequest.endpoint = 'reorder-projects';
    mxmRequest.headers['X-WP-Nonce'] = window.mxmChildGlobals.wpRestNonce
    mxmRequest.addPostParam('agencyID', 153);
    mxmRequest.addPostParam('projects', [
        {"id": 929, "order": 5},
        {"id": 927, "order": 4},
        {"id": 692, "order": 2},
        {"id": 685, "order": 3},
        {"id": 678, "order": 1}
    ]);
    mxmRequest.execute((response)=> {}, (error) => {});
```