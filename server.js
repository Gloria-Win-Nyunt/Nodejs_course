const http = require("http");
const fs = require("fs");
const server = http.createServer((req, res) => {
  res.setHeader("Content-Type", "text/html");

  // res.write("<h1>Hello World</h1>");
  // res.write("<p>Hi There</p>");

  fs.readFile("./view/index.html", (err, data) => {
    if (err) {
      console.log(err);
      res.end();
    } else {
      res.write(data);
      res.end();
    }
  });
});

server.listen(4000, "localhost", () => {
  console.log("server listening on port 4000");
});
