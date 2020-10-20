module.exports = function (sequelize, DataTypes) {

    var Artwork = sequelize.define("Artwork", {
        artwork_name: {
            type: DataTypes.STRING,
            notNull: true,
            len: [1, 60],
            primaryKey: true
        },
        style_name: {
            type: DataTypes.STRING,
            notNull: true,
            len: [1, 60],
            references: {
                model: "Style",
                key: "style_name"
            }
        },
        artist_name: {
            type: DataTypes.STRING,
            notNull: true,
            len: [1,40],
            references: {
                model:"Artist",
                key: "artist_name"
            }
        },
        artwork_size: {
            type: DataTypes.STRING,
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
            type: DataTypes.STRING,
            notNull: true,
        },
        artwork_image: {
            type: DataTypes.STRING,
        },
        artwork_pubID: {
            type: DataTypes.STRING,
        }
    },

        {
            freezeTableName: true
        });


    
    // Artwork.associate = function (model) {
    //     // Artwork.belongsTo(model.Artist, {
    //     //     foreignKey: "artist_name",
    //     // }),

    //     Artwork.hasOne(model.Style, {
    //         foreignKey: "style_name",
    //     });
    // };



    return Artwork;

};