const router = require('express').Router();
const User = require("../Model/User")

// Sign up
router.post("/register", async (req, res) => {
    try {
        const body = req.body;
        const newUser = new User({
            fullName: body.fullName,
            email: body.email,
            password: body.password
        });
        const user = await newUser.save()
        res.status(200).json(user)
    } catch (err) {
        res.status(400).send(err)
    }
});

// Login 
router.post("/login", async (req, res) => {
    try {
        const user = await User.findOne({ email: req.body.email })
        !user && res.status(404).json("User not found!")
        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;

