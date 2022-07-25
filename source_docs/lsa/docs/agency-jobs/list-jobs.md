---
title: Get Job List
sidebar_position: 1
---

`PHP File: wp-content/themes/maxomedia-starter-child/api/controllers/class-maxomedia-child-agency-jobs.php`

`PHP Method: getJobsList`

---
### Endpoint

`GET` `/wp-json/mxm-api/v1/get-agency-jobs`

### Get params

`integer: agencyID`

### Example body request

```json
{
    "agencyID":153
}
```

### Example body response

```json
{
    "status": "OK",
    "jobs": [
      {
        "ID": 184,
        "post_author": "1",
        "post_date": "2022-03-22 15:28:36",
        "post_date_gmt": "2022-03-22 14:28:36",
        "post_content": "teaet",
        "post_title": "Test Job",
        "post_excerpt": "",
        "post_status": "publish",
        "comment_status": "closed",
        "ping_status": "closed",
        "post_password": "",
        "post_name": "test-job",
        "to_ping": "",
        "pinged": "",
        "post_modified": "2022-03-22 15:28:36",
        "post_modified_gmt": "2022-03-22 14:28:36",
        "post_content_filtered": "",
        "post_parent": 0,
        "guid": "https://lsa.local/?post_type=job-oppening&#038;p=184",
        "menu_order": 0,
        "post_type": "job-oppening",
        "post_mime_type": "",
        "comment_count": "0",
        "filter": "raw",
        "link_from_job_description":""
      }
    ]
}
```

### Headers: `X-WP-Nonce`
The rest nonce can be accessed via `window.mxmChildGlobals.wpRestNonce`

### Example request (if using the builtin MXM Request object)

```javascript
    mxmRequest.getParams = {};
    mxmRequest.method = 'get';
    mxmRequest.endpoint = 'get-agency-jobs';
    mxmRequest.headers['X-WP-Nonce'] = window.mxmChildGlobals.wpRestNonce
    mxmRequest.addPostParam('agencyID', 152);
    mxmRequest.execute((response)=> {}, (error) => {});
```