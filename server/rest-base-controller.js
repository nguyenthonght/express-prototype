var oop = require('node-g3').oop;

var Base = oop.Base.extend({
	dbServiceName: null,
	dbControllerName: null,

	constructor: function (opts) {
		this.app = opts.app;
		this.db = opts.db;
	},

	get: function (opts, callback) {
		this.getService().getAll(callback);		
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
		var controller = this[opts.method];

		if (controller)
			return this[opts.method](opts, callback);
			// return controller(opts, callback);
		else
			return callback('wrong request');
	}
});

module.exports = Base;