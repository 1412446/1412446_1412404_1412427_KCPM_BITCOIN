"use strict"
var User = require('../models/User');
var Q = require('q');
var jwt = require('jsonwebtoken');
var dbConfig = require('../config/database');
var axios = require('axios');
var kcoinAPI = require('../config/kcoinAPI');
var MailController = require('../controllers/MailController');
var Factory = {};

Factory.validateSignUp = function(user) {
    return Q.when()
    .then(function() {
        return User.find({email: user.email});
    })
    .then(function(user) {
        if(user.length > 0) {
            throw 'User is exits';
        }
    })
    .catch(function(err) {
        throw err;
    });
}

Factory.createUser = function(user) {
    var newUserModel = new User(user);

    return Q.when()
    .then(function() {
        return newUserModel.save();
    })
    .then(function(res) {
        return res;
    })
    .catch(function(err) {
        console.log('Err', err);
    });
};

Factory.signUp = function(req, res, next) {
    var newUser = {};
    newUser.email = req.body.email;
    newUser.password = req.body.password;

    return Q.when()
    .then(function() {
        if(newUser.email === '' || newUser.email === undefined) {
            throw 'Email cannot is blank !';
        } 

        if(newUser.password === '' || newUser.password === undefined) {
            throw 'Password cannot is blank !';
        }
    })
    .then(function() {
        return Factory.validateSignUp(newUser);
    })
    .then(function(sendMailResponse) {
        return axios.get(kcoinAPI.GENERATE_BLOCK_ADDRESS);
    })
    .then(function(blockInfo) {
        console.log(blockInfo);
        newUser.address = blockInfo.data.address;
        newUser.privateKey = blockInfo.data.privateKey;
        newUser.publicKey = blockInfo.data.publicKey;
        var newUserModel = new User(newUser);
        return newUserModel.save();
    })
    .then(function(response) {
        res.json({success: true, userDto: response});
    })
    .catch(function(err) {
        res.json({success: false, msg: err});
    });
}

Factory.signIn = function(req, res, next) {
    User.findOne({email: req.body.email}, function(err, user) {
        if(err) throw err;

        if(!user) {
            res.send({success: false, msg: 'Authentication failed. User not found !'});
        } else {
            user.comparePassword(req.body.password, function(err, isMatch) {
                if(isMatch && !err) {
                    var token = jwt.sign(user.email, dbConfig.secret);
                    res.json({success: true, token: token});
                } else {
                    res.send({success: false, msg: 'Authentication failed. Wrong password !'});
                }
            });
        }
    })
}

Factory.getUser = function(req, res, next) {
    //Get token from header
    var token = req.headers.authorization;

    if(token) {
        jwt.verify(token, dbConfig.secret, function(err, decoded) {
            User.findOne({email: decoded}, function(err, user) {
                if(err) throw err;
    
                if(!user) {
                    return res.status(403).json({success: false, msg: 'Authentication failed. User not found !'});
                } else {
                    res.json({success: true, msg: 'Hello ! ' + user.email});
                }
            });
        });
    } else {
        return res.status(403).json({success: false, msg: 'No token provided !'});
    }
}

module.exports = Factory;
