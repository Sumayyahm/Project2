// ******************************************************************************************************
// customer-api.js - this file offers a set of routes for displaying and saving data to the db for customer
// ******************************************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var Customer = require("../models/customer.js");


module.exports = function (app) {

    // GET route for getting all of the customers 
    app.get("/api/customer/all", function (req, res) {
        Customer.findAll({}).then(function (results) {
            res.json(results);
        });
    });


    // GET a specific customer 
    app.get("/api/:customer", function (req, res) {
        Customer.findAll({
            where: {
                customer_name: req.params.book
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    // GET all customers by art style preference 
    app.get("/api/customer/:style", function (req, res) {
        Customer.findAll({
            where: {
                customer_style: req.params.genre
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    //GET all customers by color preference 
    app.get("/api/customer/:color", function (req, res) {
        Customer.findAll({
            where: {
                customer_color: req.params.genre
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    //GET all customers by medium preference 
    app.get("/api/customer/:medium", function (req, res) {
        Customer.findAll({
            where: {
                customer_medium: req.params.genre
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    //GET all customers by size preference 
    app.get("/api/customer/:size", function (req, res) {
        Customer.findAll({
            where: {
                customer_size: req.params.genre
            }
        }).then(function (results) {
            res.json(results);
        });
    });

    //ADD a customer 
    app.post("/api/customer/new", function (req, res) {
        console.log("Customer Data:");
        console.log(req.body);
        Customer.create({
            customer_name: req.body.custName,
            customer_phone: req.body.custPhone,
            customer_email: req.body.custEmail,
            customer_style: req.body.custStyle,
            customer_color: req.body.custColor,
            customer_size: req.body.custSize,
        }).then(function (results) {
            res.json(results);
        });

    });

    //DELETE customer
    app.delete("/api/customer/:id", function (req, res) {
        console.log("Customer ID:");
        console.log(req.params.id);
        Customer.destroy({
            where: {
                id: req.params.custId
            }
        }).then(function () {
            res.end();
        });
    });
};

