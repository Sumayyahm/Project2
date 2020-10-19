// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");


module.exports = function(app) {
    //Route for getting data from the collection table
    app.get("/api/:style", function(req,res) {
        db.Style.findAll({
            where: {
                style: req.params.style
            }
        }).then(function(dbStyle) {
            res.json(dbStyle);
        });
    });
}