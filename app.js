const express = require("express");
const app = express();

app.get("/", (req, res) => {
  res.sendFile("./view/index.html", { root: __dirname });
});

app.get("/about", (req, res) => {
  res.sendFile("./view/about.html", { root: __dirname });
});

app.get("/contact", (req, res) => {
  res.sendFile("./view/contact.html", { root: __dirname });
});
app.listen(4000, () => {
  console.log("app is running on port 4000");
});
