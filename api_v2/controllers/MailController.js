var nodemailer = require('nodemailer');

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
    rand = Math.floor((Math.random() * 100) + 54);
    host = req.get('host');
    link = "http://" + req.get('host') + "/users/verify?id=" + rand;
    mailOptions = {
        to : req.body.email,
        subject : "Please confirm your Email account",
        html : "Hello,<br> Please Click on the link to verify your email.<br><a href="+link+">Click here to verify</a>" 
    }

    console.log('mail', mailOptions);

    smtpTransport.sendMail(mailOptions, function(err, response) {
        if(err) res.json({success: false, msg: 'Send mail failed !'});
        else res.json({success: true, msg:'Send mail successfully !'});
    });
};

Factory.verifyMail = function(req, res) {
    res.send({rand: rand});
};

module.exports = Factory;