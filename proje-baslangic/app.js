const http = require('http');
const fs = require('fs');
const hostName = '127.0.0.1';
const port = 3000;
const express = require('express');
const exphbs = require('express-handlebars');
const app = express();
const path = require('path');
const mongoose = require('mongoose');

await mongoose.connect('mongodb://127.0.0.1/mongo_baslangic', {
    useNewUrlParser: true,
    useUnifiedTopology: true,
    useFindAndModify: false,
    useCreateIndex: true
});

app.use(express.static('public'));

app.engine('handlebars', exphbs());
app.set('view engine', 'handlebars');

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
});
console.log(http.createServer);
//console.log(path.parse(__dirname));
app.listen(port, hostName, () => {
    console.log(`Server şurada Çalışıyor: http://${hostName}:${port}/`);
});