module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    project_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    project_description: DataTypes.TEXT
  });

  Project.associate = models => {
    Project.hasMany(models.User);
  };

  Project.associate = models => {
    Project.hasMany(models.Task);
  };

  return Project;
};
