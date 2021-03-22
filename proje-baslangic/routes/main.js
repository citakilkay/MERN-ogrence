const express = require('express');
const Post = require('../models/Post');
const router = express.Router(); // This is a middleware

router.get('/', (req, res) => { // tüm app'ler routerla değişti.
    res.render('homes/index'); // --> res.render yazdığı için views klasörünü baz alıyor.
    // --> böyle yazıyorsun ama main.handlebars'tan alır içeriği
    // res.sendFile(path.resolve(__dirname, 'index.html'));
});
router.get('/about', (req, res) => {
    res.render('homes/about');
    //res.sendFile(path.resolve(__dirname, 'about.html'));
});
router.get('/blog', (req, res) => {
    res.render('homes/blog');
    Post.find({}).then(posts => {
        res.render('homes/blog', {posts: posts});
    });
    //res.sendFile(path.resolve(__dirname, 'blog.html'));
});
router.get('/contact', (req, res) => {
    res.render('homes/contact');
    // res.sendFile(path.resolve(__dirname, 'contact.html'))
});
router.get('/blog-single', (req, res) => {
    res.render('homes/blog-single');
});
router.get('/posts/new', (req, res) => {
    res.render('homes/addpost');
});
//addpost.handlebars'daki form action attributenda /post/test yazdığı için buraya yönlendirilir.
/*router.post('/posts/test', (req, res) => { //bu directory'de bir şey post edildiği zaman yani submit gibi bir şey aşağıdakini gerçekleştir.
    //res.send('test OK');
    console.log(req.body); // requestin body'si
    res.redirect('/');
});*/
router.get('/login', (req, res) => {
    res.render('homes/login');
});
router.get('/register', (req, res) => {
    res.render('homes/register');
});

module.exports = router;