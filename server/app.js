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