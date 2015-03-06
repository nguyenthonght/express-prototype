var userServices = require('./services/users'),
		bookServices = require('./services/books'),
		neededServices = {
			dbUser: userServices,
			dbBook: bookServices
		};

module.exports = neededServices;