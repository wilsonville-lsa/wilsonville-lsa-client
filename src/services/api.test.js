import { sendEmail } from './api';

describe('api', () => {
  it('sends email', done => {
    return sendEmail({
      from: 'Test Email',
      to: 'ethereal@email.com',
      subject: 'Test',
      html: '<h1>Test email using ethereal!!</h1>'
    })
      .then(({ info }) => {
        expect(info).toBeDefined();
        done();
      });
  });
});
