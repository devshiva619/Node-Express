var mongoose = require('mongoose'),
    passportLocalMongoose = require('passport-local-mongoose');


var UserSchema = new mongoose.Schema({
    username: String,
    password: String
});

//The below line will add bunch of methods that come with passportLocalMongoose and add it to out UserSchema
//This takes care of all from hashing, salting, storing in db.
UserSchema.plugin(passportLocalMongoose);

var User = mongoose.model("User", UserSchema);
module.exports = User;