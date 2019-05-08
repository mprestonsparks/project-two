module.exports = function (sequelize, DataTypes) {
    var PermissionFeature = sequelize.define("PermissionFeature", {
        permission_feature_id: {
            type: DataTypes.INTEGER
        }
    }, {
            tableName: "permission_features"
        });

    PermissionFeature.associate = function (models) {
        // Associating Role_permissions with Permission_features
        PermissionFeature.hasMany(models.RolePermissions, {
            foreignkey: {
                allowNull: false
            }
        });


    };
    return PermissionFeature;
}