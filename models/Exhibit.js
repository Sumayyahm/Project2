

module.exports = function(sequelize, DataTypes) {

    var Exhibit = sequelize.define("Exhibit", {
        Exhibit_name: {
            type: DataTypes.STRING,
            notNull: true,
            len: [1,40]
        },
        date: {
            type: DataTypes.INTEGER,
            notNull: true,
            isDate: true
        },
        time: {
            type: DataTypes.STRING,
            notNull: true,
        },
        exhibit_descript: {
            type: DataTypes.TEXT,
            max: 200
        },
        exhibit_image: {
            type: DataTypes.STRING,
            isURL: true
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