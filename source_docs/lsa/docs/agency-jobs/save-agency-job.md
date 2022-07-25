---
title: Modify Single Job
sidebar_position: 3
---

`PHP File: wp-content/themes/maxomedia-starter-child/api/controllers/class-maxomedia-child-agency-jobs.php`

`PHP Method: saveSingleJob`

---
### Endpoint

`POST` `/wp-json/mxm-api/v1/agency-job`

### POST Params

`integer: agencyID`

`integer: jobID`

`string: mode`

`object: data`

### Accepted params `mode`

`create`
`update`
`delete`

### Example request body create

```json
{
    "agencyID" : 153,
    "mode": "create",
    "data" : {
        "title" : "TEST JOB Created",
        "content" : "<h2>Title 3</h2><p>Created content</p>",
        "job_branch": []
    }
}
```

### Example request body update

```json
{
  "agencyID" : 153,
  "jobID": 184,
  "mode": "update",
  "data" : {
    "title" : "TEST JOB CHANGED",
    "content" : "<h2>Title 2</h2><p>changed content</p>",
    "job_branch": []
  }
}
```

### Example request body delete

```json
{
  "agencyID" : 153,
  "jobID": 201,
  "mode": "delete"
}
```

### Response Body Example create, update

```json
{
  "status": "OK",
  "job": {
    "ID": 201,
    "post_author": "1",
    "post_date": "2022-03-25 11:54:10",
    "post_date_gmt": "2022-03-25 10:54:10",
    "post_content": "<h2>Title 3</h2><p>Created content</p>",
    "post_title": "TEST JOB Created",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "test-job-created-2",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2022-03-25 11:54:10",
    "post_modified_gmt": "2022-03-25 10:54:10",
    "post_content_filtered": "",
    "post_parent": 0,
    "guid": "https://lsa.local/job/test-job-created-2/",
    "menu_order": 0,
    "post_type": "job-oppening",
    "post_mime_type": "",
    "comment_count": "0",
    "filter": "raw",
    "job_branch": [],
    "start_date": null,
    "end_date": null,
    "link_from_job_description":""
  }
}
```

### Response Body Example delete

```json
{
  "status": "OK",
  "id" : 123,
  "message": "Job successfully deleted"
}
```

### Headers: `X-WP-Nonce`
The rest nonce can be accessed via `window.mxmChildGlobals.wpRestNonce`

### Example request (if using the builtin MXM Request object)

```javascript
    mxmRequest.postParams = {};
    mxmRequest.endpoint = 'agency-job';
    mxmRequest.method = 'post';
    mxmRequest.headers['X-WP-Nonce'] = window.mxmChildGlobals.wpRestNonce
    mxmRequest.addPostParam('agencyID', 152);
    mxmRequest.addPostParam('jobID', 184);
    mxmRequest.addPostParam('mode', 'update');
    mxmRequest.addPostParam('data', {
        "title" : "TEST JOB CHANGED",
        "content" : "<h2>Title 2</h2><p>changed content</p>",
        "job_branch": []
    });
    mxmRequest.execute((response)=> {}, (error) => {});
```