var db = require("../models");

module.exports = function(app) {
  // Need to update the database/models for this section

  app.get("/api/users", function(req,res) {
    db.User.findAll({
      attributes: ["user_id","user_first_name","user_last_name","user_email"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/users/:user_id",function(req,res){
    db.User.findAll({
      where: {user_id: req.params.user_id},
      attributes: ["user_id","user_first_name","user_last_name","user_email"], 
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/users/:project_name",function(req,res){
    db.User.findAll({
      where: {project_name: req.params.project_name},
      attributes: ["user_id","user_first_name","user_last_name","user_email"]
     }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/projects", function(req,res) {
    db.Project.findAll({
      attributes: ["project_id","project_name","project_description","project_lead"]
    }).then(function(data){
      res.json(data);
    });
  }); 

  app.get("/api/projects/:project_id",function(req,res){
    db.Project.findAll({
      where: {project_id: req.params.project_id},
      attributes: ["project_id","project_name","project_description","project_lead"]
     }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/projects/user/:user_id",function(req,res){
    db.Project.findAll({
      where: {user_id: req.params.user_id},
      attributes: ["project_id","project_name","project_description","project_lead"]
     }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/tasks/",function(req,res){
    db.Task.findAll({
      attributes: ["task_id", "task_name", "task_description", "goal_start", "goal_end", "actual_start", "actual_end"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/tasks/project/:project_id",function(req,res){
    db.Task.findAll({
      where: {project_id: req.params.project_id},
      attributes: ["task_id", "task_name", "task_description", "goal_start", "goal_end", "actual_start", "actual_end"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/tasks/user/:user_id",function(req,res){
    db.Task.findAll({
      where: {use_id: req.params.user_id},
      attributes: ["task_id", "task_name", "task_description", "goal_start", "goal_end", "actual_start", "actual_end"]    
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/comments",function(req,res){
    db.Comment.findAll({
      attributes: ["comment_id","comment","task_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/comments/:comment_id",function(req,res){
    db.Comment.findAll({
      where: {comment_id: req.params.comment_id},
      attributes: ["comment_id","comment","task_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/comments/task/:task_id",function(req,res){
    db.Comment.findAll({
      where: {comment_id: req.params.comment_id},
      attributes: ["comment_id","comment","task_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.post("/api/project", function(req, res) {
    db.Project.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/task", function(req, res) {
    db.Task.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  app.post("/api/user", function(req, res) {
    db.User.create(req.body).then(function(data) {
      res.json(data);
    });
  });

  app.delete("/api/task/delete/:task_id", function(req, res) {
    db.Task.destroy({ where: { task_id: req.params.task_id } }).then(function(data) {
      res.json(data);
    });
  });

  app.delete("/api/project/delete/:project_id", function(req, res) {
    db.Project.destroy({ where: { project_id: req.params.project_id } }).then(function(data) {
      res.json(data);
    });
  });

  app.delete("/api/user/delete/:user_id", function(req, res) {
    db.User.destroy({ where: { user_id: req.params.user_id } }).then(function(data) {
      res.json(data);
    });
  });

  app.delete("api/task/comment/delete/:comment_id",function(req,res){
    db.Comment.destroy({where : { comment_id: req.params.comment_id} }).then(function(data){
      res.json(data);
    });
  });

  app.put("/api/project/update/:project_id", function(req, res) {
    db.Project.update({ where: { project_id: req.params.project_id } }).then(function(data) {
      res.json(data);
    });
  });

  app.put("/api/user/update/:user_id", function(req, res) {
    db.User.update({ where: { user_id: req.params.user_id } }).then(function(data) {
      res.json(data);
    });
  });

  app.put("/api/task/update/:task_id", function(req, res) {
    db.Task.update({ where: { task_id: req.params.task_id } }).then(function(data) {
      res.json(data);
    });
  });

  app.put("/api/comment/update/:comment", function(req, res) {
    db.Task.update({ where: { comment_id: req.params.comment_id } }).then(function(data) {
      res.json(data);
    });
  });

};
