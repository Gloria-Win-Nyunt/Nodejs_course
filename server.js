const http = require("http");
const fs = require("fs");
const _ = require("lodash");
console.log(_.random(20));

const server = http.createServer((req, res) => {
  let fileName;
  switch (req.url) {
    case "/": //home.html
      fileName = "index.html";
      res.statusCode = 200;
      break;

    case "/contact":
      fileName = "contact.html";
      res.statusCode = 200;
      break;

    case "/contact-us":
      res.statusCode = 301;
      res.setHeader("Location", "/contact");
      break;

    case "/about":
      fileName = "about.html";
      res.statusCode = 200;
      break;

    default:
      fileName = "404.html";
      res.statusCode = 404;
      break;
  }
  res.setHeader("Content-Type", "text/html");

  // res.write("<h1>Hello World</h1>");
  // res.write("<p>Hi There</p>");

  fs.readFile("./view/" + fileName, (err, data) => {
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
