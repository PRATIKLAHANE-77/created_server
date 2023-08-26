// // Welcome to my Node Js project

// const http = require("http");

// const server = http.createServer((req, res) => {
//   res.setHeader("Content-Type", "text/html");
//   res.write("<html>");
//   res.write("<head><title>My First Page</title><head>");
//   res.write("<body><h1>Welcome to my Node Js project</h1></body>");
//   res.write("</html>");
//   res.end();
// });

// server.listen(4000, "127.0.0.1");

const http = require('http');
const server = http.createServer((req,res)=>{
    res.setHeader("Content-Type", "text/html");
    if(req.url === '/home') {
        res.write('<html><head><title>Home</title></head><body>Welcome home</body></html>');
    }
    else if(req.url === '/about') {
        res.write('<html><head><title>about</title></head><body>Welcome to About Us page</body></html>');
    }
    else if(req.url === '/node') {
        res.write('<html><head><title>node</title></head><body>Welcome to my Node Js project</body></html>')
    }
    else{
        res.write('<html><head><title>404 Not Found</title></head><body>Page not found</body></html>');
        res.statusCode = 404;
    }
    res.end();

})

server.listen(4000,'127.0.0.1');

