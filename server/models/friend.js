
var mongoose = require('mongoose');
// build your friend schema and add it to the mongoose.models
var FriendSchema = new mongoose.Schema({
	first_name: {type: String, required: true, minlength: 2},
	last_name: {type: String, required: true, minlength: 2},
	birthday: Date,

})
mongoose.model('Friend', FriendSchema)
var Friend = mongoose.model('Friend')