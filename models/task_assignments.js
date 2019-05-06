// CREATE TABLE task_assignments (
//     task_assignment_id INTEGER AUTO_INCREMENT NOT NULL,
//     task_id INTEGER NOT NULL,
//     user_id INTEGER NOT NULL,
//     PRIMARY KEY(task_assignment_id),
//     FOREIGN KEY(task_id) REFERENCES tasks(task_id),
//     FOREIGN KEY(user_id) REFERENCES users(user_id)

// Add task_assignment_name to SQL Schema ??
// Add task_assignment_description to SQL Schema ??
// No assocations needed because task_assignemnts table doesn't pull in references from other tables???

module.exports = function (sequelize, DataTypes) {
    var TaskAssignments = sequelize.define("Task_Assignments", {

    },
    {
        tableName: "task_assignments"
    });
    TaskAssignments.associate = function (models) {
        TaskAssignments.belongsTo(models.User);
    };
    TaskAssignments.associate = function (models) {
        TaskAssignments.belongsTo(models.Task);
    };

    return TaskAssignments;
};