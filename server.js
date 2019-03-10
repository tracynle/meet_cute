// Dependencies
// =============================================================
var express = require("express");
var path = require("path");
var htmlRoutes = require('./app/routing/htmlRoutes');
var apiRoutes = require("./app/routing/apiRoutes");
var bodyParser = require('body-parser');


// Sets up the Express App
// =============================================================
var app = express();
var PORT = 3000;

// Sets up the Express app to handle data parsing
app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, "app/public")));
app.use(bodyParser.urlencoded({ extended: true }));

// Gets all the pages from htmlRoutes from file
app.use(htmlRoutes);
app.use(apiRoutes);



// Starts the server to begin listening
app.listen(PORT, function() {
    console.log("App listening on PORT " + PORT);
}); 



