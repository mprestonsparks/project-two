
module.exports = function (sequelize, DataTypes) {
    var Userroles = sequelize.define("UserRole", {
        user_role: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            tableName: "user_roles"
        });

    Userroles.associate = function (models) {
        // Associating Role_permissions with User_roles
        Userroles.hasMany(models.RolePermissions, {
            foreignkey: {
                allowNull: false
            }
        });

        return UserRole;
    }};
