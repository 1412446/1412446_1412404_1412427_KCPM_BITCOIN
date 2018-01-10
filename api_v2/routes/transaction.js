var express = require('express');
var router = express.Router();
var TransactionController = require('../controllers/TransactionController');
var nodemailer = require('nodemailer');
var User = require('../models/User');


//New transaction with status new
router.post('/create', TransactionController.createTransaction);
router.post('/sendMail', TransactionController.sendMailVerifyTransaction);
router.get('/verify', TransactionController.verifyTransaction);

module.exports = router;
