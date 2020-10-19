// ******************************************************************************************************
// customer-api.js - this file offers a set of routes for displaying and saving data to the db for customer
// ******************************************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");


module.exports = function (app) {

    // GET route for getting all of the customers 
    app.get("/api/customer/all", function (req, res) {
        db.Customer.findAll({}).then(function (dbCustomer) {
            res.json(dbCustomer);
        });
    });


    // GET a specific customer 
    app.get("/api/:customer", function (req, res) {
        db.Customer.findOne({
            where: {
                customer_name: req.params.customer
            }
        }).then(function (dbCustomer) {
            res.json(dbCustomer);
        });
    });

    // GET all customers by art style preference 
    app.get("/api/customer/:style", function (req, res) {
        db.Customer.findAne({
            where: {
                customer_style: req.params.style
            }
        }).then(function (dbCustomer) {
            res.json(dbCustomer);
        });
    });

    //GET all customers by color preference 
    app.get("/api/customer/:color", function (req, res) {
        db.Customer.findAll({
            where: {
                customer_color: req.params.color
            }
        }).then(function (dbCustomer) {
            res.json(dbCustomer);
        });
    });

    //GET all customers by medium preference 
    app.get("/api/customer/:medium", function (req, res) {
        db.Customer.findAll({
            where: {
                customer_medium: req.params.medium
            }
        }).then(function (dbCustomer) {
            res.json(dbCustomer);
        });
    });

    //GET all customers by size preference 
    app.get("/api/customer/:size", function (req, res) {
        db.Customer.findAll({
            where: {
                customer_size: req.params.size
            }
        }).then(function (dbCustomer) {
            res.json(dbCustomer);
        });
    });

    //ADD a customer 
    app.post("/api/customer/new", function (req, res) {
        console.log("Customer Data:");
        console.log(req.body);
        db.Customer.create({
            customer_name: req.body.custName,
            customer_phone: req.body.custPhone,
            customer_email: req.body.custEmail,
            customer_style: req.body.custStyle,
            customer_color: req.body.custColor,
            customer_size: req.body.custSize,
        }).then(function (dbCustomer) {
            res.json(dbCustomer);
        });

    });

    //DELETE customer
    app.delete("/api/customer/:id", function (req, res) {
        console.log("Customer ID:");
        console.log(req.params.id);
        db.Customer.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    });
};

