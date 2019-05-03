DROP DATABASE IF EXISTS project_two;
CREATE DATABASE project_two;
USE project_two;

DROP TABLE IF EXISTS user_roles;
CREATE TABLE user_roles (
    user_role_id INTEGER AUTO_INCREMENT NOT NULL,
    user_role VARCHAR(100) NOT NULL,
    PRIMARY KEY(user_role_id)
);

DROP TABLE IF EXISTS users;
CREATE TABLE users (
    user_id INTEGER AUTO_INCREMENT NOT NULL,
    user_first_name VARCHAR(100) NOT NULL,
    user_last_name VARCHAR(100) NOT NULL,
    user_email VARCHAR(255) NOT NULL,
    user_role_id INTEGER,
    PRIMARY KEY(user_id),
    FOREIGN KEY(user_role_id) REFERENCES user_roles(user_role_id)
);

DROP TABLE IF EXISTS projects;
CREATE TABLE projects (
    project_id INTEGER AUTO_INCREMENT NOT NULL,
    project_name VARCHAR(100) NOT NULL,
    project_description TEXT,
    project_lead INTEGER,
    PRIMARY KEY(project_id),
    FOREIGN KEY(project_lead) REFERENCES users(user_id)
);

DROP TABLE IF EXISTS task_statuses;
CREATE TABLE task_statuses (
    task_status_id INTEGER AUTO_INCREMENT NOT NULL,
    task_status VARCHAR(100),
    PRIMARY KEY(task_status_id)
);

DROP TABLE IF EXISTS task_priorities;
CREATE TABLE task_priorities (
    task_priority_id INTEGER AUTO_INCREMENT NOT NULL,
    task_priority VARCHAR(100),
    PRIMARY KEY(task_priority_id)
);


DROP TABLE IF EXISTS tasks;
CREATE TABLE tasks (
    task_id INTEGER AUTO_INCREMENT NOT NULL,
    task_name VARCHAR(100) NOT NULL,
    task_description TEXT,
    goal_start DATETIME,
    goal_end DATETIME,
    actual_start DATETIME,
    actual_end DATETIME,
    task_status_id INTEGER,
    task_priority_id INTEGER,
    project_id INTEGER,
    PRIMARY KEY(task_id),
    FOREIGN KEY(task_status_id) REFERENCES task_statuses(task_status_id),
    FOREIGN KEY(task_priority_id) REFERENCES task_priorities(task_priority_id),
    FOREIGN KEY(project_id) REFERENCES projects(project_id)
);

DROP TABLE IF EXISTS task_assignments;
CREATE TABLE task_assignments (
    task_assignment_id INTEGER AUTO_INCREMENT NOT NULL,
    task_id INTEGER NOT NULL,
    user_id INTEGER NOT NULL,
    PRIMARY KEY(task_assignment_id),
    FOREIGN KEY(task_id) REFERENCES tasks(task_id),
    FOREIGN KEY(user_id) REFERENCES users(user_id)
);

DROP TABLE IF EXISTS permission_features;
CREATE TABLE permission_features (
    permission_feature_id INTEGER AUTO_INCREMENT NOT NULL,
    permission_feature VARCHAR(100) NOT NULL,
    PRIMARY KEY(permission_feature_id)
);

DROP TABLE IF EXISTS role_permissions;
CREATE TABLE role_permissions (
    role_permission_id INTEGER AUTO_INCREMENT NOT NULL,
    user_role_id INTEGER,
    permission_feature_id INTEGER,
    PRIMARY KEY(role_permission_id),
    FOREIGN KEY(user_role_id) REFERENCES user_roles(user_role_id),
    FOREIGN KEY(permission_feature_id) REFERENCES permission_features(permission_feature_id)
);


DROP TABLE IF EXISTS comments;
CREATE TABLE comments (
    comment_id INTEGER AUTO_INCREMENT NOT NULL,
    comment TEXT,
    task_id INTEGER,
    PRIMARY KEY(comment_id),
    FOREIGN KEY(task_id) REFERENCES tasks(task_id)
);