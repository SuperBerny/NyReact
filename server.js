//Dependencies
//======================================================
const express = require('express');
const bodyParser = require('body-parser');
const mongoose = require('mongoose');
const routes = require('./routes');
const app = express();
const PORT = process.env.PORT || 3000;

//Configure body parser for AJAX requests
//======================================================
app.use(bodyParser.urlencoded({ extended: true}));
app.use(bodyParser.json());

//Serve up static assets
//======================================================
app.use(express.static("client/build"));

//Add routes
//======================================================
app.use(routes);

//Set up promises with mongoose
//======================================================
mongoose.Promise = global.promise;

//Connect to MongoDB
//======================================================
const mongoUri = process.env['MONGODV_URI'];
mongoose.connect(
   mongoUri,
   {useMongoClient: true}
);

//Start the API Server
//======================================================
app.listen(PORT, function() {
   console.log(
      `🌎 ==> API Server now listening on PORT ${PORT}`
   );
});