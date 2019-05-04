module.exports = function (sequelize, DataTypes) {
    var PermissionFeature = sequelize.define("PermissionFeature", {
        permission_feature_id: {
            type: DataTypes.INTEGER
        }
    });


    return PermissionFeature;
};
