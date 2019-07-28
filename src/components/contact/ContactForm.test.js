import React from 'react';
import renderer from 'react-test-renderer';
import ContactForm from './ContactForm';

describe('Contact Form', () => {
  it('matches snapshot for ContactForm', () => {
    const props = {
      message: {},
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      error: '',
      confirmation: false
    };

    const tree = renderer.create(
      <ContactForm {...props} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot for ContactForm with confirmation', () => {
    const props = {
      message: {
        name: 'Inquirer',
        email: 'inquirer@email.com',
        text: 'Inquiry inquiring about an inquiry'
      },
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      error: '',
      confirmation: true
    };

    const tree = renderer.create(
      <ContactForm {...props} />
    );

    expect(tree).toMatchSnapshot();
  });

  it('matches snapshot for ContactForm with error', () => {
    const props = {
      message: {
        name: 'Inquirer',
        email: 'inquirer@email.com',
        text: 'Inquiry inquiring about an inquiry'
      },
      handleChange: jest.fn(),
      handleSubmit: jest.fn(),
      error: 'Invalid email address',
      confirmation: false
    };

    const tree = renderer.create(
      <ContactForm {...props} />
    );

    expect(tree).toMatchSnapshot();
  });
});
