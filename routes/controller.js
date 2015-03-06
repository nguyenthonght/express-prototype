var databaseManager = require('../db'),
		mongoConnection = require('../utils/mongodb-connection'),
		App;

App = {
	// db entity
	db: databaseManager,
	
	// create database connection
	init: function (callback) {
		if (this.isDone) {
			return callback && callback();
		} else {
			this.isDone = true;
			mongoConnection.init(callback);
		}
	}
};

module.exports = App;