module.exports = function(sequelize, DataTypes) {
  var Project = sequelize.define("Project", {
    project_name: {
      type: DataTypes.STRING,
      allowNull: false
    },
    goal_start: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true
      }
    },
    goal_end: {
      type: DataTypes.DATE,
      allowNull: true,
      validate: {
        isDate: true
      }
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
