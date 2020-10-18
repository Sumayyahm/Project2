// Dependencies
// =============================================================

// Requiring our models
var Style = require("../models/style.js");


module.exports = function(app) {
    //Route for getting data from the collection table
    app.get("/api/:style", function(req,res) {
        Style.findAll({
            where: {
                style: req.params.style
            }
        }).then(function(results) {
            res.json(results);
        });
    });
}