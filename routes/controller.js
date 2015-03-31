var databaseManager = require('../db'),
		mongoConnection = require('../utils/mongodb-connection');

var App = function (serviceName, router) {
	this.db = databaseManager;
	this.modelClass = this.db[serviceName].modelClass;
	this.router = router;

	this.init();
	this.route();
};

/**
 * Init database
 */
App.prototype.init = function (callback) {
	if (this.isInitDone) {
		return callback && callback();
	} else {
		this.isInitDone = true;
		mongoConnection.init(callback);
	}
};

/**
 * Get this router
 */
App.prototype.getRouter = function () {
	return this.router;
};

/**
 * Add basic route
 */
App.prototype.route = function () {
	var self = this;

	// get all
	this.router.get('/', function (req, res) {
		self.modelClass.find(function (err, results) {
			res.send(results);
		});
	});

	// get by id
	this.router.get('/:id', function (req, res) {
		var id = req.params.id;

		self.modelClass.findOne({_id: id}, function (err, data) {
			res.send(data);
		});
	});

	// post
	this.router.post('/', function (req, res) {
		var body = req.body;

		new self.modelClass(body).save(function (err, results) {
			res.send(results);
		});
	});

	// put
	this.router.put('/:id', function (req, res) {
		// TODO
	});

	// remove
	this.router.delete('/:id', function (req, res) {
		var id = req.params.id;

		self.modelClass.remove({_id: id}, function (err, results) {
			res.send(results);
		});
	});

	return this.router;
};

module.exports = App;