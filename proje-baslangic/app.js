const http = require('http');
const fs = require('fs');
const hostName = '127.0.0.1';
const port = 3000;
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');
const fileUpload = require('express-fileupload');

mongoose.connect('mongodb://127.0.0.1/mongo_initdb', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});
app.use(fileUpload());

app.use(express.static('public')); //static dosyaları istediği zaman public rout'ını kullan

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

const main = require('./routes/main');
const posts = require('./routes/posts');
app.use('/posts', posts);
app.use('/', main); // --> slash istediği zaman main routerını kullan


/*
app.get('/', (req, res) => {
    res.render('homes/index'); // --> res.render yazdığı için views klasörünü baz alıyor.
    // --> böyle yazıyorsun ama main.handlebars'tan alır içeriği
    // res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.get('/about', (req, res) => {
    res.render('homes/about');
    //res.sendFile(path.resolve(__dirname, 'about.html'));
});
app.get('/blog', (req, res) => {
    res.render('homes/blog');
    //res.sendFile(path.resolve(__dirname, 'blog.html'));
});
app.get('/contact', (req, res) =>{
    res.render('homes/contact');
   // res.sendFile(path.resolve(__dirname, 'contact.html'))
});
app.get('/blog-single', (req, res) => {
    res.render('homes/blog-single');
});*/
//console.log(http.createServer);
//console.log(path.parse(__dirname));
app.listen(port, hostName, () => {
    console.log(`Server şurada Çalışıyor: http://${hostName}:${port}/`);
});