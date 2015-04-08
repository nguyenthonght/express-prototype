var oop = require('node-g3').oop;

var Base = oop.Base.extend({
	dbServiceName: null,
	dbControllerName: null,

	constructor: function (opts) {
		this.app = opts.app;
		this.db = opts.db;
	},

	get: function (opts, callback) {
		var service = this.getService();

		service.modelClass.find(callback);		
	},

	getService: function () {
		return this.db[this.dbServiceName];
	},

	handle: function (opts, callback) {
		var controller = this[opts.method];

		console.log(this[opts.method], controller);

		// return this.get(opts, callback);

		if (controller)
			return controller(opts, callback);
		else
			return callback('wrong request');
	}
});

module.exports = Base;