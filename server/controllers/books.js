var _ = require('underscore'),
		Base = require('../rest-base-controller');

var User = Base.extend({
	dbServiceName: 'dbBook'
});


module.exports = User;