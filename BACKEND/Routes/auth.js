const router = require('express').Router();
const User = require("../Model/User");
const bcrypt = require("bcrypt")

// Sign up
router.post("/register", async (req, res) => {
    try {

        const salt = await bcrypt.genSalt(10);
        const hashPassword = await bcrypt.hash(req.body.password, salt)

        const body = req.body;
        const newUser = new User({
            fullName: body.fullName,
            email: body.email,
            password: hashPassword
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

        const validPassword = await bcrypt.compare(req.body.password, user.password);
        !validPassword && res.status(400).json("Incorrect Password!")

        res.status(200).json(user)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;

