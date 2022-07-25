---
title: Modify Agency Project
sidebar_position: 3
---

`PHP File: wp-content/themes/maxomedia-starter-child/api/controllers/class-maxomedia-child-agency-projects.php`

`PHP Method: saveSingleProject`

---

### Endpoint

`POST` `/wp-json/mxm-api/v1/agency-project`

### POST Params-Form Data (For uploading media FormData should be used. See example request):

`integer: agencyID`

`integer: projectID`

`string: title`

`string: content`

`string: subTitle`

`string: shortDescription`

`string: introText`

`string: case_video_youtube_or_vimeo_link`

`string: clientName`

`json|array: industry`

`json|array: award`

`json|array: project_competency`

`string: mode`

`file: previewVideoImage`

`file: featuredImage`

`string: newPreviewVideoImageUpload` - optional

`string: newFeaturedUpload` - optional

### Accepted params `mode`

`create`
`update`
`delete`

### Accepted params `newPreviewVideoImageUpload` and `newFeaturedUpload`

`yes`
`no`

### Example request body create

```json
{
  "agencyID": "153",
  "mode": "create",
  "title": "Project from postman 2",
  "content": "<p>content from postman 2</p>",
  "industry": "[25]",
  "award": "[28]",
  "project_competency": "[34]",
  "subTitle": "Project subtitle",
  "shortDescription": "Project short description",
  "introText": "Project Intro text",
  "case_video_youtube_or_vimeo_link": "https://www.youtube.com/watch?v=jupXD_hzH2g",
  "clientName": "Client Name",
  "featuredImage": {
    "name": "microsoft-offices-KL-studio9-700x467.jpg",
    "type": "image/jpeg",
    "tmp_name": "E:\\wamp64\\tmp\\php70E1.tmp",
    "error": 0,
    "size": 193357
  },
  "previewVideoImage": {
    "name": "microsoft-offices-KL-studio9-700x467.jpg",
    "type": "image/jpeg",
    "tmp_name": "E:\\wamp64\\tmp\\php70E1.tmp",
    "error": 0,
    "size": 193357
  },
  "gallery": {
    "name": [
      "Empty office wallpaper 276032.jpg",
      "WP_Hanuman-2560x1440_00000.jpg",
      "",
      "",
      "",
      ""
    ],
    "type": [
      "image/jpeg",
      "image/jpeg",
      "",
      "",
      "",
      ""
    ],
    "tmp_name": [
      "E:\\wamp64\\tmp\\php1A3.tmp",
      "E:\\wamp64\\tmp\\php1B3.tmp",
      "",
      "",
      "",
      ""
    ],
    "error": [
      0,
      0,
      4,
      4,
      4,
      4
    ],
    "size": [
      861985,
      821015,
      0,
      0,
      0,
      0
    ]
  }
}
```

### Example request body update

```json
{
  "agencyID" : 153,
  "articleID": 490,
  "mode": "update",
  "title": "Project from postman 2",
  "content": "<p>content from postman 2</p>",
  "industry": "[25]",
  "award": "[28]",
  "project_competency": "[34]",
  "subTitle": "Project subtitle",
  "shortDescription": "Project short description",
  "introText": "Project Intro text",
  "case_video_youtube_or_vimeo_link": "https://www.youtube.com/watch?v=jupXD_hzH2g",
  "clientName": "Client Name",
  "newPreviewVideoImageUpload" : "yes",
  "newFeaturedUpload" : "no",
  "previewVideoImage": {
    "name": "microsoft-offices-KL-studio9-700x467.jpg",
    "type": "image/jpeg",
    "tmp_name": "E:\\wamp64\\tmp\\php70E1.tmp",
    "error": 0,
    "size": 193357
  }
}
```

### Editing the Gallery

For Adding or removing images from **already created project** please use the [media](https://maxomedia.bitbucket.io/lsa/agency-media/upload-media) endpoints

### Example request body delete

```json
{
  "agencyID" : 153,
  "projectID": 490,
  "mode": "delete"
}
```

### Response Body Example create, update

```json
{
  "status": "OK",
  "project": {
    "ID": 515,
    "post_author": "1",
    "post_date": "2022-03-30 19:51:10",
    "post_date_gmt": "2022-03-30 17:51:10",
    "post_content": "<p>content from postman 2</p>",
    "post_title": "Project from postman 2",
    "post_excerpt": "",
    "post_status": "publish",
    "comment_status": "closed",
    "ping_status": "closed",
    "post_password": "",
    "post_name": "project-from-postman-2-2",
    "to_ping": "",
    "pinged": "",
    "post_modified": "2022-03-30 19:51:10",
    "post_modified_gmt": "2022-03-30 17:51:10",
    "post_content_filtered": "",
    "post_parent": 0,
    "guid": "https://lsa.local/project/project-from-postman-2-2/",
    "menu_order": 0,
    "post_type": "project",
    "post_mime_type": "",
    "comment_count": "0",
    "filter": "raw",
    "sub_title": "Project subtitle",
    "short_description": "Project short description",
    "intro_text": "<p>Project Intro text</p>\n",
    "case_video_youtube_or_vimeo_link": "https://www.youtube.com/watch?v=jupXD_hzH2g",
    "client_name": "Client Name",
    "featuredImage": {
      "ID": 509,
      "url": "https://lsa.local/wp-content/uploads/2022/03/5_microsoft-offices-kl-studio9-700x467.jpg",
      "baseUrl": "https://lsa.local/wp-content/uploads/2022/03/",
      "sizes": {
        "medium": {
          "file": "5_microsoft-offices-kl-studio9-700x467-300x200.jpg",
          "width": 300,
          "height": 200,
          "mime-type": "image/jpeg"
        },
        "thumbnail": {
          "file": "5_microsoft-offices-kl-studio9-700x467-150x150.jpg",
          "width": 150,
          "height": 150,
          "mime-type": "image/jpeg"
        }
      }
    },
    "previewVideoImage": false,
    "gallery": [
      {
        "image": {
          "ID": 511,
          "id": 511,
          "title": "empty-office-wallpaper-276032",
          "filename": "empty-office-wallpaper-276032.jpg",
          "filesize": 861985,
          "url": "https://lsa.local/wp-content/uploads/2022/03/empty-office-wallpaper-276032.jpg",
          "link": "https://lsa.local/project/project-from-postman-2-2/empty-office-wallpaper-276032/",
          "alt": "",
          "author": "1",
          "description": "",
          "caption": "",
          "name": "empty-office-wallpaper-276032",
          "status": "inherit",
          "uploaded_to": 515,
          "date": "2022-03-30 17:51:08",
          "modified": "2022-03-30 17:51:10",
          "menu_order": 0,
          "mime_type": "image/jpeg",
          "type": "image",
          "subtype": "jpeg",
          "icon": "https://lsa.local/wp-includes/images/media/default.png",
          "width": 1920,
          "height": 1200,
          "sizes": {
            "thumbnail": "https://lsa.local/wp-content/uploads/2022/03/empty-office-wallpaper-276032-150x150.jpg",
            "thumbnail-width": 150,
            "thumbnail-height": 150,
            "medium": "https://lsa.local/wp-content/uploads/2022/03/empty-office-wallpaper-276032-300x188.jpg",
            "medium-width": 300,
            "medium-height": 188,
            "medium_large": "https://lsa.local/wp-content/uploads/2022/03/empty-office-wallpaper-276032-768x480.jpg",
            "medium_large-width": 768,
            "medium_large-height": 480,
            "large": "https://lsa.local/wp-content/uploads/2022/03/empty-office-wallpaper-276032-1024x640.jpg",
            "large-width": 800,
            "large-height": 500,
            "1536x1536": "https://lsa.local/wp-content/uploads/2022/03/empty-office-wallpaper-276032-1536x960.jpg",
            "1536x1536-width": 1536,
            "1536x1536-height": 960,
            "2048x2048": "https://lsa.local/wp-content/uploads/2022/03/empty-office-wallpaper-276032.jpg",
            "2048x2048-width": 1920,
            "2048x2048-height": 1200
          }
        }
      },
      {
        "image": {
          "ID": 513,
          "id": 513,
          "title": "wp_hanuman-2560x1440_00000",
          "filename": "2_wp_hanuman-2560x1440_00000.jpg",
          "filesize": 821015,
          "url": "https://lsa.local/wp-content/uploads/2022/03/2_wp_hanuman-2560x1440_00000.jpg",
          "link": "https://lsa.local/project/project-from-postman-2-2/wp_hanuman-2560x1440_00000-2/",
          "alt": "",
          "author": "1",
          "description": "",
          "caption": "",
          "name": "wp_hanuman-2560x1440_00000-2",
          "status": "inherit",
          "uploaded_to": 515,
          "date": "2022-03-30 17:51:09",
          "modified": "2022-03-30 17:51:10",
          "menu_order": 0,
          "mime_type": "image/jpeg",
          "type": "image",
          "subtype": "jpeg",
          "icon": "https://lsa.local/wp-includes/images/media/default.png",
          "width": 2560,
          "height": 1440,
          "sizes": {
            "thumbnail": "https://lsa.local/wp-content/uploads/2022/03/2_wp_hanuman-2560x1440_00000-150x150.jpg",
            "thumbnail-width": 150,
            "thumbnail-height": 150,
            "medium": "https://lsa.local/wp-content/uploads/2022/03/2_wp_hanuman-2560x1440_00000-300x169.jpg",
            "medium-width": 300,
            "medium-height": 169,
            "medium_large": "https://lsa.local/wp-content/uploads/2022/03/2_wp_hanuman-2560x1440_00000-768x432.jpg",
            "medium_large-width": 768,
            "medium_large-height": 432,
            "large": "https://lsa.local/wp-content/uploads/2022/03/2_wp_hanuman-2560x1440_00000-1024x576.jpg",
            "large-width": 800,
            "large-height": 450,
            "1536x1536": "https://lsa.local/wp-content/uploads/2022/03/2_wp_hanuman-2560x1440_00000-1536x864.jpg",
            "1536x1536-width": 1536,
            "1536x1536-height": 864,
            "2048x2048": "https://lsa.local/wp-content/uploads/2022/03/2_wp_hanuman-2560x1440_00000-2048x1152.jpg",
            "2048x2048-width": 2048,
            "2048x2048-height": 1152
          }
        }
      }
    ],
    "industry": [
      {
        "term_id": 25,
        "name": "Information und Telekommunikation",
        "slug": "information-und-telekommunikation",
        "term_group": 0,
        "term_taxonomy_id": 25,
        "taxonomy": "industry",
        "description": "",
        "parent": 0,
        "count": 3,
        "filter": "raw"
      }
    ],
    "award": [
      {
        "term_id": 28,
        "name": "Cannes Lions",
        "slug": "cannes-lions",
        "term_group": 0,
        "term_taxonomy_id": 28,
        "taxonomy": "award",
        "description": "",
        "parent": 0,
        "count": 2,
        "filter": "raw"
      }
    ],
    "project_competency": [
      {
        "term_id": 34,
        "name": "Social Media",
        "slug": "social-media",
        "term_group": 0,
        "term_taxonomy_id": 34,
        "taxonomy": "project-competency",
        "description": "",
        "parent": 0,
        "count": 2,
        "filter": "raw"
      }
    ]
  }
}
```

### Response Body Example delete

```json
{
  "status": "OK",
  "id" : 123,
  "message": "Project successfully deleted"
}
```

### Headers: `X-WP-Nonce`
The rest nonce can be accessed via `window.mxmChildGlobals.wpRestNonce`

### Example request (if using the builtin MXM Request object)

```javascript
    const form = document.querySelector('#projectForm');
    const formData = new FormData(form);
    
    mxmRequest.endpoint = 'agency-article';
    mxmRequest.method = 'post';
    mxmRequest.headers['X-WP-Nonce'] = window.mxmChildGlobals.wpRestNonce;
    mxmRequest.formData = formData;
    mxmRequest.execute(function (response){
        console.log(response.data);
    }, function (error) {console.log(error)})
```