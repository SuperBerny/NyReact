//Require Mongoose
//======================================================
const mongoose = require('mongoose');

//Create Schema Class
//======================================================
const Schema = mongoose.Schema;

//Create Article Class
//======================================================
const articleSchema = new Schema({
   //Article Title
   title: {
      type: String,
      required: true
   },
   //Publish Date
   date: {
      type: String,
      required: true
   },
   //Link
   url: {
      type: String,
      required: true
   }
});

//Create the Article Model with mongoose
//======================================================
const Article = mongoose.model("Article", articleSchema);

//Export the Article Model
module.exports = Article;