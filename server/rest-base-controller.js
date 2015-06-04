var oop = require('node-g3').oop;

var Base = oop.Base.extend({
	dbServiceName: null,
	dbControllerName: null,

	constructor: function (opts) {
		this.app = opts.app;
		this.db = opts.db;
	},

	actions: {

	},

	get: function (opts, callback) {
		this.getService().getAll(callback);		
	},

	getById: function (id, callback) {
		this.getService().findById(id, callback);
	},

	post: function (opts, callback) {
		this.getService().create(opts.data, callback);
	},

	put: function (opts, callback) {
		this.getService().update(opts.action, opts.data, callback);
	},

	delete: function (opts, callback) {
		this.getService().remove(opts.action, callback);
	},

	getService: function () {
		return this.db[this.dbServiceName];
	},

	handle: function (opts, callback) {
		var controller = this[opts.method],
				action = opts.action;

		if (controller) {
			if (action && this.actions[action] && this.actions[action].fn) {
				this[this.actions[action].fn](opts, callback);
			} else {
				return this[opts.method](opts, callback);	
			}			
		} else {
			return callback('wrong request');
		}
	}
});

module.exports = Base;