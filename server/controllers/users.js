var _ = require('underscore'),
		Base = require('../rest-base-controller');

var User = Base.extend({
	dbServiceName: 'dbUser',
	
	/**
	 * override
	 */
	get: function (opts, callback) {
		if (opts.action)
			return callback(null, {override: true});
		
		return this.base(opts, callback);
	}
});


module.exports = User;