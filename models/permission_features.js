module.exports = function (sequelize, DataTypes) {
    var PermissionFeature = sequelize.define("PermissionFeature", {
        permission_feature: {
            type: DataTypes.STRING,
            allowNull: false
        }
    });


    return PermissionFeature;
};
