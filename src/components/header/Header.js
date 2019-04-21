/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';
import './Header.css';

export default function Header() {
  return (
    <header>
      <h1>Wilsonville Baha'i Community</h1>
      <h2>BAHA'I FAITH</h2>

      <nav>
        <Link to="/">HOME</Link>
        <Link to="/what-bahais-believe">WHAT BAHA'IS BELIEVE</Link>
        <Link to="/gatherings">JOIN OUR GATHERINGS</Link>
        <Link to="/contact">CONTACT</Link>
      </nav>
    </header>
  );
}
