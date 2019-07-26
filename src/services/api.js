const nodemailer = require('nodemailer');

export const sendEmail = mailOptions => {
  return nodemailer.createTestAccount()
    .then(testAccount => {

      const { user, pass } = testAccount;

      const transporter = nodemailer.createTransport({
        host: 'smtp.ethereal.email',
        port: 587,
        secure: false,
        auth: {
          user,
          pass
        }
      });

      return transporter.sendMail(mailOptions)
        .then(info => ({
          previewUrl: nodemailer.getTestMessageUrl(info)
        }))
        .catch(error => ({ error }));
    })
    .catch(error => ({ error }));
};
