module.exports = function (sequelize, DataTypes) {
    var Comment = sequelize.define("Comment", {
        comment: {
            type: DataTypes.TEXT,
            allowNull: false
        }
    });

    Comment.associate = function(models){
        Comment.belongsTo(models.Task);
    }

    return Comment;
};
