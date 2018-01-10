"use strict"
var Transaction = require('../models/Transaction');
var Q = require('q');
var jwt = require('jsonwebtoken');
var dbConfig = require('../config/database');
var axios = require('axios');

var nodemailer = require('nodemailer');
var User = require('../models/User');

var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'phamkhacquyen1996@gmail.com',
        pass: 'dolongdao',
    }
});

var Factory = {};

Factory.createTransaction = function(req, res) {
    var newTransaction = {};
    newTransaction.sAddress = req.body.sAddress;
    newTransaction.dAddress = req.body.dAddress;
    newTransaction.kcoin = req.body.kcoin;

    return Q.when()
    .then(function() {
        if(newTransaction.sAddress === '' || newTransaction.sAddress === undefined) {
            throw 'Source Address cannot is blank !';
        } 

        if(newTransaction.dAddress === '' || newTransaction.dAddress === undefined) {
            throw 'Destination Address cannot is blank !';
        }

        if(!newTransaction.kcoin) {
            throw 'Money must be greater than 0 !'
        }
    })
    .then(function(blockInfo) {
        var newTransactionModel = new Transaction(newTransaction);
        return newTransactionModel.save();
    })
    .then(function(response) {
        var transactionDto = {};

        transactionDto.transactionID = response._id;
        transactionDto.sourceAddress = response.sAddress;
        transactionDto.destAddress = response.dAddress;
        transactionDto.kcoin = response.kcoin;
        transactionDto.status = response.status;
        
        res.json({success: true, transactionDto: transactionDto});
    })
    .catch(function(err) {
        res.json({success: false, msg: err});
    });
};

Factory.sendMailVerifyTransaction = function(req, res) {
    var host = req.get('host');
    var link = "http://" + host + "/transaction/verify?transactionID=" + req.body.transactionID;
    User.findOne({address: req.body.address}, function(err, user) {
        if(err) throw err;
        else {
            var mailOptions = {
                to : user.email,
                subject : "Please confirm your Transaction",
                html : "Hello,<br> Please Click on the link to verify your Transaction.<br><a href="+link+">Click here to verify</a>" 
            }
    
            smtpTransport.sendMail(mailOptions, function(err, response) {
                if(err) res.json({success: false, msg: 'Send mail failed !'});
                else  {
                    Transaction.findOne({_id: req.body.transactionID}, function(err, transaction) {
                        if (err) throw err;
                        if(transaction) {
                            transaction.status = 'Processing';
                            transaction.save();
                        }
                    });
                    res.json({success: true, msg: 'Send mail successfully !'});
                }
            });
        }
    })
};

Factory.verifyTransaction = function(req, res) {
    Transaction.findOne({_id: req.query.transactionID}, function(err, transaction) {
        if (err) res.json({success: false, msg: 'Finish Transaction Failed !'});
        else {
            Q.when()
            .then(function(){
                User.findOne({address: transaction.sAddress}, function(err, user) {
                    if(err) throw err;
                    if(user) {
                        user.actualBalance -= transaction.kcoin;
                        user.availabelBalance -= transaction.kcoin;
                        user.save();
                    }
                });
            })
            .then(function() {
                User.findOne({address: transaction.dAddress}, function(err, user) {
                    if(err) throw err;
                    if(user) {
                        user.actualBalance += transaction.kcoin;
                        user.availabelBalance += transaction.kcoin;
                        user.save();
                    }
                });
            })
            .then(function() {
                transaction.status = 'Finish';
                transaction.save();
                res.send('Transaction is finish');
                res.json({success:  true, msg:'Complete Transaction'});
            })
            .catch(function(err) {
                console.log('Error', err);
            });
        }
    });
};

Factory.getTransactionList = function(req, res) {

};

module.exports = Factory;
