require('dotenv').config()
var express = require("express");
var session = require("express-session");

var passport = require("./config/passport");

var app = express();
var PORT = process.env.PORT || process.env.LOCALPORT;

var db = require("./models");

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use(express.static("public"));

app.use(session({ secret: "keyboard cat", resave: true, saveUninitialized: true }));
app.use(passport.initialize());
app.use(passport.session());

// Set Handlebars.
var exphbs = require("express-handlebars");
app.engine("handlebars", exphbs({ defaultLayout: "main" }));
app.set("view engine", "handlebars");



require("./routes/artist-api.js")(app);
require("./routes/artwork-api.js")(app);
require("./routes/customer-api.js")(app);
require("./routes/style-api.js")(app);
require("./routes/html-routes.js")(app);

db.sequelize.sync({}).then(function () {
  app.listen(PORT, function () {
    console.log("==>  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });
});