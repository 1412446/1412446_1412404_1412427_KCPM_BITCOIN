var mongoose = require('mongoose');
var bcrypt = require('bcrypt');
var Schema = mongoose.Schema;

var SALT_WORK_FACTOR  = 10;

var UserSchema = new  Schema({
    email: { type: String, required: true, index: {unique: true}},
    password: { type: String, required: true },
    isActived: {type: Boolean, default: false},
    isAdmin: {type: Boolean, default: false},
    actualBalance: {type: Number, default: 0},
    availabelBalance: {type: Number, default: 0},
    address: {type: String},
    privateKey: {type: String},
    publicKey: {type: String}
});

UserSchema.pre('save', function(next) {
    var user = this;

    //just hash when password is modified
    if(!user.isModified('password')) return next();

    //generate salt
    bcrypt.genSalt(SALT_WORK_FACTOR, function(err, salt) {
        if(err) return next(err);

        //hash password
        bcrypt.hash(user.password, salt, function(err, hash) {
            if(err) return next(err);

            //replace current password with hashed password
            user.password = hash;
            next();
        });
    });
});

UserSchema.methods.comparePassword = function(candidatePassword, cb) {
    bcrypt.compare(candidatePassword, this.password, function(err, isMatch) {
        if(err) return next(err);

        cb(null, isMatch);
    });
};

module.exports = mongoose.model('User', UserSchema);