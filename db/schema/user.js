var mongoose = require('mongoose'),
		Schema = mongoose.Schema;

// define user schema
var UserSchema = new Schema({
	username: String,
	firstName: String,
	lastName: String,
	age: Number
}, {
	collection: 'User'
});

// init user model
var UserModel = mongoose.model('User', UserSchema);

/**
 * expose
 */
module.exports = UserModel;