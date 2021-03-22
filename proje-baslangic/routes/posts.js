const express = require('express');
const router = express.Router();
const Post  = require('../models/Post');
router.get('/new', (req, res) => {
    res.render('homes/addpost');
});
router.post('/test', (req, res) => {
    console.log(req.body);
    Post.create(req.body);
    res.redirect('/');
});

module.exports = router


