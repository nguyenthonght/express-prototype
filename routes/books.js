var express = require('express'),
		router = express.Router(),
		Base = require('./controller'),
		log = require('../utils/logs');

// create a Book router from the base
var Book = new Base('dbBook', router);

// adding basic route
router = Book.getRouter();

/**
 * Expose
 */
module.exports = router;