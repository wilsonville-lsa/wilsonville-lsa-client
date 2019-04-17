/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import { Link } from 'react-router-dom';

export default function Header() {
  return (
    <>
      <h1>Wilsonville Baha'i Community</h1>
      <h2>BAHA'I FAITH</h2>

      <nav>
        <Link to="/">Home</Link>
      </nav>
    </>
  );
}
