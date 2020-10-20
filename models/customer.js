module.exports = function(sequelize, DataTypes) {

var Customer = sequelize.define("customer", {
    customer_name: {
        type: DataTypes.STRING,
        notNull: true,
        len: [1,50]
    },
    customer_phone: {
        type: DataTypes.STRING,
        notNull: true,
    },
    customer_email: {
        type: DataTypes.STRING,
        notNull: true,
        isEmail: true
    },
    customer_style: {
        type: DataTypes.STRING,
        max: 100
    },
    customer_color: {
        type: DataTypes.STRING,
         max: 100
    },
    customer_medium: {
        type: DataTypes.STRING,
        max: 100
    },
    customer_size: {
        type: DataTypes.STRING,
    }
}, 

{
    freezeTableName: true
});

return Customer;

};
