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

  // Load example page and pass in an example by id
  app.get("/dashboard/admin", function(req, res) {
    let dataRes = {};
    db.User.findAll({
      attributes: ["user_first_name","user_last_name","user_email"]
    }).then(function(userData) {
      var users = [];
      for (var i = 0; i<userData.length; i++){
          users.push(userData[i])
      }
      dataRes = {...dataRes, userInfo: users};
      
      console.log(dataRes)
    })
      db.Project.findAll({
        attributes: ["project_name","project_lead","project_description"]
      }).then(function(projectData) {
        // console.log(projectData);
        dataRes = {...dataRes, projectInfo: projectData};;
      }).then(function(){
      res.render("example",dataRes);
    });

    



  });


  


  // Render 404 page for any unmatched routes
  app.get("*", (req, res) => {
    res.render("404");
  });
};
