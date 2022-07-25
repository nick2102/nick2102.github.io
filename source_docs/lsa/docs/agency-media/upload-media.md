---
title: Upload Media
sidebar_position: 2
---

`PHP File: wp-content/themes/maxomedia-starter-child/api/controllers/class-maxomedia-child-agency-media.php`

`PHP Method: uploadAgencyMedia`

---

### Endpoint

`POST` `/wp-json/mxm-api/v1/upload-media-item`

### POST Params-Form Data (For uploading media FormData should be used. See example request):

`integer: agencyID`
`file: media`

### Example request body

```json
{
  "agencyID": 210,
  "media": {
    "name": "image-name.png",
    "type": "image/png",
    "tmp_name": "E:\\wamp64\\tmp\\phpCCD5.tmp",
    "error": 0,
    "size": 413241
  }
}
```

### Example response body

```json
{
  "status": "OK",
  "data": {
    "ID": 222,
    "url": "https://lsa.local/wp-content/uploads/2022/03/image-name.png",
    "baseUrl": "https://lsa.local/wp-content/uploads/2022/03/",
    "sizes": {
      "medium": {
        "file": "image-name-300x167.png",
        "width": 300,
        "height": 167,
        "mime-type": "image/png"
      },
      "large": {
        "file": "image-name-1024x569.png",
        "width": 1024,
        "height": 569,
        "mime-type": "image/png"
      },
      "thumbnail": {
        "file": "image-name-150x150.png",
        "width": 150,
        "height": 150,
        "mime-type": "image/png"
      },
      "medium_large": {
        "file": "image-name-768x427.png",
        "width": 768,
        "height": 427,
        "mime-type": "image/png"
      }
    }
  }
}
```

### Headers: `X-WP-Nonce`
The rest nonce can be accessed via `window.mxmChildGlobals.wpRestNonce`

### Example request (if using the builtin MXM Request object)

```javascript
    const media = document.querySelector('#media');
    const formData = new FormData();
    
    formData.append("agencyID", 210);
    formData.append("media", media.files[0]);
    
    mxmRequest.endpoint = 'upload-media-item';
    mxmRequest.method = 'post';
    mxmRequest.headers['X-WP-Nonce'] = window.mxmChildGlobals.wpRestNonce;
    mxmRequest.formData = formData;
    mxmRequest.execute(function (response){
        console.log(response.data);
    }, function (error) {console.log(error)})
```