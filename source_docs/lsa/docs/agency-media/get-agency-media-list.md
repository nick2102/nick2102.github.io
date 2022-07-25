---
title: GET Agency Media List
sidebar_position: 1
---

`PHP File: wp-content/themes/maxomedia-starter-child/api/controllers/class-maxomedia-child-agency-media.php`

`PHP Method: getAgencyMedia`

---
### Endpoint 

`GET` `/wp-json/mxm-api/v1/agency-media-list`

### Get Params:

`no params`

### Headers: `X-WP-Nonce`
The rest nonce can be accessed via `window.mxmChildGlobals.wpRestNonce`

### Example request (if using the builtin MXM Request object)

```javascript
    mxmRequest.getParams = {};
    mxmRequest.method = 'get';
    mxmRequest.endpoint = 'agency-media-list';
    mxmRequest.headers['X-WP-Nonce'] = window.mxmChildGlobals.wpRestNonce
    mxmRequest.execute((response)=> {}, (error) => {});
```

### Response Body Example

```json
{
    "status": "OK",
    "data": [
        {
            "ID": 73,
            "url": "https://lsa.local/wp-content/uploads/elementor/screenshots/Elementor-post-screenshot_62_2022-03-11-19-47-35_75a6a6f6.png",
            "baseUrl": "https://lsa.local/wp-content/uploads/elementor/screenshots/",
            "sizes": []
        },
        {
            "ID": 66,
            "url": "https://lsa.local/wp-content/uploads/2022/03/home.jpg",
            "baseUrl": "https://lsa.local/wp-content/uploads/2022/03/",
            "sizes": {
                "medium": {
                    "file": "home-300x150.jpg",
                    "width": 300,
                    "height": 150,
                    "mime-type": "image/jpeg"
                },
                "large": {
                    "file": "home-1024x513.jpg",
                    "width": 1024,
                    "height": 513,
                    "mime-type": "image/jpeg"
                },
                "thumbnail": {
                    "file": "home-150x150.jpg",
                    "width": 150,
                    "height": 150,
                    "mime-type": "image/jpeg"
                },
                "medium_large": {
                    "file": "home-768x385.jpg",
                    "width": 768,
                    "height": 385,
                    "mime-type": "image/jpeg"
                },
                "1536x1536": {
                    "file": "home-1536x770.jpg",
                    "width": 1536,
                    "height": 770,
                    "mime-type": "image/jpeg"
                }
            }
        }
    ]
}
```