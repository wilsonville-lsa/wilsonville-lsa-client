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
          body: message
        });
        
        done();
      });
  });
});
