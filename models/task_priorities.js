
module.exports = function(sequelize, DataTypes) {
    var Task_Priorities = sequelize.define("Task_Priorities", {
        task_priority: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });
    return Task_Priorities;
    }
