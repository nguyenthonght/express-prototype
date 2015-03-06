var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

// define user schema
var BookSchema = new Schema({
	title: String,
	author: String
}, {
	collection: 'Book'
});

// init user model
var BookModel = mongoose.model('Book', BookSchema);

/**
 * expose
 */
module.exports = BookModel;