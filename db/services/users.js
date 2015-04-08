var model = require('../schema/user'),
		Services;

// define services of user
Services = {
	modelClass: model,

	getAll: function (callback) {
		this.modelClass.find(callback);
	}
};

/**
 * Expose
 */
module.exports = Services;