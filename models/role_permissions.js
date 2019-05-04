

module.exports = function(sequelize, DataTypes) {
    var Role_permissions = sequelize.define("Role_permissions", {
        user_role_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: 'user_roles', // References 'user_roles' table
            referencesKey: 'user_role_id' // References 'user_role_id' column
        },
        permission_feature_id: {
            type: Sequelize.INTEGER,
            allowNull: false,
            references: 'permission_features', // References 'permission_features' table
            referencesKey: 'permission_feature_id' // References 'permission_feature_id' column
        }
    });
    
    Role_permissions.associate = function(models) {
        // Associating Role_permissions with User_roles
        Role_permissions.hasOne(models.user_roles, {
        // onDelete: "cascade"
        });
        // Associating Role_permissions with Permission_features
        Role_permissions.hasMany(models.permission_features, {
            // onDelete: "cascade"
            });
    };
    
    return Role_permissions;
};
