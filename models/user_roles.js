
module.exports = function (sequelize, DataTypes) {
    var Userroles = sequelize.define("User_roles", {
        user_role: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            tableName: "user_roles"
        });

    return Userroles;
};
