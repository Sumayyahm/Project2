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


    // ADD an artist 
    app.post("/api/artist/new", function (req, res) {
        console.log("Artist Data:");
        console.log(req.body);
        db.Artist.create({
            artist_name: req.body.artistName,
            artist_phone: req.body.artistPhone,
            artist_email: req.body.artistEmail,
            artist_bio: req.body.artistBio,
            artist_portait: req.body.artistPort 
        }).then(function (dbArtist) {
            res.json(dbArtist);
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