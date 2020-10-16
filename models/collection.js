module.exports = function(sequelize, Datatypes) {

var Collection = sequelize.define("collection", {
    collection_name: {
        type: Datatypes.STRING,
        notNull: true,
        len: [1, 60]
    },
    collection_description: {
        type: Datatypes.TEXT,
        max: 200
    },
    num_pieces: {
        type: Datatypes.INTEGER,
        notNull: true,
    }
}, 

{
    freezeTableName: true
});

Collection.associate = function(models) {
    Collection.hasOne(models.Artist, {
        onDelete: "cascade"
    });
};

return Collection;

};
