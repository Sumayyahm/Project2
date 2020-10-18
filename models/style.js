module.exports = function(sequelize, DataTypes) {

var Style = sequelize.define("style", {
    style_name: {
        type: DataTypes.STRING,
        notNull: true,
        len: [1, 60]
    },
    style_description: {
        type: DataTypes.TEXT,
        max: 200
    }
}, 

{
    freezeTableName: true
});

Style.associate = function(models) {
    Style.belongsToMany(models.Artwork, {
        onDelete: "cascade"
    },
    Style.belongsToMany(models.Artist, {
        onDelete:"cascade"
    }));
};

return Style;

};
