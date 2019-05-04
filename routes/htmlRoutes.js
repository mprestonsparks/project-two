var db = require("../models");

module.exports = function(app) {
  // Load index page
  app.get("/", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.render("index", {
        msg: "Welcome!",
        examples: dbExamples
      });
    });
  });

  // Load example page and pass in an example by id
  app.get("/dashboard/admin", function(req, res) {
    // db.User.findAll({}).then(function(userData) {
    //   console.log(userData);
    //   res.render("example", {
    //     example: userData
    //   });
    // });

    db.Projects.findAll({}).then(function(projectData) {
      console.log(projectData);
      res.render("example", {
        example: projectData
      });
    });

  });


  


  // Render 404 page for any unmatched routes
  app.get("*", function(req, res) {
    res.render("404");
  });
};
