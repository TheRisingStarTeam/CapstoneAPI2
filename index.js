const functions = require("firebase-functions");

const { response } = require('express');
const express = require('express');

const PORT = 3000;
const app = express();
const crypto = require('crypto');

const admin = require('firebase-admin');
const credentials = require('./the-rising-stars-firebase-adminsdk-o89ao-398b4baa74.json');


app.use(express.json());
app.use(express.urlencoded({extended: true}));

admin.initializeApp({
    credential: admin.credential.cert(credentials)
});

const db = admin.firestore();


// ADD USER IDENTITIES 
app.post('/userIdentities', async (req, res) => {
    try {
        console.log('req.body');
        
        const userJson = {
            userId: crypto.randomBytes(16).toString("hex"),
            name : req.body.name,
            dateOfBirth : req.body.dateOfBirth,
            phoneNumber: req.body.phoneNumber,
            email: req.body.email,
            address: req.body.address,
            interest: req.body.interest,
            socialMedia: req.body.socialMedia,
            organizerId: crypto.randomBytes(16).toString("hex"),
            history: req.body.history,
            recommendations: req.body.recommendations

        };
        
        const response = await db.collection("userIdentities").add(userJson);
        res.status(201).json({
            status: "success",
            message: "Create data successfully"
        });
    }catch(error){
        res.send(error);
    }
});

// GET USER IDENTITIES 
app.get('/userIdentities', async (req, res) => {
    try {
        const usersRef = db.collection("userIdentities");
        const response = await usersRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    } catch(error) {
        res.send(error);
    }
})

// GET USER IDENTITIES BY ID
app.get('/userIdentities/:id', async (req, res) => {
    try {
        const userRef = db.collection("userIdentities").doc(req.params.id);
        const response = await userRef.get();
        res.send(response.data());
    } catch(error) {
        res.send(error);
    }
})

// UPDATE USER IDENTITIES BY ID 
app.put('/userIdentities/:id', async (req,res) => {
    const userRef = db.collection("userIdentities").doc(req.params.id).update(req.body);
    res.json({message: 'Update user identities is succefully'});
})

// DELETE USER IDENTITIES BY ID 
app.delete('/userIdentities/:id', async (req,res) => {
    const userRef = db.collection("userIdentities").doc(req.params.id).delete();
    res.json({message: 'Delete user identities is succefully'});
})

// const PORT = process.env.PORT || 9005;
// app.listen(PORT, () => {
//     console.log(`Server is running on PORT ${PORT}.`);
// })

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});

exports.app = functions.https.onRequest(app);