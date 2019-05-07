module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        task_name: {
            type: DataTypes.STRING,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i
            }
        },
        task_description: {
            type: DataTypes.TEXT,
            allowNull: false,
            validate: {
                is: /^[a-z]+$/i
            }
        },
        goal_start: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
        goal_end: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
        actual_start: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
        actual_end: {
            type: DataTypes.DATE,
            allowNull: false,
            validate: {
                isDate: true,
            }
        },
    });

    Task.associate = function (models) {
        Task.hasMany(models.Comment);
    };

    //This one below for some reason is not working. 
    Task.associate = function (models) {
        Task.hasMany(models.Task_Assignments);
    };

    return Task;
};
