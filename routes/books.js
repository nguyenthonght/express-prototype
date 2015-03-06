var express = require('express'),
		router = express.Router(),
		controller = require('./controller'),
		log = require('../utils/logs');

/* GET books listing. */
router.get('/', function(req, res, next) {
	var dbBook = controller.db.dbBook.modelClass;
	
	// find all books
	dbBook.find(function (err, books) {
		res.send(books);
	});
});

module.exports = router;