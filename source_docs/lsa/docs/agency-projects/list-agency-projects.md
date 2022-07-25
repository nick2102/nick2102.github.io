---
title: List Agency Projects
sidebar_position: 1
---

`PHP File: wp-content/themes/maxomedia-starter-child/api/controllers/class-maxomedia-child-agency-projects.php`

`PHP Method: getProjectsList`

---

### Endpoint

`GET` `/wp-json/mxm-api/v1/get-agency-projects`

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
  "projects": [
    {
      "ID": 387,
      "post_author": "1",
      "post_date": "2022-03-30 11:58:19",
      "post_date_gmt": "2022-03-30 09:58:19",
      "post_content": "Project Content",
      "post_title": "Project 1",
      "post_excerpt": "",
      "post_status": "publish",
      "comment_status": "closed",
      "ping_status": "closed",
      "post_password": "",
      "post_name": "project-1",
      "to_ping": "",
      "pinged": "",
      "post_modified": "2022-03-30 11:58:19",
      "post_modified_gmt": "2022-03-30 09:58:19",
      "post_content_filtered": "",
      "post_parent": 0,
      "guid": "https://lsa.local/?post_type=project&#038;p=387",
      "menu_order": 0,
      "post_type": "project",
      "post_mime_type": "",
      "comment_count": "0",
      "filter": "raw",
      "sub_title": "Project Subtitle",
      "short_description": "Short Description",
      "intro_text": "<p>Intro Text goes here</p>\n",
      "case_video_youtube_or_vimeo_link": "https://www.youtube.com/watch?v=jupXD_hzH2g",
      "client_name": "EWB",
      "featuredImage": {
        "ID": 388,
        "url": "https://lsa.local/wp-content/uploads/2022/03/microsoft-offices-KL-studio9-700x467-1.jpg",
        "baseUrl": "https://lsa.local/wp-content/uploads/2022/03/",
        "sizes": []
      },
      "previewVideoImage": {
        "ID": 271,
        "id": 271,
        "title": "wallpapersden.com_windows-11-black_1920x1080",
        "filename": "wallpapersden.com_windows-11-black_1920x1080.jpg",
        "filesize": 379249,
        "url": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080.jpg",
        "link": "https://lsa.local/test-post/wallpapersden-com_windows-11-black_1920x1080/",
        "alt": "",
        "author": "1",
        "description": "",
        "caption": "",
        "name": "wallpapersden-com_windows-11-black_1920x1080",
        "status": "inherit",
        "uploaded_to": 13,
        "date": "2022-03-28 14:53:24",
        "modified": "2022-03-28 14:53:24",
        "menu_order": 0,
        "mime_type": "image/jpeg",
        "type": "image",
        "subtype": "jpeg",
        "icon": "https://lsa.local/wp-includes/images/media/default.png",
        "width": 1920,
        "height": 1080,
        "sizes": {
          "thumbnail": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080-150x150.jpg",
          "thumbnail-width": 150,
          "thumbnail-height": 150,
          "medium": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080-300x169.jpg",
          "medium-width": 300,
          "medium-height": 169,
          "medium_large": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080-768x432.jpg",
          "medium_large-width": 768,
          "medium_large-height": 432,
          "large": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080-1024x576.jpg",
          "large-width": 800,
          "large-height": 450,
          "1536x1536": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080-1536x864.jpg",
          "1536x1536-width": 1536,
          "1536x1536-height": 864,
          "2048x2048": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080.jpg",
          "2048x2048-width": 1920,
          "2048x2048-height": 1080
        }
      },
      "gallery": [
        {
          "image": {
            "ID": 66,
            "id": 66,
            "title": "home",
            "filename": "home.jpg",
            "filesize": 456856,
            "url": "https://lsa.local/wp-content/uploads/2022/03/home.jpg",
            "link": "https://lsa.local/?attachment_id=66",
            "alt": "",
            "author": "1",
            "description": "",
            "caption": "",
            "name": "home",
            "status": "inherit",
            "uploaded_to": 62,
            "date": "2022-03-11 19:45:13",
            "modified": "2022-03-11 19:45:13",
            "menu_order": 0,
            "mime_type": "image/jpeg",
            "type": "image",
            "subtype": "jpeg",
            "icon": "https://lsa.local/wp-includes/images/media/default.png",
            "width": 1920,
            "height": 962,
            "sizes": {
              "thumbnail": "https://lsa.local/wp-content/uploads/2022/03/home-150x150.jpg",
              "thumbnail-width": 150,
              "thumbnail-height": 150,
              "medium": "https://lsa.local/wp-content/uploads/2022/03/home-300x150.jpg",
              "medium-width": 300,
              "medium-height": 150,
              "medium_large": "https://lsa.local/wp-content/uploads/2022/03/home-768x385.jpg",
              "medium_large-width": 768,
              "medium_large-height": 385,
              "large": "https://lsa.local/wp-content/uploads/2022/03/home-1024x513.jpg",
              "large-width": 800,
              "large-height": 401,
              "1536x1536": "https://lsa.local/wp-content/uploads/2022/03/home-1536x770.jpg",
              "1536x1536-width": 1536,
              "1536x1536-height": 770,
              "2048x2048": "https://lsa.local/wp-content/uploads/2022/03/home.jpg",
              "2048x2048-width": 1920,
              "2048x2048-height": 962
            }
          }
        },
        {
          "image": {
            "ID": 271,
            "id": 271,
            "title": "wallpapersden.com_windows-11-black_1920x1080",
            "filename": "wallpapersden.com_windows-11-black_1920x1080.jpg",
            "filesize": 379249,
            "url": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080.jpg",
            "link": "https://lsa.local/test-post/wallpapersden-com_windows-11-black_1920x1080/",
            "alt": "",
            "author": "1",
            "description": "",
            "caption": "",
            "name": "wallpapersden-com_windows-11-black_1920x1080",
            "status": "inherit",
            "uploaded_to": 13,
            "date": "2022-03-28 14:53:24",
            "modified": "2022-03-28 14:53:24",
            "menu_order": 0,
            "mime_type": "image/jpeg",
            "type": "image",
            "subtype": "jpeg",
            "icon": "https://lsa.local/wp-includes/images/media/default.png",
            "width": 1920,
            "height": 1080,
            "sizes": {
              "thumbnail": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080-150x150.jpg",
              "thumbnail-width": 150,
              "thumbnail-height": 150,
              "medium": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080-300x169.jpg",
              "medium-width": 300,
              "medium-height": 169,
              "medium_large": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080-768x432.jpg",
              "medium_large-width": 768,
              "medium_large-height": 432,
              "large": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080-1024x576.jpg",
              "large-width": 800,
              "large-height": 450,
              "1536x1536": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080-1536x864.jpg",
              "1536x1536-width": 1536,
              "1536x1536-height": 864,
              "2048x2048": "https://lsa.local/wp-content/uploads/2022/03/wallpapersden.com_windows-11-black_1920x1080.jpg",
              "2048x2048-width": 1920,
              "2048x2048-height": 1080
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
          "count": 1,
          "filter": "raw"
        }
      ],
      "award": [
        {
          "term_id": 31,
          "name": "ADC Europe",
          "slug": "adc-europe",
          "term_group": 0,
          "term_taxonomy_id": 31,
          "taxonomy": "award",
          "description": "",
          "parent": 0,
          "count": 1,
          "filter": "raw"
        }
      ],
      "project_competency": [
        {
          "term_id": 35,
          "name": "Online-Marketing/SEM",
          "slug": "online-marketing-sem",
          "term_group": 0,
          "term_taxonomy_id": 35,
          "taxonomy": "project-competency",
          "description": "",
          "parent": 0,
          "count": 1,
          "filter": "raw"
        }
      ]
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
    mxmRequest.endpoint = 'get-agency-projects';
    mxmRequest.headers['X-WP-Nonce'] = window.mxmChildGlobals.wpRestNonce
    mxmRequest.addPostParam('agencyID', 153);
    mxmRequest.execute((response)=> {}, (error) => {});
```