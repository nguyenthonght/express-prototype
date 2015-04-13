var oop = require('node-g3').oop;

var Base = oop.Base.extend({
	modelClass: null,

	constructor: function (opts) {
		this.opts = opts;
	},

	getAll: function (callback) {
		this.modelClass.find(callback);
	},

	find: function (query, callback) {
		this.modelClass.find(query, callback);
	},

	create: function (data, callback) {
		new this.modelClass(data).save(callback);
	},

	remove: function (id, callback) {
		this.modelClass.findByIdAndRemove(id, callback);
	},

	update: function (id, data, callback) {
		this.modelClass.findById(id, function (err, model) {
			if (err || !model)
				return callback(err);

			// set update value
			_.each(model, function (value, key) {
				if (data && data[key])
					model[key] = data[key];
			});

			// save
			model.save(callback);
		});
	},

	findById: function (id, callback) {
		this.modelClass.findById(id, callback);
	}
});

/**
 * Expose
 */
module.exports = Base;