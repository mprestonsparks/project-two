module.exports = function (sequelize, DataTypes) {
  var User = sequelize.define("User", {
    user_first_name: DataTypes.STRING,
    user_last_name: DataTypes.STRING,
    user_email: DataTypes.STRING
  });

  User.associate = function (models) {
    User.hasMany(models.Task);
  };

  return User;
};
