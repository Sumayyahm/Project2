// ******************************************************************************************************
// exhibit-api.js - this file offers a set of routes for displaying and saving data to the db for exhibits
// ******************************************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");


module.exports = function (app) {

    //ADD a customer 
    app.post("/api/exhibit", function (req, res) {
        db.Exhibit.create(req.body).then(function(dbExhibit) {
            res.json(dbExhibit)
        })

    });
};

