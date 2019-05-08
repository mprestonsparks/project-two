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




    return RolePermissions;
};
