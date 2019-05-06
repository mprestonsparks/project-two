
module.exports = function (sequelize, DataTypes) {
    var TaskPriorities = sequelize.define("Task_Priorities", {
        task_priority: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "task_priorities"
    });
    return TaskPriorities;
}
