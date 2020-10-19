module.exports = function (sequelize, DataTypes) {

    var Artwork = sequelize.define("artwork", {
        artwork_name: {
            type: DataTypes.STRING,
            notNull: true,
            len: [1, 60]
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
            type: Dataypes.STRING,
            notNull: true
        }
    },

        {
            freezeTableName: true
        });

    Artwork.associate = function (models) {
        Artwork.belongsTo(models.Artist, {
            onDelete: "cascade"
        });
        Artwork.belongsToMany(models.Style)
    };

    return Artwork;

};
