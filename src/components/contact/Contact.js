/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Contact.css';

export default function Contact() {
  return (
    <main className={styles.Contact}>
      <aside>
        <h3>Mail</h3>
        <p>Wilsonville Baha'i Community</p>
        <p>PO Box 2641</p>
        <p>Wilsonville, OR 97070</p>
      </aside>

      <section>
        <form action="mailto:shabavid@gmail.com" method="post" encType="text/plain">
          <p>If you wish to connect with your local Baha'i community, please use the form below to send us a message.</p>
          <label>
            Name:<span>*</span>
            <input type="text" required/>
          </label>
          <label>
            Email:<span>*</span>
            <input type="text" required/>
          </label>
          <label>
            Message:<span>*</span>
            <textarea required/>
          </label>
          <label>
            Phone:
            <input type="text"/>
          </label>
          <label>
            <button type="submit">Submit</button>
          </label>
        </form>
      </section>
    </main>
  );
}
