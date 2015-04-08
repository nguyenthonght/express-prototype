/**
 * The only module that holds app object of express
 */
var async = require('async'),
		_ = require('underscore'),
		Router = require('./router'),
		DatabaseManager = require('../db'),
		mongoConnection = require('../utils/mongodb-connection'),
		Server;

Server = function (opts) {
	var self = this,
			webapp = this.webapp = opts.app,
			db = this.db = DatabaseManager,
			router = this.router = new Router({db: db, apis: ['users']});

	var apiHandler = function(req, res, next) {
		var requestParams = _.clone({
					controller: req.params.controller,
					action: req.params.action,
					query: req.query,
					method: req.method.toLowerCase(),
					data: req.body
				});

		requestParams = _.extend(requestParams, {
			req: req,
			res: res,
			next: next
		});

		self.router.handle(requestParams, function (err, results) {
			res.set('Content-Type', 'application/json');

			if (err)
				res.send(404, err);
			else
				res.send(200, results);
		});
	};

	webapp.all('/api/:controller', apiHandler);
	mongoConnection.init();
};



module.exports = Server;