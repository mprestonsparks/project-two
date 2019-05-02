var db = require("../models");

module.exports = function(app) {
  // Get all examples
  app.get("/api/examples", function(req, res) {
    db.Example.findAll({}).then(function(dbExamples) {
      res.json(dbExamples);
    });
  });

  // Create a new example
  app.post("/api/examples", function(req, res) {
    db.Example.create(req.body).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // Delete an example by id
  app.delete("/api/examples/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(dbExample) {
      res.json(dbExample);
    });
  });

  // ==================
  // Need to update the database/models for this section

  app.get("/api/users", function(req,res) {
    db.Example.findAll({}).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/users/:id",function(req,res){
    db.Example.findAll({where: {id: req.params.id} }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/users/:project",function(req,res){
    db.Example.findAll({where: {project: req.params.project} }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/projects", function(req,res) {
    db.Example.findAll({}).then(function(data){
      res.json(data);
    });
  }); 

  app.get("/api/projects/:id",function(req,res){
    db.Example.findAll({where: {id: req.params.id} }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/projects/:user",function(req,res){
    db.Example.findAll({where: {user: req.params.user} }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/tasks/",function(req,res){
    db.Example.findAll({}).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/tasks/:project",function(req,res){
    db.Example.findAll({where: {project: req.params.project} }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/tasks/:user",function(req,res){
    db.Example.findAll({where: {user: req.params.user} }).then(function(data){
      res.json(data);
    });
  });

  app.post("/api/project", function(req, res) {
    db.Example.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/task", function(req, res) {
    db.Example.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/user", function(req, res) {
    db.Example.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  app.delete("/api/task/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(data) {
      res.json(data);
    });
  });

  app.delete("/api/project/:id", function(req, res) {
    db.Example.destroy({ where: { id: req.params.id } }).then(function(data) {
      res.json(data);
    });
  });

  app.put("/api/project/:id", function(req, res) {
    db.Example.update({ where: { id: req.params.id } }).then(function(data) {
      res.json(data);
    });
  });

  app.put("/api/user/:id", function(req, res) {
    db.Example.update({ where: { id: req.params.id } }).then(function(data) {
      res.json(data);
    });
  });

  app.put("/api/task/:id", function(req, res) {
    db.Example.update({ where: { id: req.params.id } }).then(function(data) {
      res.json(data);
    });
  });

};
