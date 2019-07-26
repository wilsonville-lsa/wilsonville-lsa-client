require('dotenv').config();
const nodemailer = require('nodemailer');

export const sendEmail = mailOptions => {
  let mailConfig = {};

  return nodemailer.createTestAccount()
    .then(testAccount => {
      if(process.env.NODEMAILER_ENV === 'dev') {
        const { user, pass } = testAccount;
  
        mailConfig = {
          host: 'smtp.ethereal.email',
          port: 587,
          secure: false,
          auth: {
            user,
            pass
          }
        };
      } else {
        mailConfig = {
          service: 'gmail',
          auth: {
            user: process.env.EMAIL_USER,
            pass: process.env.EMAIL_PASS
          }
        };
      }

      const transporter = nodemailer.createTransport(mailConfig);
    
      return transporter.sendMail(mailOptions)
        .then(info => ({ info }))
        .catch(error => ({ error }));
    })
    .catch(error => ({ error }));
};
