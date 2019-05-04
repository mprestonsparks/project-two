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
    var Task_Assignments = sequelize.define("Task_Assignments", {});
    Task_Assignments.associate = function (models) {
        Task_Assignments.belongsTo(models.User);
    };
    Task_Assignments.associate = function (models) {
        Task_Assignments.belongsTo(models.Task);
    };

    return Task_Assignments;
};