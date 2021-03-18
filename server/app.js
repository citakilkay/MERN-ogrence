const http = require('http');
const fs = require('fs');
const hostName = '127.0.0.1';
const port = 3000;

/*const server = http.createServer( (req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello NODE.JS');
})

server.listen(port, hostName, () => {
    console.log(`Server şurada Çalışıyor: http://${hostName}:${port}/`);
})
*/

// res.setHeader(name, value);
// server.listen(port, hostname, backlog, callback);


/* Without Express.JS creating a server
const indexPage = fs.readFileSync('index.html'); // --> senkron olarak okur.readFile()'ı kullanırsan async olarak çalıştığı için invalid callback func hatası alırsın
const notFound = fs.readFileSync('notFound.html'); // belki de lazyloading bunun async'u ile yapılmıştır.
const server = http.createServer( (req, res) =>{
    if (req.url === '/') {
        return res.end(indexPage)
    } else if (req.url === '/about') {
        return res.end('ABOUT PAGE')
    } else if (req.url === '/contact') {
        return res.end('CONTACT PAGE')
    } else {
        res.statusCode = 404;
        res.end(notFound);
    }
})

server.listen(port, hostName, () => {
    console.log(`Server şurada Çalışıyor: http://${hostName}:${port}/`);
})
*/

const express = require('express');
const app = express();
const path = require('path'); // fileların yolunu sendfile'a falan tanımlatmak için nodejs'teki fs gibi
/*
app.use('/test',(req, res, next) => {
    console.log('Allah Yar Yar');
    next();
})
*/

app.use(express.static('public'))
app.get('/', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'index.html')); // _dirname şu an bulunulan directory'de ara.
});
app.get('/about', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'about.html')); // _dirname şu an bulunulan directory'de ara.
});
app.get('/users/:userID/movies/:moviesID', (req, res) => {
     res.send(
    `<h1>Kullanıı Adı: ${req.params.userID}</h1>
    <h1>Film Adı: ${req.params.moviesID}</h1>`
    )
})

app.listen(port, hostName, () => {
    console.log(`Server şurada Çalışıyor: http://${hostName}:${port}/`)
});

//app.get( path, callback )
//app.listen([port[, host[, backlog]]][, callback])

