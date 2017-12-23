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
// mongoose.Promise = global.promise;

//Connect to MongoDB
//======================================================
// const mongoUri = process.env['MONGODV_URI'];
// mongoose.connect(
//    mongoUri,
//    {useMongoClient: true}
// );

      //This is the error I get when using mongoose.Promise = global.promise; and lines 29-33;
      /* 
      (node:9440) DeprecationWarning: `open()` is deprecated in mongoose >= 4.11.0, use `openUri()` instead, or set the `useMongoClient` option if using `connect()` or `createConnection()`. See http://mongoosejs.com/docs/connections.html#use-mongo-client
API Server now listening on PORT 3000

events.js:160
      throw er; // Unhandled 'error' event
      ^
MongoError: failed to connect to server [undefined:27017] on first connect [MongoError: getaddrinfo ENOTFOUND undefined undefined:27017]
    at Pool.<anonymous> (C:\Users\batpa\Desktop\Bootcamp\NyReact\node_modules\mongodb-core\lib\topologies\server.js:336:35)
    at emitOne (events.js:96:13)
    at Pool.emit (events.js:188:7)
    at Connection.<anonymous> (C:\Users\batpa\Desktop\Bootcamp\NyReact\node_modules\mongodb-core\lib\connection\pool.js:280:12)
    at Connection.g (events.js:292:16)
    at emitTwo (events.js:106:13)
    at Connection.emit (events.js:191:7)
    at Socket.<anonymous> (C:\Users\batpa\Desktop\Bootcamp\NyReact\node_modules\mongodb-core\lib\connection\connection.js:187:49)
    at Socket.g (events.js:292:16)
    at emitOne (events.js:96:13)
    at Socket.emit (events.js:188:7)
    at connectErrorNT (net.js:1021:8)
    at _combinedTickCallback (internal/process/next_tick.js:80:11)
    at process._tickCallback (internal/process/next_tick.js:104:9)
   */

var promise = mongoose.connect(
   'mongodb://localhost/myapp',
    {useMongoClient: true}
);


//Start the API Server
//======================================================
app.listen(PORT, function() {
   console.log(
      `API Server now listening on PORT ${PORT}`
   );
});