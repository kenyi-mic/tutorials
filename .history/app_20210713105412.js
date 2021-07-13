const http = require("http");

const server = http.createServer((req, res) => {
  console.log(req);
  res.write("hello world, welcome to our home page");
  res.end();
});

server.listen(5000);
