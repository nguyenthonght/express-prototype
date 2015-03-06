var express = require('express'),
		router = express.Router(),
		controller = require('./controller'),
		log = require('../utils/logs');

/* GET users listing. */
router.get('/', function(req, res, next) {
	var dbUser = controller.db.dbUser.modelClass;
	
	// find all users
	dbUser.find(function (err, users) {
		res.send(users);
	});
});

module.exports = router;