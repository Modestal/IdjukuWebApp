const nodemailer = require('nodemailer');
const mailGun = require('nodemailer-mailgun-transport');


const auth = {
    auth: {
        api_key: '',
        domain: ''
    }
}
const transporter = nodemailer.createTransport(mailGun(auth))
const mailOptions = {
    from : 'vwegbacity@gmail.com',
    to: 'pedroyanky@gmail.com',
    subject: 'Just testing things',
    text: 'I would very much like to get in touch with you.'
}

transporter.sendMail(mailOptions, function(err, data) {
    if(err) {
        console.log('Error occur');
    }else {
        console.log('Message sent');
    }
})