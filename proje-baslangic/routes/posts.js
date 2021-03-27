const express = require('express');
const router = express.Router();
const Post  = require('../models/Post');
const uploadFile = require('express-fileupload');
const multipart = require('connect-multiparty');
const path = require('path');
router.get('/new', (req, res) => {
    if(req.session.userId) {
        // early return
        return res.render('homes/addpost');
    } 
        res.render('homes/login');
});
router.get('/:id', (req, res) => {
    console.log(req.params); // --> router için verilen parametreyi yazdırır yani id'yi.
    Post.findById(req.params.id).lean().then((post) => {
        res.render('homes/blog-single', {post: post});
    });
});
router.post('/test', (req, res) => {
    let post_image = req.files.post_image;
    post_image.mv(path.resolve(__dirname, '../public/img/post-images', post_image.name)); // requestten alınan bu dosyayı publicdeki image klasörüne aktar.ismi de kendi ismi olsun.
    Post.create({
        ...req.body,
        post_image: `/img/post-images/${post_image.name}`
    }, (err, post) => {
        req.session.sessionFlash = {
            type: 'alert alert-success',
            messsage: 'Postunuz başarılı bir şekilde oluşturuldu.'
        }
    });
    //console.log(req.session);
    res.redirect('/blog');
},multipart());

module.exports = router


