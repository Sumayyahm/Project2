module.exports = function (sequelize, DataTypes) {

    var Style = sequelize.define("Style", {
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

    Style.associate = function (model) {
        Style.belongsTo(model.Artwork, {
            foreignKey: {
                allowNull: false
            },
            onDelete: "cascade"
        }),
            Style.associate = function (model) {
                Style.belongsTo(model.Artist, {
                    foreignKey: {
                        allowNull: false
                    },
                    onDelete: "cascade"
                });
            };

        return Style;

    };
}
