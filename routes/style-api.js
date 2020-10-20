// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");


module.exports = function(app) {
    //GET all of the styles
    app.get("/api/style/all", function(req,res) {
        db.Style.findAll({}).then(function(dbStyle) {
            res.json(dbStyle);
        });
    });

    //GET a specific style

    app.get("/api/style/:style", function (req, res) {
        db.Style.findOne({
            where: {
                style: req.params.style
            }
        }).then(function (dbStyle) {
            res.json(dbStyle);
        });
    });

    // ADD a Style 

    app.post("/api/style", function (req, res) {
        db.Style.create(req.body).then(function(dbStyle) {
            res.json(dbStyle);
        });
    });
}

