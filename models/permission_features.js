module.exports = function(sequelize, DataTypes) {
  var PermissionFeature = sequelize.define("PermissionFeature", {
    permission_feature_id: {
      type: DataTypes.INTEGER
    }
  });

  PermissionFeature.associate = (models) => {
    PermissionFeature.hasMany(models.RolePermissions);
  };

  return PermissionFeature;
};
