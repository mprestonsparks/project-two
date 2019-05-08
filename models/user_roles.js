
module.exports = function (sequelize, DataTypes) {
    var UserRole = sequelize.define("UserRole", {
        user_role: {
            type: DataTypes.STRING,
            allowNull: false,
        }
    },
        {
            tableName: "user_roles"
        });

    UserRole.associate = function (models) {
        // Associating Role_permissions with User_roles
        UserRole.hasMany(models.RolePermissions, {
            foreignkey: {
                allowNull: false
            }
        });
    };
    return UserRole;
}
