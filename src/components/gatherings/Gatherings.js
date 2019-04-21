/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Gatherings.css';

export default function Gatherings() {
  return (
    <main className={styles.Gatherings}>
      <section>
        <p>Checkout some neighboring local Baha'i community gatherings!</p>
      </section>

      <aside>
        <h2>Other Local Communities</h2>
        <ul>
          <li><a href="http://lakeoswegobahai.org/" target="_blank" rel="noopener noreferrer">Events at Lake Oswego Baha'i Center</a></li>
          <li><a href="http://beavertonbahai.org/center/#center-calendar" target="_blank" rel="noopener noreferrer">Events at Beaverton Baha'i Center</a></li>
          <li><a href="http://portlandbahai.org/local-activities/portland/" target="_blank" rel="noopener noreferrer">Events at Portland Baha'i Center</a></li>
        </ul>
      </aside>
    </main>
  );
}
