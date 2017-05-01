var express = require('express');

// define router
var router = express.Router();

// require cards controllers
var cardsController = require('../controllers/cardsController');

// show route
router.route('/cards/:_id')
	.get(cardsController.cardGet)
	.delete(cardsController.cardDelete)


// index route
router.route('/cards') // index
  .get(cardsController.cardsGet)
  .post(cardsController.cardPost)


// export router
module.exports = router