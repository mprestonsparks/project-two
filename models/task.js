module.exports = function (sequelize, DataTypes) {
    var Task = sequelize.define("Task", {
        task_name: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        task_description: {
            type: DataTypes.TEXT,
            allowNull: true,
        },
        goal_start: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                isDate: true,
            }
        },
        goal_end: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                isDate: true,
            }
        },
        actual_start: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                isDate: true,
            }
        },
        actual_end: {
            type: DataTypes.DATE,
            allowNull: true,
            validate: {
                isDate: true,
            }
        },
    });

    Task.associate = function (models) {
        Task.hasMany(models.Comment);
    };

    Task.associate = function (models) {
        Task.hasMany(models.Task_Assignments);
    };

    Task.associate = function (models) {
        Task.belongsTo(models.Project, {
            foreignkey: {
                allowNull: false
            }
        });
    }

    return Task;
};
