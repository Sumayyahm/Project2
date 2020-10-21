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

            db.Style.findAll({}).then(function(dbStyle){

                var styleObj ={
                    Style:dbStyle
                }
    
                var headerData = {
                    navStyles:styleObj,
                    navArtists: artistObj
                }


                res.render("index", headerData)
                console.log(headerData.navArtists.Artist)
            })

        })

        

    });

    app.get("/collections/:style_name", function(req,res){
        db.Style.findOne({
            where: {
                style_name: req.params.style_name
            }
        }).then(function(styleData){

            var styleObj = {
                Style: styleData
            }
            db.Artwork.findAll({
                where: {
                    style_name: req.params.style_name
                }
            }).then(function(artworkData){
                
                var artworkObj ={
                    Artwork: artworkData
                }

                var collectionsData = {
                    collArtwork:artworkObj,
                    collStyle: styleObj
                }
                
    
                res.render("collections", collectionsData)
                console.log(collectionsData)
            })
        })
        

    })

    app.get("/manager", isAuthenticated, function (req, res) {

        res.sendFile(path.join(__dirname, "../public/cplogged.html"))
    })

}