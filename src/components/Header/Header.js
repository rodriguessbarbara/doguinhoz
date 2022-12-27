import React from "react";
import { Link } from "react-router-dom";

import styles from "./Header.module.css";
import { ReactComponent as DogzSvg } from "../../Assets/dogs.svg";

const Header = () => {
  return (
    <header className={styles.header}>
      <nav className={`${styles.nav} container`}>
        <Link to="/" className={styles.logo} aria-label="Dogz - Home">
          <DogzSvg/>
        </Link>
        <Link to="/login" className={styles.login}>Login / Criar</Link>
      </nav>
    </header>
  );
};

export default Header;
