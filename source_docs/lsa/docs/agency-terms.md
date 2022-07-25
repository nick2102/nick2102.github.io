---
title: Agency Terms
sidebar_position: 2
---

`PHP File: wp-content/themes/maxomedia-starter-child/api/controllers/class-maxomedia-child-agency-profile.php`

`PHP Method: getAgencyTerms`

---
### Endpoint

`GET` `/wp-json/mxm-api/v1/get-agency-terms`

### Get Params

`string: taxonomy`

### Accepted params

#### Agency:

`number-of-employees` 
`competency`
`region`

#### Projects

`industry`
`award`
`project-competency`

#### Posts & Agency Articles

`category`
`post_tag`

### Example request (if using the builtin MXM Request object)

```javascript
    mxmRequest.getParams = {};
    mxmRequest.method = 'get';
    mxmRequest.addGetParam('taxonomy', 'number-of-employees');
    mxmRequest.endpoint = 'get-agency-terms';
    mxmRequest.execute((response)=> {}, (error) => {});
```

### Request Body Example

```json
{
    "taxonomy" : "term-slug"
}
```

### Response Body Example

```json
    {
    "status": "",
    "terms": [
        {
            "term_id": 15,
            "name": "&lt; 50 Mitarbeiter",
            "slug": "50-mitarbeiter",
            "term_group": 0,
            "term_taxonomy_id": 15,
            "taxonomy": "number-of-employees",
            "description": "",
            "parent": 0,
            "count": 0,
            "filter": "raw"
        }    
	    ]
    }
```