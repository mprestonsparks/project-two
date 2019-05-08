
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

    Userroles.associate = function (models) {
        // Associating Role_permissions with User_roles
        Userroles.hasMany(models.RolePermissions, {
            foreignkey: {
                allowNull: false
            }
        });

<<<<<<< HEAD
        return UserRole;
    }};
=======

    };
    return UserRole;
}
>>>>>>> eb5da23274d1b99d7dee4f05cd31a7f6d4c52617
