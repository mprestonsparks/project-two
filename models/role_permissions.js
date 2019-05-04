

module.exports = function (sequelize, DataTypes) {
    var Role_permissions = sequelize.define("Role_permissions", {
        user_role_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        },
        permission_feature_id: {
            type: DataTypes.INTEGER,
            allowNull: false,
        }
    });

    Role_permissions.associate = function (models) {
        // Associating Role_permissions with User_roles
        Role_permissions.belongsTo(models.User_roles, {
            // onDelete: "cascade"
        });
        // Associating Role_permissions with Permission_features
        Role_permissions.belongsTo(models.PermissionFeature, {
            // onDelete: "cascade"
        });
    };

    return Role_permissions;
};
