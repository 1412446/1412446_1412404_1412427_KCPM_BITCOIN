var nodemailer = require('nodemailer');
var User = require('../models/User');

var smtpTransport = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'phamkhacquyen1996@gmail.com',
        pass: 'dolongdao',
    }
});

var rand, mailOptions, host, link;

var Factory = {};

Factory.sendMail = function(req, res) {
    host = req.get('host');
    link = "http://" + req.get('host') + "/users/verify?id=" + req.body.id;
    mailOptions = {
        to : req.body.email,
        subject : "Please confirm your Email account",
        html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
    }

    console.log('mail', mailOptions);

    smtpTransport.sendMail(mailOptions, function(err, response) {
        if(err) res.json({success: false, msg: 'Send mail failed !'});
        else  res.json({success: true, msg: 'Send mail successfully !'});
    });
};

Factory.verifyMail = function(req, res) {
    User.findOne({_id: req.query.id}, function(err, user) {
        if (err) res.json({success: false, msg: 'Actived Account Failed !'});
        else {
            user.isActived = true;
            user.save(function(err, updatedUser) {
                if(err) res.json({success: false, msg: 'Actived Account Failed !'});
                else res.send('Actived User is successfully !!!');
            });
        }
    });
};

module.exports = Factory;