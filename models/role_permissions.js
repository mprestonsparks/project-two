module.exports = function (sequelize, DataTypes) {
    var RolePermissions = sequelize.define("RolePermissions", {
        user_role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        permission_feature_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    }, {
            tableName: "role_permissons"
        });

    RolePermissions.associate = function (models) {
        // Associating Role_permissions with User_roles
        RolePermissions.hasOne(models.User_roles, {
            foreignkey: {
                allowNull: false
            }
        });

    };

    RolePermissions.associate = function (models) {
        // Associating Role_permissions with Permission_features
        RolePermissions.hasOne(models.PermissionFeature, {
            foreignkey: {
                allowNull: false
            }
        });

    };



    return RolePermissions;
};
