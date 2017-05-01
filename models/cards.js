// require mongoose
var mongoose = require('mongoose');

// create event schema 
var CardSchema = mongoose.Schema({
	question: String,
});

// create model and export event model
module.exports = mongoose.model('Card', CardSchema);
