module.exports = function(sequelize, DataTypes) {

var Artist = sequelize.define("artist", {
    artist_name: {
        type: DataTypes.STRING,
        notNull: true,
        unique: true,
        len: [1,40]
    },
    artist_phone: {
        type: DataTypes.INTEGER,
        notNull: true,
        isInt: true
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
Artist.associate = function(models) {
    Artist.hasMany(models.Artwork, {
        onDelete: "cascade"
    },
    Artist.belongsToMany(models.Style, {
        onDelete: "cascade"
    }));
};

return Artist;

};
