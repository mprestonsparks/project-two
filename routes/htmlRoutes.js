//var db = require("../models");

module.exports = function(app) {
  // Load index page
  // app.get("/", function(req, res) {
  //   db.Example.findAll({}).then(function(dbExamples) {
  //     res.render("index", {
  //       msg: "Welcome!",
  //       examples: dbExamples
  //     });
  //   });
  // });

  // // Load example page and pass in an example by id
  // app.get("/example/:id", function(req, res) {
  //   db.Example.findOne({ where: { id: req.params.id } }).then(function(dbExample) {
  //     res.render("example", {
  //       example: dbExample
  //     });
  //   });
  // });

  app.get('/', (req, res) => {
    res.render("index");
  });

  app.get('/dashboard', (req, res) => {
    res.render("dashboard")
  })

  app.get('/project', (req, res) => {
    res.render("project")
  })

  app.get('/projects', (req, res) => {
    res.render("projects");
  })

  app.get('/users', (req, res) => {
    res.render("users")
  })



  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
