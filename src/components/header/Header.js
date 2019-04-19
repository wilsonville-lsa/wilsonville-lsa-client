/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import styles from './Header.css';

export default function Header() {
  return (
    <>
      <h1>Wilsonville Baha'i Community</h1>
      <h2>BAHA'I FAITH</h2>

      <nav>
        <Link activeclassname={styles.active} to="/">HOME</Link>
        <Link activeclassname={styles.active} to="/what-bahais-believe">WHAT BAHA'IS BELIEVE</Link>
      </nav>
    </>
  );
}
