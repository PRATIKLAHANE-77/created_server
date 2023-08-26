// const http = require('http');

// const server = http.createServer((req,res)=>{
//     res.end('hello pratik');
// })


// server.listen(4000, '127.0.0.1', () => {
//     console.log('listning to the port number 4000');
// })


const http = require('http');

const server = http.createServer((req, res) => {
    res.end('Hello Pratik');
});

server.listen(4000, '127.0.0.1', () => {
    console.log('Pratik Lahane');
});