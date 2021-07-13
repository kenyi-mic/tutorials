const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello world, welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our about page");
  }
});

server.listen(5000);
