var _ = require('underscore'),
		Base = require('../rest-base-controller');

var User = Base.extend({
	dbServiceName: 'dbUser'
});


module.exports = User;