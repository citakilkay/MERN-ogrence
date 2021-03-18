const http = require('http');
const fs = require('fs');
const hostName = '127.0.0.1';
const port = 3000;

const express = require('express');
const app = express();
const path = require('path');

app.use(express.static('public'))

app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html'));
});
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html'));
});
app.get('/blog', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'blog.html'));
});
app.get('/contact', (req, res) =>{
    res.sendFile(path.resolve(__dirname, 'contact.html'))
})
app.listen(port, hostName, () => {
    console.log(`Server şurada Çalışıyor: http://${hostName}:${port}/`);
});