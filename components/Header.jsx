import React from 'react';
import styles from './Header.module.scss';

function Header() {
  return (
    <div className={styles.header} key="main-header">
      <a href="/">Home</a>
      <a href="/contact">Contact</a>
      <a href="#">What did you expect ?</a>
    </div>
  );
}

export default Header;
