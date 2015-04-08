var _ = require('underscore');

var Controller = function (opts) {
		this.db = opts.db;
		this.apis = opts.apis;
		this.controllers = {};

		this.init();
	};

	/**
	 * @method
	 */
	Controller.prototype.init = function (fn) {
		var self = this,
				app = this.app;

		_.each(this.apis, function (item) {
			var controllerClass = require('./controllers/' + item),
					controller = new controllerClass({db: self.db}),
					controllerName = item;
			
			self.controllers[item] = controller;
		});

		fn && fn();
	};

	Controller.prototype.handle = function (opts, fn) {
		var controller = this.controllers[opts.controller];

		if (controller) {
			return controller.handle(opts, fn);
		} else {
			return fn && fn('wrong request!!!');
		}
	};

module.exports = Controller;