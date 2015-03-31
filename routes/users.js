var express = require('express'),
		router = express.Router(),
		Base = require('./controller'),
		log = require('../utils/logs');

// create a User router from the base
var User = new Base('dbUser', router);

// adding basic route
router = User.getRouter();

// try to override a method
router.get('/override', function (req, res) {
	res.send('override some method');
});

/**
 * Expose
 */
module.exports = router;