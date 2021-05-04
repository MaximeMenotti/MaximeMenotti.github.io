import React from 'react';
import styles from './Header.module.scss'

function Header(props) {
  return (
    <div className={styles.header} key='main-header'>
      <a href="#">Fake link</a>
      <a href="#">Another fake link</a>
      <a href="#">What did you expect ?</a>
    </div>
  )
}

export default Header;
