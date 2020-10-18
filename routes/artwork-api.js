// ******************************************************************************************************
// artwork-api.js - this file offers a set of routes for displaying and saving data to the db for artwork
// ******************************************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var Artwork = require("../models/artwork.js");


module.exports = function (app) {

    // GET all artwork

    app.get("/api/artwork/all", function(req,res) {
        db.Artwork.findAll({}).then(function (dbArtwork) {
            res.json(dbArtwork);
        });
    });

    // GET one artwork

    app.get("/api/:artwork", function (req, res) {
        db.Artwork.findAll({
            where: {
                artwork_name: req.params.artistName
            }
        }).then(function (dbArtwork) {
            res.json(dbArtwork);
        });
    });

    // GET artworks by style

    app.get("/api/artwork/:style", function (req, res) {
        db.Artwork.findAll ({
            where: {
                
            }
        })
    })

    // GET artworks by artist 

    // GET artworks by size

    // GET artworks by medium
    
    // GET artworks by color tones

    // GET artworks by price

    // ADD artwork 

    // DELETE artwork





}