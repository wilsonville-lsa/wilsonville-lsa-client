/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import PropTypes from 'prop-types';
import styles from './ContactForm.css';

function ContactForm({ message, handleChange, handleSubmit, error, confirmation }) {
  return (
    <main className={styles.Contact}>
      <aside>
        <h3>Mail</h3>
        <p>Wilsonville Baha'i Community</p>
        <p>PO Box 2641</p>
        <p>Wilsonville, OR 97070</p>
      </aside>

      <section>

        {error && <p className={styles.red}>{error}</p>}

        {confirmation && <p className={styles.green}>Your message has been sent! We will respond shortly. A confirmation email has been sent to the provided email. If you have not received a confirmation, please re-send your message. Thank you!</p>}
        
        <form onSubmit={handleSubmit.bind(null, message)}>
          <p>If you wish to connect with your local Baha'i community, please use the form below to send us a message.</p>
          <label>
            Name:<span className={styles.red}>*</span>
            <input name="name" type="text" onChange={handleChange} required/>
          </label>
          <label>
            Email:<span className={styles.red}>*</span>
            <input name="email" type="text" onChange={handleChange} required/>
          </label>
          <label>
            Message:<span className={styles.red}>*</span>
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
  handleSubmit: PropTypes.func.isRequired,
  error: PropTypes.string,
  confirmation: PropTypes.bool.isRequired
};

export default ContactForm;
