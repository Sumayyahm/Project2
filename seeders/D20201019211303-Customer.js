'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert("Customer", [{
    customer_name: "John Doe",
    customer_phone: "2817992444",
    customer_email: "joe.d@gmail.com",
    customer_style: "Impressionism",
    customer_color: "blue",
    customer_medium: "oil",
    customer_size: "4 x 8",
    createdAt:new Date (),
    updatedAt:new Date ()
  },{
    customer_name: "Jane Doe",
    customer_phone: "281799245",
    customer_email: "joe.d@gmail.com",
    customer_style: "Impressionism",
    customer_color: "orange",
    customer_medium: "oil",
    customer_size: "4 x 8",
    createdAt:new Date (),
    updatedAt:new Date ()
  },{
    customer_name: "Tim Smith",
    customer_phone: "2817992446",
    customer_email: "peter.d@gmail.com",
    customer_style: "Impressionism",
    customer_color: "white",
    customer_medium: "oil",
    customer_size: "4 x 8",
    createdAt:new Date (),
    updatedAt:new Date ()
  },{
    customer_name: "Sandra Bullock",
    customer_phone: "2817992447",
    customer_email: "michael.d@gmail.com",
    customer_style: "Impressionism",
    customer_color: "pink",
    customer_medium: "oil",
    customer_size: "4 x 8",
    createdAt:new Date (),
    updatedAt:new Date ()
  },{
    customer_name: "Charles Barkley",
    customer_phone: "2817992447",
    customer_email: "michael.d@gmail.com",
    customer_style: "Impressionism",
    customer_color: "pink",
    customer_medium: "oil",
    customer_size: "4 x 8",
    createdAt:new Date (),
    updatedAt:new Date ()
  }
]);
},


  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
