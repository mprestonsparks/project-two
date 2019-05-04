
module.exports = function(sequelize, DataTypes) {
    var Project = sequelize.define("Project", {
        // Giving the Author model a name of type STRING
        project_name: {
            type: DataTypes.STRING,
            allowNull: false
        },
        project_description: DataTypes.TEXT,
        // project_lead: {
        //     type: DataTypes.STRING,
        //     references: 'users', // References 'users' table
        //     referencesKey: 'user_id'
        // }
    });
    
    // Project.associate = function(models) {
    //     // Associating Projects with Users
    //     Project.hasMany(models.Users, {
    //     // onDelete: "cascade"
    //     });
    // };
    
    return Project;
};