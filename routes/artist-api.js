// ******************************************************************************************************
// artist-api.js - this file offers a set of routes for displaying and saving data to the db for artist
// ******************************************************************************************************

// Dependencies
// =============================================================

// Requiring our models
var Artist = require("../models/artist.js");


module.exports = function (app) {

    // GET route for getting all of the artist 
    app.get("/api/artist/all", function (req, res) {
        Artist.findAll({}).then(function (results) {
            res.json(results);
        });
    });


    // GET a specific artist 
    app.get("/api/artist/:artist", function (req, res) {
        Artist.findOne({
            where: {
                artist: req.params.artist
            }
        }).then(function (results) {
            res.json(results);
        });
    });


    // ADD an artist 
    app.post("/api/artist/new", function (req, res) {
        console.log("Artist Data:");
        console.log(req.body);
        Book.create({
            artist_name: req.body.artistName,
            artist_phone: req.body.artistPhone,
            artist_email: req.body.artistEmail,
            artist_bio: req.body.artistBio,
            artist_portait: req.body.artistPort 
        }).then(function (results) {
            res.json(results);
        });
    });


    // DELETE an artist 
    app.delete("/api/artist/:id", function (req, res) {
        console.log("Artist ID:");
        console.log(req.params.id);
        Artist.destroy({
            where: {
                id: req.params.id
            }
        }).then(function () {
            res.end();
        });
    });

};