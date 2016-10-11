var express = require('express');
var router = express.Router();
var nodemailer = require("nodemailer");

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('contact', { title: 'Contact' });
});

router.post("/send", function(req,res){
    var transporter = nodemailer.createTransport({
        service: "Gmail",
        auth: {
            user: "vamisola@gmail.com",
            pass: "?k7M;Awa4Yi6WTPE"
        }
    });
    
    var mailOptions = {
        from: "Vina C<vamisola@gmail.com>",
        to: "bar@blurdybloop.com, bax@blurdy.com",
        subject: "Website submission",
        text: "You have a submission witht the following details... Name: "+req.body.name + "Email"+req.body.email+ "Message"+ req.body.message,
        html: "<p>You have a submission witht the following details... </p><ul><li>Name: "+req.body.name + "</li><li>Email"+req.body.email+ "</li><li>Message"+ req.body.message + "</li</ul>"
    };
    
    transporter.sendMail(mailOptions, function(error, info){
    if(error){
        return console.log(error);
        res.redirect('/');
    }
    console.log('Message sent: ' + info.response);
    res.redirect('/');
});
    
});

module.exports = router;