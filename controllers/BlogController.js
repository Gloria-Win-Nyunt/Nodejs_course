const Blog = require("../models/Blog");
const BlogController = {
  index: async (req, res) => {
    let blogs = await Blog.find().sort({ title: 1 });

    res.render("index", {
      blogs,
      title: "Home",
    });
  },
  store: async (req, res) => {
    let { title, intro, body } = req.body;

    let blog = new Blog({
      title,
      intro,
      body,
    });
    await blog.save();

    res.redirect("/");
  },

  create: (req, res) => {
    res.render("blogs/create", {
      title: "Blog Create",
    });
  },

  show: async (req, res, next) => {
    try {
      let id = req.params.id;
      let blog = await Blog.findById(id);
      res.render("blogs/show", { blog, title: "Blog Detail" });
    } catch (error) {
      console.log(error);
      next();
    }
  },

  delete: async (req, res, next) => {
    try {
      let id = req.params.id;
      await Blog.findByIdAndDelete(id);
      res.redirect("/");
    } catch (error) {
      console.log(error);
      next();
    }
  },
};

module.exports = BlogController;
