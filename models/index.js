var mongoose = require("mongoose");

// set connections to localhost
mongoose.connect("mongodb://localhost/cardsAgainstAssembly");

module.exports.Card = require('./cards.js');