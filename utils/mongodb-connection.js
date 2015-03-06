var mongoose = require('mongoose'),
		config = require('./config'),
		log = require('./logs');

var App = {
	init: function (callback) {
		mongoose.connect(config.get('database:connectionString'), function (err) {
			if (err)
				log.info(err);
			
			log.info('connect to mongo success');
			callback && callback();
		});
	}
}

module.exports = App;