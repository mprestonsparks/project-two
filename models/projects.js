
module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        project_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_description: DataTypes.TEXT
    });

    Project.associate = function (models) {
        // Associating Projects with Users
        Project.belongsTo(models.User);
    };

    return Project;
};