/* eslint-disable react/no-unescaped-entities */
import React from 'react';
import styles from './Home.css';

export default function Home() {
  return (
    <main className={styles.Home}>
      <p className={styles.welcome}>Welcome to the website of the Wilsonville Baha'i Community.  We are a community devoted to the cause of the oneness of humanity and to promoting love and concord among all His children.  Our belief is firmly rooted in the concept of unity in diversity.</p>

      <section>
        <img alt="200th birth design" src="https://lh3.googleusercontent.com/pGBXICxNPAYYo_3DSlpIuTq8dFod8XFdHL3y48myy4UexLfTAnA-bVYIAvzSYBVSGxOaz8H5hnDz9e6HP088S7yJ8XfuRFmx2yeFvf2fb8YNqMRxbZndqakgNLvOutguj8SfBQv0vCwAEHdwL39t4SVljGxiqXx0iQHpfTT4tJorIcfg9_qA1PlhGaLs-wkl9-oE_Rv3wLw93h-eO-Uw6EcaleuuSPYrdbIPC2Qe2aD25fmG4wJlw2e_r54gbKj9SieHc5_bm9YXPNYx-KDNwk0Gu86hsYWFoR-pDrgs9bivJ0nOM6VsP9Gpfp7xokLyT1EZaSKWDXLzx3Qh0lOqUo-g6gxf9h3N12YvZDixvaB1W6N07DKrv655_7IitzWlbqZ02DOL9DcO75NAKA3GiCL_wyqj3pr4vu-CC63ZSOCtDpIv5a2XGBjbADJ1CCR-r0easmtBXN9OktbeWmBwy7KZ3F9Dmo0E7be_EO2oe0OB4A9npnSW03_I1TUz8bwGiMY2YuBOaJxP7GYTgAQWjdzR807ZMaJqASPJIk-z9ExYByCKaN23lct0gT9vDBCQh_lN-bLA6vkqWMZXTdZtwq6mX5GsyUfulWm9kSFZGRGmSmmhyPI2FZPcSgYtv7iA3-MccOvVkuPihwMjAlDuucyFfQ5EQA=w937-h527-no" />

        <div className={styles.hands}>
          <img alt="globe with hands" src="https://lh3.googleusercontent.com/Iy_MDvFAoxXjZv9WZH4KKb8Mrv1_5Y0Da3Zzlwp2fno_qs_fT6hPNlPy5P_lLJH-Lc2qBdLSYX0W3t8T3537PIafiZTV3mFzJYtqV_mJrSu32NFjWuO-g0WxWKUkllS17yGEW-K3DtwKsSbhuTWwQKhnxTgitt_txjuytbZtSNPBXbotMNi4hd5C6eqkP2d0G4CKcBZU2THTIRdI9Bnh4kIhaS_P31VRV6WMi4sva8aGZN5XczJXQc6cZWL5GcSrngaPTmmFHIF5vUlLx1xhM0UaUbdpyp_Bjlt6KlPy6Spf68cun_q-WqrBR584q35wcPwnk-FDWmJUefX9AmTlOgeBlUCwOVPwiPKSQan725XcTJ5sYOPJL6eyEGgZKS61s12oM7EC6154wNzEmEASit8vLZnp8yH04eaDnd9QrElkdol5RCB-hVoTl2v9hNpL0wU6Xi-Xc2ivg6U_F-G6bZSbEHYsijSSXACtzgkjKniF-e8OVPu2ohzpajsFTf_RYAuWJdnzOPg3P9H1kFJ0oONWOjxLt_fKgEa2S9bnb1iDC9Hu0YG-tGKO9hy24kQvyig9C_VdQGJ9OK0exGCR4QfVVDoytPL3bkoYxjSRaBEpa1lndUdmHN0vhfI_VL8t5RPQSkIsTPn5dMn1Y2ap4ob5Ix38HQ=s493-no" />
          <p className={styles.quote}>It is not for him to pride himself who loveth his own country, but rather for him who loveth the whole world. The earth is but one country, and mankind its citizens. <span>Bahá’u’lláh</span></p>
        </div>

        <div className={styles.world}>
          <img alt="world center" src="https://lh3.googleusercontent.com/kkK_Vv4cDnVviLu3UZlV_fyun7DnqiUe6tQoEkVYSZEQmR0v3xjVU3Cliv8uPn3qHzxlCEaAd8obcsga4EXGumSLzsLjthUJif05qSZNg5B058AcHwBPR4Ue11p_vu6wFJBrstS2ZEMG9KIrR4ZsfCRUnXNuOa--NZnBUqpjOoMaRKcgsXNqJyqaMP9F9Wlu5hU5VSFeGwV8n2Ydxb78QT_2PM8OWpdVGmkxwpP-4Y54p_K4x8tadrvAp2FbM6AAQ2hxwurJlsLdEqy2TJyhJKkG80IGB6DMuYu8Xx-6WIig5ib7eDpyxuBlw23tBsjhO97Kylx71IP0S45KAriMdFU6oiDf6mJdw5opvViR1mXiI5tbyoRfk-hvQ5zjU9_KxoHnioa9qM_SSuouuqcNyRh_k3-2lit6Im9qxPD8Jnp8fYVEbtfDaKsmnaYT9xCIQKkkrYR3d8SjMttSOZoPBONVnsmyj6uBXu3ETan7tVIjrERVAA0cKBOOTL00A0umcbzjOH0xq8g0bxkGcZM3dqVZljUhTtEgPTVvNOSyCiVNWQimpoU6CX0hcaQA3L8ONhpZD4Ek5XJXQEikr3hzfMS9XHEPddTpWqh1pjcuMZR-UImphIBgqij0C6jbYnlXMS7d9Evc0D4kITmbyDYFaMC359yqBQ=w914-h609-no" />
          <p className={styles.quote}>There is one God; mankind is one; the foundations of religion are one. Let us worship Him, and give praise for all His great Prophets and Messengers who have manifested His brightness and glory. <span>Abdu'l-Baha</span></p>
        </div>

        <div className={styles.national}>
          <p className={styles.quote}>So powerful is the light of unity that it can illuminate the whole earth. <span>Baha'u'llah</span></p>
          <img alt="chicago house of worship" src="https://lh3.googleusercontent.com/TepNRMspvqfOuWSdC7Be5eCmQv1X96A_JDwDNFJMFcGV1L64SY2--kRrvpj2N6FkKaEkLm-uqs9ZU19XVA0tCQETcci6MHagg9cslui7IIbZ_OErzsxeEw5793u2n2xXP7wzA8S0gvNubLrMKGUABjBSm_AJATO6zOmuzauFTPboAMPRyU6rFuJzQi9kUrVPql8GalPTwsEwGrs9mOOAzat2W9tJQTVfvyqoNZnKY1-XIZaH5CrnwzcEoaQbO55LxaokK1Wg_XO8mBV8J_BUQNuI5n1XyKdOoXkkUp3BDkDkKoGoqvj5q0xrcrKjBNNlWSTPR19zVc-O_vyZtryyNcXgLOU13N0KeMSmfssuNjVJRrxzghtx5m_Vr0rYZfhhl9MErXVA6s29p3DtTFuwpQIMDIyD3o9Y3CjRpugZIHhIuUws1C6bEEjyzSk_1VHgnfgZ9NV2YL9bnHcarUkhzOBeakJqBc0lBj_D25FVv8kGdEOXU1vmXVatv3-BsJtSmWW8h3xARNaZ-KwvAGBijvWC3nk12iwZQ4zC44zqeLJeRgcUAAEXcsbhEC9Iyl6LitOptyKgOJtz6Fb4En60oBmW3EhKnuf_97QniXLHZTcoOjQ90lVI9rzLO5HDrjLCFPhlCKTCRqZo4Ya5PcdD-Of2j6emwg=w406-h609-no" />
        </div>
      </section>
    </main>
  );
}
