import { post } from './request';

export const sendEmail = message => {
  const mailOptions = {
    from: `${message.name} <${message.email}>`,
    to: process.env.EMAIL_USER,
    subject: 'Inquiry',
    html: `
    <p><strong>Name: ${message.name}</strong></p>
    <p><strong>Email: ${message.email}</strong></p>
    <p><strong>Message:</strong><br />${message.text}</p>`
  };

  return post('/contact', mailOptions);
};
