const http = require('http');

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

const server = http.createServer( (req, res) =>{
    if (req.url === '/') {
        return res.end('HOME PAGE')
    } else if (req.url === '/about') {
        return res.end('ABOUT PAGE')
    } else if (req.url === '/contact') {
        return res.end('CONTACT PAGE')
    } else {
        res.statusCode = 404;
        res.end('SAYFA BULUNAMADI');
    }
})

server.listen(port, hostName, () => {
    console.log(`Server şurada Çalışıyor: http://${hostName}:${port}/`);
})