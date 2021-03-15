const http = require('http');

const hostName = '127.0.0.1';
const port = 3000;

const server = http.createServer( (req, res) => {
    console.log(req.url);
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/plain');
    res.end('Hello NODE.JS');
})

server.listen(port, hostName, () => {
    console.log(`Server şurada Çalışıyor: http://${hostName}:${port}/`);
})

// res.setHeader(name, value);
// server.listen(port, hostname, backlog, callback);

