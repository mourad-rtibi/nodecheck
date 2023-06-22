const nodemailer = require('nodemailer');

const transporter = nodemailer.createTransport({
  service: 'gmail',
  auth: {
    user: 'mouradrtibi9@gmail.com',
    pass: 'mourad2023'
  }
});

const mailOptions = {
  from: 'mouradrtibi9@gmail.com',
  to: 'recipient-email@example.com',
  subject: 'Test Email',
  text: 'This is a test email sent from Node.js!'
};

transporter.sendMail(mailOptions, (err, info) => {
  if (err) {
    console.log(err);
  } else {
    console.log('Email sent: ' + info.response);
  }
});
