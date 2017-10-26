// Dependencies
var express = require("express");
var bodyParser = require("body-parser");
var path = require("path");


//  Express App and Routes
var app = express();
var PORT = process.env.PORT || 3000
// var PORT = 3000;



// Sets up the Express app to handle data parsing
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
// app.use(bodyParser.text());



//require the html Routes
require("./app/routing/htmlRoutes.js")(app);

//require the api Routes
require("./app/routing/apiRoutes.js")(app);



// Starts the server to begin listening
app.listen(PORT, function() {
  console.log("App listening on PORT " + PORT);
});