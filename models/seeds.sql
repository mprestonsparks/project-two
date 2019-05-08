INSERT INTO comments (comment,TaskID,UserID)
VALUES ("this is working great",1,1);

INSERT INTO comments (comment,TaskID,UserID)
VALUES ("this is also working well",1,1);

INSERT INTO permission_features(permission_feature_id,RolePermissionID)
VALUES (1,1);

INSERT INTO projects(project_name,project_description,project_lead,UserID)
VALUES ("project 1","this is our first project",1 , 1);

INSERT INTO role_permissions(user_role_id,permission_feature_id)
VALUES (1,1);

INSERT INTO task_assignments (TaskID)
VALUES (1);

INSERT INTO task_priorities (task_priority)
VALUES("high");

INSERT INTO task_statuses(task_status)
VALUES ("incomplete");

INSERT INTO tasks(task_name,task_description,goal_start,goal_end,actual_start,actual_end,ProjectID)
VALUES ("task prime","the main task we need to fix","2019-05-07","2019-05-07","2019-05-07","2019-05-07",1);

INSERT INTO user_roles (user_role)
VALUES ("manager");

INSERT INTO users (user_first_name,user_last_name,user_email)
VALUES ("John","Doe","John.Doe@gmail.com");
