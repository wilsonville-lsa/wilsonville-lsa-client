/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './Contact.css';

function ContactForm({ message, handleChange, handleSubmit }) {
  return (
    <main className={styles.Contact}>
      <aside>
        <h3>Mail</h3>
        <p>Wilsonville Baha'i Community</p>
        <p>PO Box 2641</p>
        <p>Wilsonville, OR 97070</p>
      </aside>

      <section>
        <form onSubmit={handleSubmit.bind(null, message)}>
          <p>If you wish to connect with your local Baha'i community, please use the form below to send us a message.</p>
          <label>
            Name:<span>*</span>
            <input name="name" type="text" onChange={handleChange} required/>
          </label>
          <label>
            Email:<span>*</span>
            <input name="email" type="text" onChange={handleChange} required/>
          </label>
          <label>
            Message:<span>*</span>
            <textarea name="text" onChange={handleChange} required/>
          </label>
          <label>
            <button type="submit">Submit</button>
          </label>
        </form>
      </section>
    </main>
  );
}

ContactForm.propTypes = {
  message: PropTypes.object.isRequired,
  handleChange: PropTypes.func.isRequired,
  handleSubmit: PropTypes.func.isRequired
};

export default ContactForm;
