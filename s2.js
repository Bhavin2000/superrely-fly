// server.js - Your Private Relay Node
const http = require('http');
const Gun = require('gun');

const server = http.createServer(function (req, res) {
    if (Gun.serve(req, res)) { return } // Handle Gun requests
    res.writeHead(200, { 'Content-Type': 'text/plain' });
    res.end('Relay is Active!');
});

const gun = Gun({
    web: server,
    file: 'data'
});

server.listen(8765, () => {
    console.log('---------------------------------------');
    console.log('✅ Relay is running at http://localhost:8765/gun');
    console.log('---------------------------------------');
});
