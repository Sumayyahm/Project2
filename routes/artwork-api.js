// ******************************************************************************************************
// artwork-api.js - this file offers a set of routes for displaying and saving data to the db for artwork
// ******************************************************************************************************

// Dependencies
// =============================================================

// Requiring our models
const db = require("../models/index.js");


module.exports = function (app) {

    // GET all artwork

    app.get("/api/artwork/all", function (req, res) {
        db.Artwork.findAll({}).then(function (dbArtwork) {
            res.json(dbArtwork);
        });
    });

    // GET one artwork

    app.get("/api/:artwork", function (req, res) {
        db.Artwork.findAll({
            where: {
                artwork_name: req.params.artwork
            }
        }).then(function (dbArtwork) {
            res.json(dbArtwork);
        });
    });

    // GET artworks by style

    app.get("/api/artwork/:style", function (req, res) {
        db.Artwork.findAll({
            where: {

            }
        })
    })


    app.post("/api/artwork", function (req, res) {
        console.log("Artwork Data:");
        console.log(req.body);
        db.Artwork.create({
            artwork_name: "test",
            artwork_size: "20 inches",
            artwork_descript: "this is a test",
            artwork_medium: "None",
            artwork_colortone: "None",
            artwork_image: req.body.imgUrl,
            artwork_pubID: req.body.publicId
        }).then(function (dbResults) {
            res.json(dbResults);
        });
    });



    // GET artworks by artist 

    // GET artworks by size

    // GET artworks by medium

    // GET artworks by color tones

    // GET artworks by price

    // ADD artwork 

    // DELETE artwork





}