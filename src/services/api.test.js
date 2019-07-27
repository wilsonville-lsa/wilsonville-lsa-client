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
            to: process.env.EMAIL_USER,
            subject: 'Inquiry',
            text: 'Give me some info!'
          }
        });
        
        done();
      });
  });
});
