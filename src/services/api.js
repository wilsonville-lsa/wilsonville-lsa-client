import { post } from './request';

export const sendEmail = message => {
  const mailOptions = {
    from: `${message.name} <${message.email}>`,
    to: 'wilsonvillebahai@gmail.com',
    subject: 'Inquiry',
    text: message.text
  };

  return post('/contact', mailOptions);
};
