const express = require('express');
const { findById } = require('../models/Post');
const router = express.Router();
const Post  = require('../models/Post');
const uploadFile = require('express-fileupload');
const multipart = require('connect-multiparty');
const path = require('path');
router.get('/new', (req, res) => {
    res.render('homes/addpost');
});
router.get('/:id', (req, res) => {
    console.log(req.params); // --> router için verilen parametreyi yazdırır yani id'yi.
    Post.findById(req.params.id).lean().then((post) => {
        res.render('homes/blog-single', {post: post});
    });
});
router.post('/test', (req, res) => {
    console.log(req.files);
    Post.create(req.body);
    res.redirect('/');
},multipart());

module.exports = router


