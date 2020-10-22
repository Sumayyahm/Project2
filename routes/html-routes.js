const { decodeBase64 } = require("bcryptjs");
var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");

var db = require("../models")

module.exports = function (app) {

    app.get("/", function (req, res) {

        db.Artist.findAll({}).then(function (dbArtist) {

            var artistObj = {
                Artist: dbArtist
            }

            db.Style.findAll({}).then(function (dbStyle) {

                var styleObj = {
                    Style: dbStyle
                }

                var headerData = {
                    navStyles: styleObj,
                    navArtists: artistObj
                }


                res.render("index", headerData)
            })

        })



    });

    app.get("/collection/:style_name", function (req, res) {
        db.Artist.findAll({}).then(function (dbArtist) {

            var artistObj = {
                Artist: dbArtist
            }

            db.Style.findAll({}).then(function (dbStyle) {

                var styleObjNav = {
                    Style: dbStyle
                }

                db.Style.findOne({
                    where: {
                        style_name: req.params.style_name
                    }
                }).then(function (styleData) {

                    var styleObj = {
                        Style: styleData
                    }

                    db.Artwork.findAll({
                        where: {
                            style_name: req.params.style_name
                        }
                    }).then(function (artworkData) {

                        var artworkObj = {
                            Artwork: artworkData
                        }

                        var collectionsData = {
                            collArtwork: artworkObj,
                            collStyle: styleObj,
                            navStyles: styleObjNav,
                            navArtists: artistObj
                        }


                        res.render("collections", collectionsData);
                    })
                })
            })
        })
    })

    app.get("/artist/:artistName", function (req, res) {
        db.Artist.findAll({}).then(function (dbArtist) {

            var artistObj = {
                Artist: dbArtist
            }

            db.Style.findAll({}).then(function (dbStyle) {

                var styleObjNav = {
                    Style: dbStyle
                }

                db.Artist.findOne({
                    where: {
                        artist_name: req.params.artistName
                    }
                }).then(function (artistName) {
                    var artistDispName = {
                        artistname: artistName
                    }

                    db.Artwork.findAll({
                        where: {
                            artist_name: req.params.artistName
                        }
                    }).then(function (artworkData) {

                        var artworkObj = {
                            Artwork: artworkData
                        }

                        var artistData = {
                            artistArtwork: artworkObj,
                            artistHeader: artistDispName,
                            navStyles: styleObjNav,
                            navArtists: artistObj
                        }

                        res.render("artists", artistData);
                    })
                })
            })
        })
    })

    app.get("/exhibitions", function (req, res) {

        db.Artist.findAll({}).then(function (dbArtist) {

            var artistObj = {
                Artist: dbArtist
            }

            db.Style.findAll({}).then(function (dbStyle) {

                var styleObj = {
                    Style: dbStyle
                }

                db.Exhibit.findAll({}).then(function (dataExhibit) {

                    var exhibitObj = {
                        Exhibit: dataExhibit
                    }


                    var headerData = {
                        navStyles: styleObj,
                        navArtists: artistObj,
                        exhibitData: exhibitObj
                    }

                    res.render("exhibition", headerData)
                });
            });
        });
    });

    app.get("/about", function (req, res) {

        db.Artist.findAll({}).then(function (dbArtist) {

            var artistObj = {
                Artist: dbArtist
            }

            db.Style.findAll({}).then(function (dbStyle) {

                var styleObj = {
                    Style: dbStyle
                }

                var headerData = {
                    navStyles: styleObj,
                    navArtists: artistObj
                }


                res.render("about", headerData)
            })
        })
    });

    app.get("/manager", isAuthenticated, function (req, res) {
        db.Artist.findAll({}).then(function (dbArtist) {

            var artistObj = {
                Artist: dbArtist
            }

            db.Style.findAll({}).then(function (dbStyle) {

                var styleObj = {
                    Style: dbStyle
                }

                var headerData = {
                    navStyles: styleObj,
                    navArtists: artistObj
                }

                res.render("cplogged", headerData)
            })
        })
    })

}