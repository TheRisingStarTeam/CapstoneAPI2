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
`https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities`

US-Central1
`https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities`

# API - userIdentities

This is the way how you can interact to the firestore database collections. 
The first thing you have to do is : create userIdentities with the user data that you can get from Firebase Authentication. After that, you can update the userIdentities by completing all of the data you need.

## Create userIdentities - `POST /userIdentities`

### Request

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

## Get All userIdentities - `GET /userIdentities`

### Request

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

## Get userIdentities Spesific By ID - `GET /userIdentities/userId`

### Request

userId & email can be found in firestore database. The example of userId: `8Tse0HYBOuddOOSGM7wAtXtfSIZ2` and email `test@test.com`.

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

## Update userIdentities By ID - `PUT /userIdentities/userId`

### Request
`important` : This endpoint can be used after created the userIdentities that contains data: email & userId. 

userId & email can be found in firestore database. The example of userId: `8Tse0HYBOuddOOSGM7wAtXtfSIZ2` and email `test@test.com`.

#### Postman Request:
`PUT /https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

`PUT /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

Body (JSON):

        {
            "address": {
                "addressLine1":"Jalan Merdeka No 1 Jakarta",
                "city": "Kota Jakarta",
                "country": "Indonesia",
                "postal": "10250",
                "provinceState": "DKI Jakarta"
            },
            "dateOfBirth": "December 25, 2000 at 4:01:24 PM UTC+7",
            "history": ["024654e3219403c9002b7687f7e7ce63","0ad868669641b86d8aee8243b7df050f"],
            "interest": ["sport", "gaming", "music"],
            "name":"Adul",
            "phoneNumber": "08123456789",
            "socialMedia": {
                "facebook": "adul@facebook.com",
                "instagram": "adul@instagram.com"
            }
        }
       
  Note: 
  The history can be filled with the eventId in collection events (Firebase Firestore). Interest can be filled by using the list category here https://docs.google.com/document/d/1npusVo3nQDopZ58SQ9OhBukyB6_3vl0NV5ckXOB0mNk/edit#
  

#### cURL Request

    ....
    
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

    {"status":"success","message":"Update user identity is successfully"}

## Delete userIdentities By ID - `DELETE /userIdentities/userId`

### Request

userId & email can be found in firestore database. The example of userId: `8Tse0HYBOuddOOSGM7wAtXtfSIZ2` and email `test@test.com`.

#### Postman Request:
`DELETE /https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

`DELETE /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

#### cURL Request:

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


## Update Recommendation By ID - `PUT /recommendation/userId`
`important`: This endpoints can only be used for Machine learning developer to update the result data of recommendation from machine learning program that has been preprocessing the datasets.

### Request
This endpoint can only update the field recommendation in firestore database

#### Postman Request:
`PUT /https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

`PUT /https://us-central1-the-rising-stars.cloudfunctions.net/app/userIdentities/8Tse0HYBOuddOOSGM7wAtXtfSIZ2`

Body (JSON):

        {
                "recommendations": ["sport", "gaming", "music"]
        }
  
#### cURL Request

    ....
    
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

    {"status":"success","message":"Update recommendation is successfully"}


# API - events
## Get All Events `GET /events`
### Request
`GET https://asia-southeast2-the-rising-stars.cloudfunctions.net/app-1/events`
`GET https://us-central1-the-rising-stars.cloudfunctions.net/app/events`

### Response (JSON)
Body (JSON): 

        {
            "email":"test@test.com",
            "userId":"8Tse0HYBOuddOOSGM7wAtXtfSIZ2"
        }

        {
                "name": "The Breakaway Championship",
                "active": false,
                "categories": [
                    "Sport"
                ],
                "banner": "https://bduwuieniddii.com",
                "rules": "lorem ipsum dolor sit amet",
                "participants": [
                    "YkTvEksR31cjKOxHmF6VyS9HIKf1",
                    "eeeLojCHGAa070gCb45PRO46bhE3",
                    "3ZhUV7kd3vTR3iZVIbi1OHxXGLt1"
                ],
                "description": "lorem ipsum dolor sit amet...",
                "tos": "admin",
                "hashtags": "risingstars2022",
                "organizers": [
                    "YkTvEksR31cjKOxHmF6VyS9HIKf1",
                    "eeeLojCHGAa070gCb45PRO46bhE3",
                    "3ZhUV7kd3vTR3iZVIbi1OHxXGLt1"
                ],
                "eventId": "024654e3219403c9002b7687f7e7ce63",
                "postsId": "9d709374c8cbd019ba79be67d56d43d3" 
        }
