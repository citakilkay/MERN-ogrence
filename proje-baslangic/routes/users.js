const express = require('express');
const Post = require('../models/Post');
const router = express.Router();
const User = require('../models/User');

router.get('/register', (req, res) => {
    console.log(req.session);
    res.render('homes/register');
});
router.post('/register', (req, res) => {
    //console.log(req.body);
    User.create(req.body, (error, user) => {
        req.session.sessionFlash = {
            type : 'alert alert-danger',
            message : 'Kullanıcı oluşturuldu.'
        }
        res.redirect('/users/login');
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
                //user session
                req.session.userId = user._id;
                console.log(req.session);
                res.redirect('/');
            } else {
                res.redirect('/users/login');
            }
        } else {
            res.redirect('/users/register');
        }
    });
})
module.exports = router;