var _ = require('underscore'),
		Base = require('../rest-base-controller');

var User = Base.extend({
	dbServiceName: 'dbUser',

	actions: {
		'get-user-by-name': {
			fn: 'getUserByName'
		},
		'get-by-id': {
			fn: 'getById'
		}
	},
	
	/**
	 * override
	 */
	get: function (opts, callback) {
		if (opts.action)
			return callback(null, {override: true});
		
		return this.base(opts, callback);
	},

	getUserByName: function (opts, callback) {
		callback(null, {testing: true});
	},

	getById: function (opts, callback) {

	}
});


module.exports = User;