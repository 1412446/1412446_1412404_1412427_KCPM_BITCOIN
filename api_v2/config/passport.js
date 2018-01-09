var JwtStrategy = require('passport-jwt').Strategy;
var ExtractJwt = require('passport-jwt').ExtractJwt;

//load up user model
var User = require('../models/User');
var dbConfig = require('./database');

module.exports = function(passport) {
    var opts = {};
    opts.jwtFromRequest = ExtractJwt.fromHeader('authorization');
    opts.secretOrKey = dbConfig.secret;
    console.log('opts', opts);
    passport.use(new JwtStrategy(opts, function(jwt_payload, done){
        User.findOne({name: jwt_payload}, function(err, user) {
            if(err) return done(err, false);
            
            if(user) {
                done(null, user);
            } else {
                done(null, false);
            }
        });
    }));
};