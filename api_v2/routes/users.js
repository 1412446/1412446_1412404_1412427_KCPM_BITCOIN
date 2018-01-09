var express = require('express');
var router = express.Router();
var Q = require('q');

//Controller
var UserController = require('../controllers/UserController');
var MailController = require('../controllers/MailController');

//Authentication
var passport = require('passport');
var jwt = require('jsonwebtoken');
var User = require('../models/User');

//init passport-jwt for router
require('../config/passport')(passport);

/* GET users listing. */
router.get('/', function(req, res, next) {
  res.send('respond with a resource');
});

router.post('/signup', UserController.signUp);
router.post('/login', UserController.signIn);
router.get('/info', passport.authenticate('jwt', {session: false}), UserController.getUser);
router.post('/sendmail', MailController.sendMail);
router.get('/verify', MailController.verifyMail);

module.exports = router;
