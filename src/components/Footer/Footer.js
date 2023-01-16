import React from 'react';
import styles from './Footer.module.css';
import {ReactComponent as DogzSvg} from '../../Assets/dogs-footer.svg';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <DogzSvg/>
      <p>Doguinhoz. Alguns direitos reservados.</p>
    </footer>
  )
}

export default Footer