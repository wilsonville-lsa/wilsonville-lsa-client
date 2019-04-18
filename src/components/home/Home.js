/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Home.css';

export default function Home() {
  return (
    <>
      <p className={styles.welcome}>Welcome to the website of the Wilsonville Baha'i Community.  We are a community devoted to the cause of the oneness of humanity and to promoting love and concord among all His children.  Our belief is firmly rooted in the concept of unity in diversity.</p>

      <section>
        <img alt="200th birth design" src="../../../public/assets/200th-birth.png" />

        <div className={styles.national}>
          <p className={styles.quote}>So powerful is the light of unity that it can illuminate the whole earth. <span>Baha'u'llah</span></p>
          <img alt="chicago house of worship" src="../../../public/assets/chicago-national-center.jpeg" />
        </div>

        <div className={styles.world}>
          <img alt="world center" src="../../../public/assets/world-center.jpeg" />
          <p className={styles.quote}>There is one God; mankind is one; the foundations of religion are one. Let us worship Him, and give praise for all His great Prophets and Messengers who have manifested His brightness and glory. <span>Abdu'l-Baha</span></p>
        </div>

        <div className={styles.hands}>
          <img alt="globe with hands" src="../../../public/assets/globe-hands.jpeg" />
          <p className={styles.quote}>It is not for him to pride himself who loveth his own country, but rather for him who loveth the whole world. The earth is but one country, and mankind its citizens. <span>Bahá’u’lláh</span></p>
        </div>
      </section>
    </>
  );
}
