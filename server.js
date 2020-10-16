require('dotenv').config()
var express = require("express");


var PORT = process.env.PORT || process.env.LOCALPORT ;

var app = express();
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static("public"));

require("./routes/html-routes.js")(app);
// require("./routes/api-routes.js")(app);

app.listen(PORT, function() {
    console.log("==> 🌎  Listening on port %s. Visit http://localhost:%s/ in your browser.", PORT, PORT);
  });