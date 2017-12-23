const db = require('../models');

//Define methods for the articlesController
module.exports = {
   findAll: function(req, res) {
      db.nytreact
         .find(req.query)
         .sort({date: -1})
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
   },
   findById: function(req, res) {
      db.nyreact
         .findById(req.params.id)
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
   },
   create: function(req, res) {
      db.nyreact
         .create(req.body)
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
   },
   update: function(req, res) {
      db.nyreact
         .findOneAndUpdate({ _id: req.params.id })
         .then(dbModel => dbModel.remove())
         .then(dbModel => res.json(dbModel))
         .catch(err => res.status(422).json(err));
   }
};