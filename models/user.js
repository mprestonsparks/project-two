module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_first_name: {
      type: DataTypes.STRING,
      validate: {
        is: /^[a-z]+$/i
      }
    },
    user_last_name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        is: /^[a-z]+$/i
      }
    },
    user_email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        isEmail: true
      }
    }
  });

  User.associate = function (models) {
    User.hasMany(models.Project);
  };

  return User;
};
