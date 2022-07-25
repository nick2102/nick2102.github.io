---
title: SAVE Agency Profile Section
sidebar_position: 2
---

`PHP File: wp-content/themes/maxomedia-starter-child/api/controllers/class-maxomedia-child-agency-profile.php`

`PHP Method: saveAgencyProfile`

---

### Endpoint

`POST` `/wp-json/mxm-api/v1/save-agency-profile`

### Post Params

`integer: agencyID`

`string: profileSection`

`object: data` (from state)

### Accepted params for profile section

`agencyInfo`
`socialLinks`
`locations`
`profileImages`

### Example request body

```json
{
    "agencyID" : 153,
    "profileSection": "locations",
    "data" : {
            "editable": false,
            "boxType": "singular",
            "agencyName": "This is test agency",
            "agencyType": "Type DE",
            "agencyTypeFr": "Type FR",
            "numberOfEmployees": 17,
            "foundingYear": "2019",
            "shortIntro": "Short Intro",
            "shortIntroFr": "Short Intro FR",
            "punchLine": "punchLine DE",
            "punchLineFr": "punchLine FR",
            "agencyLeader": ["Nikola", "Nikola 2"],
            "competencies": [19]
        }
}
```

### Headers: `X-WP-Nonce`
The rest nonce can be accessed via `window.mxmChildGlobals.wpRestNonce`

### Example request (if using the builtin MXM Request object)

```javascript
    mxmRequest.postParams = {};
    mxmRequest.endpoint = 'save-agency-profile';
    mxmRequest.headers['X-WP-Nonce'] = window.mxmChildGlobals.wpRestNonce
    mxmRequest.method = 'post';
    mxmRequest.addPostParam('agencyID', 152);
    mxmRequest.addPostParam('profileSection', 152);
    mxmRequest.addPostParam('data', {
        "editable": false,
        "boxType": "singular",
        "agencyName": "This is test agency",
        "agencyType": "Type DE",
        "agencyTypeFr": "Type FR",
        "numberOfEmployees": 17,
        "foundingYear": "2019",
        "punchLine": "punchLine DE",
        "punchLineFr": "punchLine FR",
        "agencyLeader": ["Leader 1", "Leader 2"],
        "competencies": [19]
    });
    mxmRequest.execute((response)=> {}, (error) => {});
```

### Response Body Example
The whole profile data will be returned.

### Notes

- In `agencyInfo` section the `numberOfEmployees` and `competencies` are the term ids from WordPress
- In `profileImages` section all the params should be the WordPress attachment id or the whole attachment object