var path = require("path");
var isAuthenticated = require("../config/middleware/isAuthenticated");
module.exports = function(app) {

    app.get("/", function(req,res){

        res.sendFile(path.join(__dirname, "../public/index.html"))
    });

    app.get("/manager", isAuthenticated, function(req,res) {

        res.sendFile(path.join(__dirname, "../public/cplogged.html"))
    })

}