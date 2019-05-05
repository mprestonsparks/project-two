module.exports = function (sequelize, DataTypes) {
    var TaskStatus = sequelize.define("TaskStatus", {
        task_status: {
            type: DataTypes.STRING,
            allowNull: false
        }
    },
    {
        tableName: "task_statuses"
    });


    return TaskStatus;
};
