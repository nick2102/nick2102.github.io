---
title: Modify Article
sidebar_position: 3
---

`PHP File: wp-content/themes/maxomedia-starter-child/api/controllers/class-maxomedia-child-agency-articles.php`

`PHP Method: saveSingleArticle`

---
### Endpoint

`POST` `/wp-json/mxm-api/v1/agency-article`

### POST Params-Form Data (For uploading media FormData should be used. See example request):

`integer: agencyID`

`integer: articleID`

`string: title`

`string: content`

`string: video_link`

`string: mode`

`file: file`

`file: featuredImage`

`object: url`

`string: newFileUpload` - optional

`string: newFeaturedUpload` - optional

### Accepted params `mode`

`create`
`update`
`delete`

### Accepted params `newFileUpload` and `newFeaturedUpload`

`yes`
`no`

### Example request body create

```json
{
    "agencyID" : 153,
    "mode": "create",
    "data" : {
          "title" : "TEST Article",
          "content" : "<h2>Title 2</h2><p>Article content</p>",
          "video_link": "https://www.youtube.com/watch?v=PhnKkQ9IJ7k",
          "url" : {
            "label" : "Link Label",
            "url" : "https://www.freecodecamp.org/news/formdata-explained"
          },
          "featuredImage" : {
            "name": "image-name.png",
            "type": "image/png",
            "tmp_name": "E:\\wamp64\\tmp\\phpCCD5.tmp",
            "error": 0,
            "size": 413241
          },
          "file": {
            "name": "doc.pdf",
            "type": "application/pdf",
            "tmp_name": "E:\\wamp64\\tmp\\phpCCD6.tmp",
            "error": 0,
            "size": 413241
          }
    }
}
```

### Example request body update

```json
{
  "agencyID" : 153,
  "articleID": 184,
  "mode": "update",
  "newFileUpload": "yes",
  "newFeaturedUpload" : "yes",
  "data" : {
    "title" : "TEST Article",
    "content" : "<h2>Title 2</h2><p>Article content</p>",
    "video_link": "https://www.youtube.com/watch?v=PhnKkQ9IJ7k",
    "url" : {
      "label" : "Link Label",
      "url" : "https://www.freecodecamp.org/news/formdata-explained"
    },
    "featuredImage" : {
      "name": "image-name.png",
      "type": "image/png",
      "tmp_name": "E:\\wamp64\\tmp\\phpCCD5.tmp",
      "error": 0,
      "size": 413241
    },
    "file": {
      "name": "doc.pdf",
      "type": "application/pdf",
      "tmp_name": "E:\\wamp64\\tmp\\phpCCD6.tmp",
      "error": 0,
      "size": 413241
    }
  }
}
```

### Example request body delete

```json
{
  "agencyID" : 153,
  "articleID": 201,
  "mode": "delete"
}
```

### Response Body Example create, update

```json
{
  "status": "OK",
  "article": {
    "ID": 291,
    "post_author": "1",
    "post_date": "2022-03-28 20:23:22",
    "post_date_gmt": "2022-03-28 18:23:22",
    "post_content": "<h3>Data</h3><p>Some html content added. v4 Edit Mode</p>",
    "post_title": "Content from postman version 4 EDIT MODE",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "content-from-postman-create-mode",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2022-03-28 20:29:07",
    "post_modified_gmt": "2022-03-28 18:29:07",
    "post_content_filtered": "",
    "post_parent": 0,
    "guid": "https://lsa.local/agency-article/content-from-postman-create-mode/",
    "menu_order": 0,
    "post_type": "agency-article",
    "post_mime_type": "",
    "comment_count": "0",
    "filter": "raw",
    "featuredImage": {
      "ID": 294,
      "url": "https://lsa.local/wp-content/uploads/2022/03/2_screenshot_1.png",
      "baseUrl": "https://lsa.local/wp-content/uploads/2022/03/",
      "sizes": []
    },
    "file": {
      "ID": 292,
      "id": 292,
      "label": "",
      "title": "card-terms-data_plat_mb_v41",
      "filename": "card-terms-data_plat_mb_v41.xlsx",
      "filesize": 67748,
      "url": "https://lsa.local/wp-content/uploads/2022/03/card-terms-data_plat_mb_v41.xlsx",
      "link": "https://lsa.local/agency-article/content-from-postman-create-mode/card-terms-data_plat_mb_v41/",
      "alt": "",
      "author": "1",
      "description": "",
      "caption": "",
      "name": "card-terms-data_plat_mb_v41",
      "status": "inherit",
      "uploaded_to": 291,
      "date": "2022-03-28 18:29:06",
      "modified": "2022-03-28 18:29:06",
      "menu_order": 0,
      "mime_type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "type": "application",
      "subtype": "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
      "icon": "https://lsa.local/wp-includes/images/media/spreadsheet.png"
    },
    "url": {
      "label": "Link Text Changed",
      "url": "https://www.freecodecamp.org/news/formdata-explained"
    },
    "video_link": "https://www.youtube.com/watch?v=PhnKkQ9IJ7k"
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
    const form = document.querySelector('#articlesForm');
    const formData = new FormData(form);
    
    mxmRequest.endpoint = 'agency-article';
    mxmRequest.method = 'post';
    mxmRequest.headers['X-WP-Nonce'] = window.mxmChildGlobals.wpRestNonce;
    mxmRequest.formData = formData;
    mxmRequest.execute(function (response){
        console.log(response.data);
    }, function (error) {console.log(error)})
```