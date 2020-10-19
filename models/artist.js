module.exports = function (sequelize, DataTypes) {

    var Artist = sequelize.define("Artist", {
        artist_name: {
            type: DataTypes.STRING,
            notNull: true,
            unique: true,
            len: [1, 40]
        },
        artist_phone: {
            type: DataTypes.INTEGER,
            notNull: true,
        },
        artist_email: {
            type: DataTypes.STRING,
            notNull: true,
            isEmail: true
        },
        artist_bio: {
            type: DataTypes.TEXT,
            max: 200
        },
        artist_portrait: {
            type: DataTypes.STRING,
            isURL: true
        }
    },

        {
            freezeTableName: true
        });

    Artist.associate = function (model) {
        Artist.hasMany(model.Artwork, {
            foreignKey: "artist_name",
        }),
            Artist.hasMany(model.Style, {
                foreignKey: {
                    allowNull: false
                },
                onDelete: "cascade"
            });
    };

    return Artist;

};