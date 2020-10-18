require('dotenv').config()
var express = require("express");

var app = express();
var path = require("path");
var PORT = process.env.PORT || process.env.LOCALPORT;

var db = require("./models");

app.use(express.static("public"));

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set('views', path.join(__dirname, '/views'));
app.set("view engine", "handlebars");

require("./routes/artist-api.js")(app);
require("./routes/artwork-api.js")(app);
require("./routes/customer-api.js")(app);
require("./routes/style-api.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({ force: true }).then(function () {

  app.listen(PORT, function () {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});