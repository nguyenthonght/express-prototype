var _ = require('underscore'),
		userServices = require('./services/users'),
		bookServices = require('./services/books'),
		classes = {
			dbUser: userServices,
			dbBook: bookServices
		},
		neededServices = {};

_.each(classes, function (item, key) {
	neededServices[key] = new item();
});

module.exports = neededServices;