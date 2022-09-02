const router = require('express').Router();
// const session = require('express-session');
const User = require('../models/User');

// REGISTER
router.post('/register', async (req, res) => {
    const newUser = new User({
        username: req.body.username,
        password: req.body.password
    });

    try {
        const savedUser = await newUser.save();
        res.status(200).json(savedUser);
    } catch (error) {
        res.status(500).json(error);
    }
});
// Lo que puedo hacer es crear la vista de register
// (username, pass, email, token) y si sabe el token
// (inventado por mi) se crea el usuario
// if token === "lo que me pinte" se crea el usuario
// si no error

// LOGIN
router.post('/login', async (req, res) => {
    try {
        const user = await User.findOne({ username: req.body.username });
        !user && res.status(401).json("Wrong Credentials!");
        user.password !== req.body.password && res.status(401).json("Wrong Credentials!");
        res.status(200).json("Access Granted!");
        // session = req.session;
        // session.userId = req.body.username;
        console.log(req.session);
    } catch (error) {
        res.status(500).json(error);
    }
});

// router.post('/logout', (req, res) => {
//     req.session.destroy()
//     res.redirect('/');
//     res.end();
// });

// LOGOUT
// router.delete('/logout', (req, res) => {
//     if (req.session) {
//         req.session.destroy(err => {
//             if (err) {
//                 res.status(400).send("Unable to log out");
//             } else {
//                 res.status(200).send("Logout successful")
//             }
//         });
//     } else {
//         //res.redirect('/');
//         res.end();
//     }
// });

module.exports = router;
