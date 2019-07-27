import { post } from './request';

export const sendEmail = message => {
  console.log('email env', process.env.EMAIL_USER);
  const mailOptions = {
    from: `${message.name} <${message.email}>`,
    to: process.env.EMAIL_USER,
    subject: 'Inquiry',
    text: message.text
  };

  return post('/contact', mailOptions);
};
