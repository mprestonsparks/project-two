
module.exports = function(sequelize, DataTypes) {
    var User_roles = sequelize.define("User_roles", {
        user_role: {
            type: Sequelize.STRING,
            allowNull: false,
        }
    });

    return User_roles;
};
