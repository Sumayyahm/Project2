module.exports = function(sequelize, Datatypes) {

var Artwork = sequelize.define("artwork", {
    artwork_name: {
        type: Datatypes.STRING,
        notNull: true,
        len: [1,60]
    },
    artwork_size: {
        type: Datatypes.STRING,
        isAlphanumeric: true,
        notNull: true
    },
    artwork_descript: Datatypes.TEXT,
    artwork_style: {
       type: Datatypes.STRING,
       notNull: true,
       len: [1,100]
    },
    artwork_medium: {
        type: Datatypes.STRING,
        notNull: true,
        len: [1,100]
    },
    artwork_colortone: {
        type: Datatypes.STRING,
        notNull: true,
        len: [1,50]
    },
    artwork_price: {
        type: Datatypes.INTEGER,
        notNull: true,
        min: 3,
        isDecimal: true
    }
}, 

{
    freezeTableName: true
});

Artwork.associate = function(models) {
    Artwork.hasOne(models.Artist,{
        onDelete: "cascade"
    });
};

return Artwork;

};
