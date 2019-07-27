require('dotenv').config();
import { sendEmail } from './api';

jest.mock('./request.js');

describe('api', () => {
  it('sends email', done => {
    const message = {
      name: 'Interested Person',
      email: 'interested@email.com',
      text: 'Give me some info!'
    };

    return sendEmail(message)
      .then(request => {
        expect(request).toEqual({
          path: '/contact',
          body: {
            from: 'Interested Person <interested@email.com>',
            to: expect.any(String),
            subject: 'Inquiry',
            html: `
    <p><strong>Name: Interested Person</strong></p>
    <p><strong>Email: interested@email.com</strong></p>
    <p><strong>Message:</strong><br />Give me some info!</p>`
          }
        });
        
        done();
      });
  });
});
