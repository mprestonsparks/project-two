var db = require("../models");

module.exports = function(app) {

  app.get("/api/user", function(req,res) {
    db.User.findAll({
      attributes: ["user_id","user_first_name","user_last_name","user_email"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/user/:user_id",function(req,res){
    db.User.findAll({
      where: {user_id: req.params.user_id},
      attributes: ["user_id","user_first_name","user_last_name","user_email"], 
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/user/:project_name",function(req,res){
    db.User.findAll({
      where: {project_name: req.params.project_name},
      attributes: ["user_id","user_first_name","user_last_name","user_email"]
     }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/project", function(req,res) {
    db.Project.findAll({
      attributes: ["project_id","project_name","project_description","project_lead"]
    }).then(function(data){
      res.json(data);
    });
  }); 

  app.get("/api/project/:project_id",function(req,res){
    db.Project.findAll({
      where: {project_id: req.params.project_id},
      attributes: ["project_id","project_name","project_description","project_lead"]
     }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/project/user/:user_id",function(req,res){
    db.Project.findAll({
      where: {user_id: req.params.user_id},
      attributes: ["project_id","project_name","project_description","project_lead"]
     }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/task/",function(req,res){
    db.Task.findAll({
      attributes: ["task_id", "task_name", "task_description", "goal_start", "goal_end", "actual_start", "actual_end"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/task/project/:project_id",function(req,res){
    db.Task.findAll({
      where: {project_id: req.params.project_id},
      attributes: ["task_id", "task_name", "task_description", "goal_start", "goal_end", "actual_start", "actual_end"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/task/user/:user_id",function(req,res){
    db.Task.findAll({
      where: {use_id: req.params.user_id},
      attributes: ["task_id", "task_name", "task_description", "goal_start", "goal_end", "actual_start", "actual_end"]    
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/comment",function(req,res){
    db.Comment.findAll({
      attributes: ["comment_id","comment","task_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/comment/:comment_id",function(req,res){
    db.Comment.findAll({
      where: {comment_id: req.params.comment_id},
      attributes: ["comment_id","comment","task_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/comment/task/:task_id",function(req,res){
    db.Comment.findAll({
      where: {comment_id: req.params.comment_id},
      attributes: ["comment_id","comment","task_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/permissionfeature",function(req,res){
    db.PermissionFeature.findAll({
      attributes: ["permission_feature_id","permission_feature"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/permissionfeature/:permission_feature_id",function(req,res){
    db.PermissionFeature.findAll({
      where: { permission_feature_id: req.params.permission_feature_id},
      attributes: ["permission_feature_id","permission_feature"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("api/rolepermissons",function(req,res){
    db.RolePermissions.findAll({
      attributes: ["role_permission_id","user_role_id","permission_feature_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("api/rolepermissons/:role_permission_id",function(req,res){
    db.RolePermissions.findAll({
      where: {role_permission_id: req.params.role_permission_id},
      attributes: ["role_permission_id","user_role_id","permission_feature_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("api/rolepermissons/permissionfeature_id/:permissionfeature_id",function(req,res){
    db.RolePermissions.findAll({
      where: {permissionfeature_id: req.params.permissionfeature_id},
      attributes: ["role_permission_id","user_role_id","permission_feature_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("api/rolepermissons/user_role_id/:user_role_id",function(req,res){
    db.RolePermissions.findAll({
      where: {user_role_id: req.params.user_role_id},
      attributes: ["role_permission_id","user_role_id","permission_feature_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/taskassignments",function(req,res){
    db.TaskAssignments.findAll({
      attributes: ["task_assignment_id","task_id","user_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/taskassignments/:task_assignment_id",function(req,res){
    db.TaskAssignments.findAll({
      where: {task_assignment_id: req.params.task_assignment_id},
      attributes: ["task_assignment_id","task_id","user_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/taskassignments/user_role_id/:user_role_id",function(req,res){
    db.TaskAssignments.findAll({
      where: {user_role_id: req.params.user_role_id},
      attributes: ["task_assignment_id","task_id","user_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/taskassignments/user_id/:user_id",function(req,res){
    db.TaskAssignments.findAll({
      where: {user_id: req.params.user_id},
      attributes: ["task_assignment_id","task_id","user_id"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/taskpriorties",function(req,res){
    db.TaskPriorities.findAll({
      attributes: ["task_priority_id","task_priority"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/taskpriorties/:task_priority_id",function(req,res){
    db.TaskPriorities.findAll({
      where: {task_priority_id: req.params/task_priority_id},
      attributes: ["task_priority_id","task_priority"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("/api/taskpriorties/task_priority/:task_priority",function(req,res){
    db.TaskPriorities.findAll({
      where: {task_priority: req.params/task_priority},
      attributes: ["task_priority_id","task_priority"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("api/taskstatus",function(req,res){
    db.TaskStatus.findAll({
      attributes: ["task_status_id","task_status"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("api/taskstatus/:task_status_id",function(req,res){
    db.TaskStatus.findAll({
      where: { task_status_id: req.params.task_status_id},
      attributes: ["task_status_id","task_status"]
    }).then(function(data){
      res.json(data);
    });
  });

  app.get("api/taskstatus/task/status/:task_status",function(req,res){
    db.TaskStatus.findAll({
      where: { task_status: req.params.task_status},
      attributes: ["task_status_id","task_status"]
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

  app.post("/api/permissionfeature/",function(req,res){
    db.PermissionFeature.create(req.body).then(function(data){
      res.json(data);
    });
  });

  app.post("/api/rolepermissions/",function(req,res){
    db.RolePermissions.create(req.body).then(function(data){
      res.json(data);
    });
  });

  app.post("/api/taskassignments/",function(req,res){
    db.TaskAssignments.create(req.body).then(function(data){
      res.json(data);
    });
  });

  app.post("/api/taskpriorities/",function(req,res){
    db.TaskPriorities.create(req.body).then(function(data){
      res.json(data);
    });
  });

  app.post("/api/taskstatus/",function(req,res){
    db.TaskStatus.create(req.body).then(function(data){
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

  app.delete("/api/permissionfeature/delete/:permission_feature_id", function(req,res){
    db.PermissionFeature.destroy({
      where: { permission_feature_id: req.params.permission_feature_id}
    }).then(function(data){
      res.json(data);
    });
  });

  app.delete("/api/rolepermissions/delete/:role_permission_id", function(req,res){
    db.RolePermissions.destroy({
      where: { role_permission_id: req.params.role_permission_id}
    }).then(function(data){
      res.json(data);
    });
  });

  app.delete("/api/taskassignments/delete/:task_assignment_id", function(req,res){
    db.TaskAssignments.destroy({
      where: { task_assignment_id: req.params.task_assignment_id}
    }).then(function(data){
      res.json(data);
    });
  });

  app.delete("/api/taskapriorities/delete/:task_priority_id", function(req,res){
    db.TaskPriorities.destroy({
      where: { task_priority_id: req.params.task_priority_id}
    }).then(function(data){
      res.json(data);
    });
  });

  app.delete("/api/taskstatus/delete/:task_status_id", function(req,res){
    db.TaskStatus.destroy({
      where: { task_status_id: req.params.task_status_id}
    }).then(function(data){
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

  app.put("/api/comment/update/:comment_id", function(req, res) {
    db.Task.update({ where: { comment_id: req.params.comment_id } }).then(function(data) {
      res.json(data);
    });
  });

  app.put("/api/permissionfeature/update/:permission_feature_id",function(req,res){
    db.PermissionFeature.update({
      where: { permission_feature_id: req.params.permission_feature_id}
    }).then(function(data){
      res.json(data);
    });
  });

  app.put("/api/rolepermissions/update/:role_permission_id", function(req,res){
    db.RolePermissions.update({
      where: { role_permission_id: req.params.role_permission_id}
    }).then(function(data){
      res.json(data);
    });
  });

  app.put("/api/taskassignments/update/:task_assignment_id", function(req,res){
    db.TaskAssignments.update({
      where: { task_assignment_id: req.params.task_assignment_id}
    }).then(function(data){
      res.json(data);
    });
  });

  app.put("/api/taskapriorities/update/:task_priority_id", function(req,res){
    db.TaskPriorities.update({
      where: { task_priority_id: req.params.task_priority_id}
    }).then(function(data){
      res.json(data);
    });
  });

  app.put("/api/taskstatus/update/:task_status_id", function(req,res){
    db.TaskStatus.update({
      where: { task_status_id: req.params.task_status_id}
    }).then(function(data){
      res.json(data);
    });
  });

};
