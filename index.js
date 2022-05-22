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
            userId: req.body.userId,
            email: req.body.email
        };
        
        const response = await db.collection("userIdentities").doc(userJson.userId).set(userJson);
        res.status(201).json({
            status: "success",
            message: "Create user identity is successfully"
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
    const userJson = {
        name : req.body.name,
        dateOfBirth : req.body.dateOfBirth,
        phoneNumber: req.body.phoneNumber,
        address: req.body.address,
        interest: req.body.interest,
        socialMedia: req.body.socialMedia,
        organizerId: crypto.randomBytes(16).toString("hex"),
        history: req.body.history,
        recommendations: req.body.recommendations
    };

    const userRef = db.collection("userIdentities").doc(req.params.id).update(userJson);
    res.json({message: 'Update user identities is successfully'});
})

// DELETE USER IDENTITIES BY ID 
app.delete('/userIdentities/:id', async (req,res) => {
    const userRef = db.collection("userIdentities").doc(req.params.id).delete();
    res.json({message: 'Delete user identities is successfully'});
})

// ADD EVENTS
app.post('/events', async (req, res) => {
    try {
        console.log('req.body');
        const eventJson = {
            eventId: crypto.randomBytes(16).toString("hex"),
            banner : req.body.banner,
            active : req.body.active,
            name: req.body.name,
            categories: req.body.categories,
            hashtags: req.body.hashtags,
            rules: req.body.rules,
            description: req.body.description,
            participants: req.body.participants,
            organizers: req.body.organizers,
            tos: req.body.tos,
            postsId: crypto.randomBytes(16).toString("hex"),
            assignments: req.body.assignments
        };
        
        const response = await db.collection("events").doc(eventJson.eventId).set(eventJson);
        res.status(201).json({
            status: "success",
            message: "Create event is successfully"
        });
    }catch(error){
        res.send(error);
    }
});

// GET EVENTS 
app.get('/events', async (req, res) => {
    try {
        const eventsRef = db.collection("events");
        const response = await eventsRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    } catch(error) {
        res.send(error);
    }
})

// GET EVENTS BY ID
app.get('/events/:id', async (req, res) => {
    try {
        const eventsRef = db.collection("events").doc(req.params.id);
        const response = await eventsRef.get();
        res.send(response.data());
    } catch(error) {
        res.send(error);
    }
})

// UPDATE EVENTS BY ID 
app.put('/events/:id', async (req,res) => {
    const eventsRef = db.collection("events").doc(req.params.id).update(req.body);
    res.json({message: 'Update event is successfully'});
})

// DELETE EVENTS BY ID 
app.delete('/events/:id', async (req,res) => {
    const userRef = db.collection("events").doc(req.params.id).delete();
    res.json({message: 'Delete event is successfully'});
})

// ADD ORGANIZER DETAIL
app.post('/organizerDetail', async (req, res) => {
    try {
        console.log('req.body');
        const organizerJson = {
            organizerId: crypto.randomBytes(16).toString("hex"),
            organization : req.body.organization,
            verified : req.body.verified
        };
        
        const response = await db.collection("organizerDetail").doc(organizerJson.organizerId).set(organizerJson);
        res.status(201).json({
            status: "success",
            message: "Create organizer detail is successfully"
        });
    }catch(error){
        res.send(error);
    }
});

// GET ORGANIZER DETAIL 
app.get('/organizerDetail', async (req, res) => {
    try {
        const organizerRef = db.collection("organizerDetail");
        const response = await organizerRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    } catch(error) {
        res.send(error);
    }
})

// GET ORGANIZER DETAIL BY ID
app.get('/organizerDetail/:id', async (req, res) => {
    try {
        const organizerRef = db.collection("organizerDetail").doc(req.params.id);
        const response = await organizerRef.get();
        res.send(response.data());
    } catch(error) {
        res.send(error);
    }
})

// UPDATE ORGANIZER DETAIL BY ID 
app.put('/organizerDetail/:id', async (req,res) => {
    const organizerRef = db.collection("organizerDetail").doc(req.params.id).update(req.body);
    res.json({message: 'Update organizer detail is successfully'});
})

// DELETE ORGANIZER DETAIL BY ID 
app.delete('/organizerDetail/:id', async (req,res) => {
    const organizerRef = db.collection("organizerDetail").doc(req.params.id).delete();
    res.json({message: 'Delete organizer detail is successfully'});
})

// ADD SUBMISSIONS
app.post('/submissions', async (req, res) => {
    try {
        console.log('req.body');
        const submissionJson = {
            submissionId: crypto.randomBytes(16).toString("hex"),
            title : req.body.title,
            dateOfSubmission : req.body.dateOfSubmission,
            type: req.body.type,
            content: req.body.content,
            description: req.body.description,
            author: req.body.author,
            review: req.body.review,
            score: req.body.score
        };
    
        const response = await db.collection("submissions").doc(submissionJson.submissionId).set(submissionJson);
        res.status(201).json({
            status: "success",
            message: "Create submission is successfully"
        });
    }catch(error){
        res.send(error);
    }
});

// GET SUBMISSIONS
app.get('/submissions', async (req, res) => {
    try {
        const submissionRef = db.collection("submissions");
        const response = await submissionRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    } catch(error) {
        res.send(error);
    }
})

// GET SUBMISSIONS BY ID
app.get('/submissions/:id', async (req, res) => {
    try {
        const submissionRef = db.collection("submissions").doc(req.params.id);
        const response = await submissionRef.get();
        res.send(response.data());
    } catch(error) {
        res.send(error);
    }
})

// UPDATE SUBMISSIONS BY ID 
app.put('/submissions/:id', async (req,res) => {
    const submissionRef = db.collection("submissions").doc(req.params.id).update(req.body);
    res.json({message: 'Update submission is successfully'});
})

// DELETE SUBMISSIONS BY ID 
app.delete('/submissions/:id', async (req,res) => {
    const submissionRef = db.collection("submissions").doc(req.params.id).delete();
    res.json({message: 'Delete submission is successfully'});
})

// ADD POSTS
app.post('/posts', async (req, res) => {
    try {
        console.log('req.body');
        const postJson = {
            postId: crypto.randomBytes(16).toString("hex"),
            eventId: crypto.randomBytes(16).toString("hex"),
            title : req.body.title,
            content: req.body.content,
            recipients: req.body.recipients,
        };
    
        const response = await db.collection("posts").doc(postJson.postId).set(postJson);
        res.status(201).json({
            status: "success",
            message: "Create post is successfully"
        });
    }catch(error){
        res.send(error);
    }
});

// GET POSTS
app.get('/posts', async (req, res) => {
    try {
        const postRef = db.collection("posts");
        const response = await postRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    } catch(error) {
        res.send(error);
    }
})

// GET POSTS BY ID
app.get('/posts/:id', async (req, res) => {
    try {
        const postRef = db.collection("posts").doc(req.params.id);
        const response = await postRef.get();
        res.send(response.data());
    } catch(error) {
        res.send(error);
    }
})

// UPDATE POSTS BY ID 
app.put('/posts/:id', async (req,res) => {
    const postRef = db.collection("posts").doc(req.params.id).update(req.body);
    res.json({message: 'Update post is successfully'});
})

// DELETE POSTS BY ID 
app.delete('/posts/:id', async (req,res) => {
    const postRef = db.collection("posts").doc(req.params.id).delete();
    res.json({message: 'Delete post is successfully'});
})

// ADD ANNOUNCEMENTS
app.post('/announcements', async (req, res) => {
    try {
        console.log('req.body');
        const announcementJson = {
            announcementId: crypto.randomBytes(16).toString("hex"),
            eventId: crypto.randomBytes(16).toString("hex"),
            winner : req.body.winner,
            submission: req.body.submission,
            extraContent: req.body.extraContent,
        };
    
        const response = await db.collection("announcements").doc(announcementJson.announcementId).set(announcementJson);
        res.status(201).json({
            status: "success",
            message: "Create announcement is successfully"
        });
    }catch(error){
        res.send(error);
    }
});

// GET ANNOUNCEMENTS
app.get('/announcements', async (req, res) => {
    try {
        const announcementRef = db.collection("announcements");
        const response = await announcementRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    } catch(error) {
        res.send(error);
    }
})

// GET ANNOUNCEMENTS BY ID
app.get('/announcements/:id', async (req, res) => {
    try {
        const announcementRef = db.collection("announcements").doc(req.params.id);
        const response = await announcementRef.get();
        res.send(response.data());
    } catch(error) {
        res.send(error);
    }
})

// UPDATE ANNOUNCEMENTS BY ID 
app.put('/announcements/:id', async (req,res) => {
    const announcementRef = db.collection("announcements").doc(req.params.id).update(req.body);
    res.json({message: 'Update announcement is successfully'});
})

// DELETE ANNOUNCEMENTS BY ID 
app.delete('/announcements/:id', async (req,res) => {
    const announcementRef = db.collection("announcements").doc(req.params.id).delete();
    res.json({message: 'Delete announcement is successfully'});
})

// ADD ASSIGNMENTS
app.post('/assignments', async (req, res) => {
    try {
        console.log('req.body');
        const assignmentJson = {
            assignmentId: crypto.randomBytes(16).toString("hex"),
            eventId: crypto.randomBytes(16).toString("hex"),
            title : req.body.title,
            rules: req.body.rules,
            description: req.body.description,
        };
    
        const response = await db.collection("assignments").doc(assignmentJson.assignmentId).set(assignmentJson);
        res.status(201).json({
            status: "success",
            message: "Create assignment is successfully"
        });
    }catch(error){
        res.send(error);
    }
});

// GET ASSIGNMENTS
app.get('/assignments', async (req, res) => {
    try {
        const assignmentRef = db.collection("assignments");
        const response = await assignmentRef.get();
        let responseArr = [];
        response.forEach(doc => {
            responseArr.push(doc.data());
        });
        res.send(responseArr);
    } catch(error) {
        res.send(error);
    }
})

// GET ASSIGNMENTS BY ID
app.get('/assignments/:id', async (req, res) => {
    try {
        const assignmentRef = db.collection("assignments").doc(req.params.id);
        const response = await assignmentRef.get();
        res.send(response.data());
    } catch(error) {
        res.send(error);
    }
})

// UPDATE ASSIGNMENTS BY ID 
app.put('/assignments/:id', async (req,res) => {
    const assignmentRef = db.collection("assignments").doc(req.params.id).update(req.body);
    res.json({message: 'Update assignment is successfully'});
})

// DELETE ASSIGNMENTS BY ID 
app.delete('/assignments/:id', async (req,res) => {
    const assignmentRef = db.collection("assignments").doc(req.params.id).delete();
    res.json({message: 'Delete assignment is successfully'});
})

app.listen(PORT, () => {
    console.log('Server is running on PORT:', PORT);
});

exports.app = functions.https.onRequest(app);
