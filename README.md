# API Documentation

This is an example of Capstone API for the next developer who wants to try this app.

The entire application is contained within the `index.js` file.

You need to install the package in the `package.json` file.

Add the firebase admin SDK first to connect this API to firestore.

# IMPORTANT

Make sure you create user data first in Firebase Authentication. User data : email & userId.
After you created that, then you will use that data to create it in Firestore Database

There are 2 Url that you can use:

Asia-Southeast2
`GET /https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities`

US-Central1
`GET /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities`

# API ENDPOINTS

This is the way how you can interact to the firestore database collections. 
The first thing you have to do is : create userIdentities with the user data that you can get from Firebase Authentication. After that, you can update the userIdentities by completing all of the data you need.

## Create userIdentities

### Request

`POST /userIdentities/`

Please fill the body with the data that you can get from Firebase Authentication. The body only contains: `email & userId`

Asia-Southeast2
`POST /https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities`

US-Central1
`POST /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities`

    curl -i -H 'Accept: application/json' -X POST -d 'email=test@test.com&userId=8Tse0HYBOuddOOSGM7wAtXtfSIZ2' https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities
    
    curl -i -H 'Accept: application/json' -X POST -d 'email=test@test.com&userId=8Tse0HYBOuddOOSGM7wAtXtfSIZ2' https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities)

### Response

    HTTP/1.1 201 Created
    Content-Type: application/json; charset=utf-8
    Etag: W/"41-IPfm95HKh5kzWuFudFTb3W41eac"
    Function-Execution-Id: 496m5n03wer1
    X-Powered-By: Express
    X-Cloud-Trace-Context: 807b6af84a8d31a69f872225ad861e94;o=1
    Date: Thu, 09 Jun 2022 02:38:41 GMT
    Server: Google Frontend
    Content-Length: 65
    Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"

    {"email":"test@test.com,"userId":"8Tse0HYBOuddOOSGM7wAtXtfSIZ2","status":success}

## Get All userIdentities

### Request

`GET /userIdentities`

Asia-Southeast2
`GET /https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities`

US-Central1
`GET /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities`

    curl -i -H 'Accept: application/json' https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities
    
    curl -i -H 'Accept: application/json' https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities

### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Etag: W/"1e08d-ulTFtiwcrihBz7YiH/O3Qab8lGc"
    Function-Execution-Id: 496mk054a6gn
    X-Powered-By: Express
    X-Cloud-Trace-Context: c68253323190e26d16bda6e17a81849f;o=1
    Date: Thu, 09 Jun 2022 02:21:38 GMT
    Server: Google Frontend
    Content-Length: 123021
    Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"

    []
    
    The full results list has been hidden because the number of results is too large.

## Get userIdentities Spesific By ID

### Request
`GET /userIdentities/userId`

userId can be found in firestore database. The example of userId: `8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

Asia-Southeast2
`GET /https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities/userId`

US-Central1
`GET /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities/userId`

    curl -i -H 'Accept: application/json' https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2
    
    curl -i -H 'Accept: application/json' https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2

### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Etag: W/"41-IPfm95HKh5kzWuFudFTb3W41eac"
    Function-Execution-Id: 496m5n03wer1
    X-Powered-By: Express
    X-Cloud-Trace-Context: 807b6af84a8d31a69f872225ad861e94;o=1
    Date: Thu, 09 Jun 2022 02:38:41 GMT
    Server: Google Frontend
    Content-Length: 65
    Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"

    {"userId":"8Tse0HYBOuddOOSGM7wAtXtfSIZ2","email":"test@test.com"}
    

## Delete userIdentities By ID

### Request

`DELETE /userIdentities/userId`

userId can be found in firestore database. The example of userId: `8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

Asia-Southeast2
`GET /https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities/userId`

US-Central1
`GET /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities/userId`

    curl -i -H 'Accept: application/json' -X DELETE https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2
    
    curl -i -H 'Accept: application/json' -X DELETE https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2

### Response

    HTTP/1.1 200 OK
    Content-Type: application/json; charset=utf-8
    Etag: W/"34-HskEnffCc9+ISkwm6dgA7G28WhU"
    Function-Execution-Id: p44m5zr3w1q8
    X-Powered-By: Express
    X-Cloud-Trace-Context: 2b71c64aaa46ff6238dae3082ebc7fdd;o=1
    Date: Thu, 09 Jun 2022 03:36:27 GMT
    Server: Google Frontend
    Content-Length: 52
    Alt-Svc: h3=":443"; ma=2592000,h3-29=":443"; ma=2592000,h3-Q050=":443"; ma=2592000,h3-Q046=":443"; ma=2592000,h3-Q043=":443"; ma=2592000,quic=":443"; ma=2592000; v="46,43"

    {"message":"Delete user identities is successfully"}









## Get list of Things again

### Request

`GET /thing/`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 74

    [{"id":1,"name":"Foo","status":"new"},{"id":2,"name":"Bar","status":null}]

## Change a Thing's state

### Request

`PUT /thing/:id/status/changed`

    curl -i -H 'Accept: application/json' -X PUT http://localhost:7000/thing/1/status/changed

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"id":1,"name":"Foo","status":"changed"}

## Get changed Thing

### Request

`GET /thing/id`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 40

    {"id":1,"name":"Foo","status":"changed"}

## Change a Thing

### Request

`PUT /thing/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'name=Foo&status=changed2' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:31 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed2"}

## Attempt to change a Thing using partial params

### Request

`PUT /thing/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'status=changed3' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed3"}

## Attempt to change a Thing using invalid params

### Request

`PUT /thing/:id`

    curl -i -H 'Accept: application/json' -X PUT -d 'id=99&status=changed4' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Foo","status":"changed4"}

## Change a Thing using the _method hack

### Request

`POST /thing/:id?_method=POST`

    curl -i -H 'Accept: application/json' -X POST -d 'name=Baz&_method=PUT' http://localhost:7000/thing/1

### Response

    HTTP/1.1 200 OK
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 200 OK
    Connection: close
    Content-Type: application/json
    Content-Length: 41

    {"id":1,"name":"Baz","status":"changed4"}

## Change a Thing using the _method hack in the url

### Request

`POST /thing/:id?_method=POST`

    curl -i -H 'Accept: application/json' -X POST -d 'name=Qux' http://localhost:7000/thing/1?_method=PUT

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: text/html;charset=utf-8
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Delete a Thing

### Request

`DELETE /thing/id`

    curl -i -H 'Accept: application/json' -X DELETE http://localhost:7000/thing/1/

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:32 GMT
    Status: 204 No Content
    Connection: close


## Get deleted Thing

### Request

`GET /thing/1`

    curl -i -H 'Accept: application/json' http://localhost:7000/thing/1

### Response

    HTTP/1.1 404 Not Found
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 404 Not Found
    Connection: close
    Content-Type: application/json
    Content-Length: 35

    {"status":404,"reason":"Not found"}

## Delete a Thing using the _method hack

### Request

`DELETE /thing/id`

    curl -i -H 'Accept: application/json' -X POST -d'_method=DELETE' http://localhost:7000/thing/2/

### Response

    HTTP/1.1 204 No Content
    Date: Thu, 24 Feb 2011 12:36:33 GMT
    Status: 204 No Content
    Connection: close

