// ******************************************************************************************************
// artwork-api.js - this file offers a set of routes for displaying and saving data to the db for artwork
// ******************************************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var Artwork = require("../models/artwork.js");


module.exports = function (app) {

    app.post("/api/artwork", function (req, res) {
        console.log("Artwork Data:");
        console.log(req.body);
        Artwork.create({
            artwork_name: "test",
            artwork_size: "20 inches",
            artwork_descript: "this is a test",
            artwork_medium: "None",
            artwork_colortone: "None",
            artwork_image: req.body.imgUrl,
            artwork_pubID: req.body.publicId
        }).then(function (results) {
            res.json(results);
        });
    });
    
}