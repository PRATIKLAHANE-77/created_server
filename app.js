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

// const http = require("http");
// const { text } = require("stream/consumers");
// const server = http.createServer((req, res) => {
//   if (req.url === "/") {
//     res.write("<html>");
//     res.write("<head><title>enter massage</title></head>");
//     res.write(
//       '<body><form action = "/massage" method = "POST"><label for="file">file name:</label><input type ="text" name = "massage" id = "1"><button type = "submit">Submit</button></form></body>'
//     );
//     res.write("</html>");
//     res.end();
//   } else {
//     res.writeHead(302);
//     res.write("<html>");
//     res.write("<head><title>new file</title></head>");
//     res.write('<body><form><label for = "file"> ${document.getElementById(1).value} </label><input type = "text" name = "massage"><button type = "submit">Submit</button></form></body>');
//     res.write("</html>");
//     res.end();
//   }
// });

// server.listen(3000, "127.0.0.1");

const http = require("http");       // it is a server module 
const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.write("<html>");
    res.write("<head><title>Enter message</title></head>");
    res.write(
      '<body><form action="/" ><label for="file">File name:</label><input type="text" name="massage" id="1"><button type="submit">Submit</button></form></body>'
    );
    res.write("</html>");
    res.end();
  } else if (req.url === "/massage" && req.method === "POST") {
    // Handle the POST request for /massage here
    // For simplicity, let's just respond with a message
    res.setHeader("Content-Type", "text/html");
    res.write("<html>");
    res.write("<head><title>Submitted</title></head>");
    // const val = document.getElementById(1).value;
    res.write("<body><h1>name</h1></body>");
    res.write("</html>");
    res.end();
  } else {
    res.writeHead(404);
    res.write("<html>");
    res.write("<head><title>Not Found</title></head>");
    res.write("<body><h1>404 - Not Found</h1></body>");
    res.write("</html>");
    res.end();
  }
});

server.listen(3000, "127.0.0.1", () => {
  console.log("Server is listening on port 4000");
});

