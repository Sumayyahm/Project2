// ******************************************************************************************************
// artist-api.js - this file offers a set of routes for displaying and saving data to the db for artist
// ******************************************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var db = require("../models");


module.exports = function (app) {

    // GET route for getting all of the artist 
    app.get("/api/artist/all", function (req, res) {
        db.Artist.findAll({}).then(function (dbArtist) {
            res.json(dbArtist);
        });
    });


    // GET a specific artist 
    app.get("/api/artist/:artist", function (req, res) {
        db.Artist.findOne({
            where: {
                artist: req.params.artist
            }
        }).then(function (dbArtist) {
            res.json(dbArtist);
        });
    });

    //Get all artist by artwork

    app.get("/api/artist/:artwork", function (req, res) {
        db.Artist.findAll({
            where: {
                artwork: req.params.artwork
            },
            include: [db.Artwork]
        }).then(function(dbArtist) {
            res.json(dbArtist)
        });
    });

       //Get all artist by style

       app.get("/api/artist/:style", function (req, res) {
        db.Artist.findAll({
            where: {
                style: req.params.style
            },
            include: [db.Style]
        }).then(function(dbArtist) {
            res.json(dbArtist)
        });
    });

    // ADD an artist 
    app.post("/api/artist", function (req, res) {
        db.Artist.create(req.body).then(function(dbArtist) {
            res.json(dbArtist)
        });
    });


    // DELETE an artist 
    app.delete("/api/artist/:id", function (req, res) {
        console.log("Artist ID:");
        console.log(req.params.id);
        db.Artist.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    });

};