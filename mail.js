const nodemailer = require('nodemailer');
const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
        user: 'pedroyanky@gmail.com',
        pass: 'modestmafia1'
    }
});

const mailOptions = {
    from: 'pedroyanky@gmail.com',
    to: 'vwegbacity@gmail.com',
    subject: 'Sending email using nodejs',
    text: 'This was fairly easy'
}