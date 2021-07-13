const http = require("http");

const server = http.createServer((req, res) => {
  if (req.url === "/") {
    res.end("hello world, welcome to our home page");
  }
  if (req.url === "/about") {
    res.end("Here is our about page");
  }
  res.end(`<h2>Oops!</h2>
  <p>We dont have this page available</p>
  <a href="/">Back to home</a>`);
});

server.listen(5000);
