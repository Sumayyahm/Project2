module.exports = function(sequelize, Datatypes) {

var Style = sequelize.define("style", {
    style_name: {
        type: Datatypes.STRING,
        notNull: true,
        len: [1, 60]
    },
    style_description: {
        type: Datatypes.TEXT,
        max: 200
    }
}, 

{
    freezeTableName: true
});

Style.associate = function(models) {
    Style.hasMany(models.Artwork, {
        onDelete: "cascade"
    });
};

return Style;

};
