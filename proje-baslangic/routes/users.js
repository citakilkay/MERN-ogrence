const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
const User = require('../models/User');

router.get('/register', (req, res) => {
    res.render('homes/register');
});
router.post('/register', (req, res) => {
    console.log(req.body);
    User.create(req.body, (error, user) => {
        res.redirect('/');
    });
});
router.get('/login', (req, res) => {
    res.render('homes/login');
});
router.post('/login', (req, res) => {
    const {email, password} = req.body;
    User.findOne({email}, (email, user) => {
        if (user) {
            if(user.password === password) {
                res.redirect('/');
            } else {
                res.redirect('/login');
            }
        } else {
            res.redirect('/register');
        }
    });
})
module.exports = router;