module.exports = function(sequelize, Datatypes) {

var Customer = sequelize.define("customer", {
    customer_name: {
        type: Datatypes.STRING,
        notNull: true,
        len: [1,50]
    },
    customer_phone: {
        type: Datatypes.INTEGER,
        notNull: true,
        isInt: true
    },
    customer_email: {
        type: Datatypes.STRING,
        notNull: true,
        isEmail: true
    },
    customer_style: {
        type: Datatypes.STRING,
        max: 100
    },
    customer_color: {
        type: Datatypes.STRING,
         max: 100
    },
    customer_medium: {
        type: Datatypes.STRING,
        max: 100
    },
    customer_size: {
        type: Datatypes.STRING,
        isAlphanumeric: true
    }
}, 

{
    freezeTableName: true
});

return Customer;

};
