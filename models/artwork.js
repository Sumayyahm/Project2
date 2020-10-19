module.exports = function (sequelize, DataTypes) {

    var Artwork = sequelize.define("Artwork", {
        artwork_name: {
            type: DataTypes.STRING,
            notNull: true,
            len: [1, 60]
        },
        style_name: {
            type: DataTypes.STRING,
            notNull: true,
            len: [1, 60]
        },
        artist_name: {
            type: DataTypes.STRING,
            notNull: true,
            unique: true,
            len: [1,40]
        },
        artwork_size: {
            type: DataTypes.STRING,
            isAlphanumeric: true,
            notNull: true
        },
        artwork_descript: DataTypes.TEXT,

        artwork_medium: {
            type: DataTypes.STRING,
            notNull: true,
            len: [1, 100]
        },
        artwork_colortone: {
            type: DataTypes.STRING,
            notNull: true,
            len: [1, 50]
        },
        artwork_price: {
            type: DataTypes.INTEGER,
            notNull: true,
            min: 3,
            isDecimal: true
        },
        artwork_image: {
            type: DataTypes.STRING,
            notNull: true,
            isURL: true
        },
        artwork_pubID: {
            type: DataTypes.STRING,
            notNull: true
        }
    },

        {
            freezeTableName: true
        });


    
    Artwork.associate = function (model) {
        Artwork.belongsTo(model.Artist, {
            foreignKey: "artist_name",
        }),

        Artwork.hasMany(model.Style, {
            foreignKey: "style_name",
        });
    };



    return Artwork;

};