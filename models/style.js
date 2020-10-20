module.exports = function(sequelize, DataTypes) {

    var Style = sequelize.define("Style", {
        style_name: {
            type: DataTypes.STRING,
            primaryKey: true
        },
        style_description: {
            type: DataTypes.TEXT,
        }
    }, 
    
    {
        freezeTableName: true
    });
    
    // Style.associate = function(model) {
    //     Style.belongsTo(model.Artwork, {
    //         foreignKey: "style_name"
    //     })
    
        // Style.belongsTo(model.Artist, {
        //     foreignKey: {
        //         allowNull: false
        //       },
        //     onDelete:"cascade"
        // });
    // };
    
    return Style;
    
    };