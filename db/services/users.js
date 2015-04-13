var model = require('../schema/user'),
		Base = require('../base-service');

// define services of user
var Services = Base.extend({
	modelClass: model
});

/**
 * Expose
 */
module.exports = Services;