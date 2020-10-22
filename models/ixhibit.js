

module.exports = function(sequelize, DataTypes) {

    var Exhibit = sequelize.define("Exhibit", {
        exhibit_name: {
            type: DataTypes.STRING,
            notNull: true,
            len: [1,40]
        },
        date: {
            type: DataTypes.STRING,
            notNull: true,
        },
        time: {
            type: DataTypes.STRING,
        },
        exhibit_descript: {
            type: DataTypes.TEXT,
        },
        exhibit_image: {
            type: DataTypes.STRING,
        },
        exhibit_address: {
            type: DataTypes.STRING,
        }
    }, 
    
    {
        freezeTableName: true
    });
    
    return Exhibit;
    
    };