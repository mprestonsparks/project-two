
module.exports = function (sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        // Giving the Author model a name of type STRING
        project_name: {
            type: Sequelize.STRING,
            allowNull: false
        },
        project_description: DataTypes.TEXT
    });

    Project.associate = function (models) {
        // Associating Projects with Users
        Project.belongsTo(models.Users);
    };

    return Project;
};