import express from 'express'
import {google, signin, signup} from '../controller/auth.controller.js';
import UserData from './../models/userDatamodel.js';

const router= new express.Router();

router.post("/signup", signup)
router.post("/signin", signin)
router.post('/google', google)




// form data

router.post("/formdata", async (req, res) => {
    const { name, mobile, linkedin, github, resume } = req.body;

    try {
        const userData = new UserData({
            name,
            mobile,
            linkedin,
            github,
            resume,
        });

        await userData.save();

        res.status(201).json({ message: "User data saved successfully" });
    } catch (error) {
        console.error("Error saving user data:", error);
        res.status(500).json({ error: "An error occurred while saving user data" });
    }
});



export default router
