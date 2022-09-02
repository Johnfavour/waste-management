const router = require('express').Router();
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
        //res.render('/admin')
    } catch (error) {
        res.status(500).json(error);
    }
});

// LOGOUT
router.delete('/logout', (req, res) => {
    if (req.session) {
        req.session.destroy(err => {
            if (err) {
                res.status(400).send("Unable to log out");
            } else {
                res.status(200).send("Logout successful")
            }
        });
    } else {
        //res.redirect('/');
        res.end();
    }
});


module.exports = router;
