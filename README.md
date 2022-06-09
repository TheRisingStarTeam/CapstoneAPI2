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

# API - userIdentities

This is the way how you can interact to the firestore database collections. 
The first thing you have to do is : create userIdentities with the user data that you can get from Firebase Authentication. After that, you can update the userIdentities by completing all of the data you need.

## Create userIdentities

### Request

`POST /userIdentities/` 

Please fill the body with the data that you can get from Firebase Authentication. The body only contains: `email & userId`

#### Postman Request:
`POST /https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities`

`POST /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities`

Body (JSON): 

        {
            "email":"test@test.com",
            "userId":"8Tse0HYBOuddOOSGM7wAtXtfSIZ2"
        }

#### cURL Request:

    curl -d "email=test@test.com&userId=8Tse0HYBOuddOOSGM7wAtXtfSIZ2" -X POST https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities
    
    curl -d "email=test@test.com&userId=8Tse0HYBOuddOOSGM7wAtXtfSIZ2" -X POST https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities

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

    {"status":"success","message":"Create user identity is successfully"}

## Get All userIdentities

### Request

`GET /userIdentities`

#### Postman Request:
`GET /https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities`

`GET /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities`

#### cURL Request:

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

#### Postman Request:
`GET /https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

`GET /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

#### cURL Request:

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

## Update userIdentities By ID

### Request

`POST /userIdentities/userId`

The data type of each body request are:
Please complete the body request with the list below.

#### Postman Request:
`PUT /https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

`PUT /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

Body (JSON):

        {
            "address": {
                "addressLine1":"Jalan Cempaka No 1 Bogor",
                "city": "Kota Bogor",
                "country": "Indonesia",
                "postal": "120987",
                "provinceState": "Jawa Barat"
            },
            "dateOfBirth": "March 1, 2000 at 4:01:24 PM UTC+7",
            "history": ["VMw4nBYUEzZxS7LPV3ox","5f76577f7822d0e6cb29aa318e4c5568"],
            "interest": ["art"],
            "name":"test",
            "phoneNumber": "08123456789",
            "socialMedia": {
                "facebook": "test@facebook.com",
                "instagram": "test@instagram.com"
            }
        }
        

#### cURL Request

    curl -d "email=test@test.com&userId=8Tse0HYBOuddOOSGM7wAtXtfSIZ2" -X PUT https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities
    
    curl -d "email=test@test.com&userId=8Tse0HYBOuddOOSGM7wAtXtfSIZ2" -X PUT /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities

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

    {"status":"success","message":"Update user identity is successfully"}

## Delete userIdentities By ID

### Request

`DELETE /userIdentities/userId`

userId can be found in firestore database. The example of userId: `8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

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









