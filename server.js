const http = require("http");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  // res.write("<h1>Hello World</h1>");
  // res.write("<p>Hi There</p>");

  res.end();
});

server.listen(4000, "localhost", () => {
  console.log("server listening on port 4000");
});
