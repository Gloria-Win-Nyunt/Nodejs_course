const express = require("express");
let morgan = require("morgan");
const mongoose = require("mongoose");

var expressLayouts = require("express-ejs-layouts");
const blogRoutes = require("./routes/blogRoutes");

const app = express();

let mongourl =
  "mongodb+srv://gloriawinnyunt:admin@cluster0.yolyzit.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0";

mongoose
  .connect(mongourl)
  .then(() => {
    console.log("connected to db ");
    app.listen(4000, () => {
      console.log("app is running on port 4000");
    });
  })
  .catch((e) => {
    console.log(e);
  });

app.set("views", "./view");
app.set("view engine", "ejs");
app.use(expressLayouts);
app.set("layout", "layouts/default");

app.use(morgan("dev"));
app.use(express.static("public"));
app.use(express.urlencoded({ extended: true }));

app.get("/", async (req, res) => {
  res.redirect("/blogs");
});

app.get("/about", (req, res) => {
  res.render("about", {
    title: "About",
  });
});

app.get("/contact", (req, res) => {
  res.render("contact", {
    title: "Contact",
  });
});

app.use("/blogs", blogRoutes);

app.use((req, res) => {
  res.status(404).render("404", {
    title: "Not found",
  });
});

app.listen(2000, () => {
  console.log("listening on port 2000");
});
