---
title: List Agency Articles
sidebar_position: 1
---

`PHP File: wp-content/themes/maxomedia-starter-child/api/controllers/class-maxomedia-child-agency-articles.php`

`PHP Method: getArticleList`

---

### Endpoint

`GET` `/wp-json/mxm-api/v1/get-agency-articles`

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
  "articles": [
    {
      "ID": 240,
      "post_author": "1",
      "post_date": "2022-03-27 23:29:56",
      "post_date_gmt": "2022-03-27 21:29:56",
      "post_content": "asdasdasd",
      "post_title": "Article 1",
      "post_excerpt": "",
      "post_status": "publish",
      "comment_status": "closed",
      "ping_status": "closed",
      "post_password": "",
      "post_name": "article-1",
      "to_ping": "",
      "pinged": "",
      "post_modified": "2022-03-27 23:47:40",
      "post_modified_gmt": "2022-03-27 21:47:40",
      "post_content_filtered": "",
      "post_parent": 0,
      "guid": "https://lsa.local/?post_type=agency-article&#038;p=240",
      "menu_order": 0,
      "post_type": "agency-article",
      "post_mime_type": "",
      "comment_count": "0",
      "filter": "raw",
      "file": {
        "ID": 241,
        "id": 241,
        "label": "",
        "title": "QuestionsWP",
        "filename": "QuestionsWP.xlsx",
        "filesize": 9942,
        "url": "https://lsa.local/wp-content/uploads/2022/03/QuestionsWP.xlsx",
        "link": "https://lsa.local/agency-article/article-1/questionswp/",
        "alt": "",
        "author": "1",
        "description": "",
        "caption": "",
        "name": "questionswp",
        "status": "inherit",
        "uploaded_to": 240,
        "date": "2022-03-27 21:29:04",
        "modified": "2022-03-27 21:29:04",
        "menu_order": 0,
        "mime_type": "application/vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "type": "application",
        "subtype": "vnd.openxmlformats-officedocument.spreadsheetml.sheet",
        "icon": "https://lsa.local/wp-includes/images/media/spreadsheet.png"
      },
      "url": {
        "label": "Link name",
        "url": "https://www.freecodecamp.org/news/formdata-explained/"
      },
      "video_link": "https://www.youtube.com/watch?v=PhnKkQ9IJ7k",
      "featuredImage": {
        "ID": 66,
        "url": "https://lsa.local/wp-content/uploads/2022/03/home.jpg",
        "baseUrl": "https://lsa.local/wp-content/uploads/2022/03/",
        "sizes": []
      }
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
    mxmRequest.endpoint = 'get-agency-articles';
    mxmRequest.headers['X-WP-Nonce'] = window.mxmChildGlobals.wpRestNonce
    mxmRequest.addPostParam('agencyID', 153);
    mxmRequest.execute((response)=> {}, (error) => {});
```