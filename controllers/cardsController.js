// require models
var db = require("../models");

// eventGet controller
var cardsGet = function(req, res) {
	db.Card.find({}, function (err, cards){
		console.log(cards);
		res.json(cards);
	});
} 

var cardGet = function(req, res) {
	db.Card.findOne({_id: req.params._id}, function(err, card) {
		// if there is no card sent json message
		if (!card) {
			res.json({"message": "Not found"});
		}
		res.json(card);
	});
}

var cardPost = function(req, res) {
	console.log(req.body.newQuestion);
	db.Card.create({question: req.body.newQuestion} , function(err, card){
      if (err) { return console.log('err', err); }
      console.log("created", card);
    });
}

// export controllers
module.exports.cardsGet = cardsGet;
module.exports.cardGet = cardGet;
module.exports.cardPost = cardPost;