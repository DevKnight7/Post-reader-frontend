import React from "react";
import styles from "./Nav.module.scss";
import { TiArrowBack } from "react-icons/ti";
import { Link } from "react-router-dom";

const Nav = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.brand}>
        <Link to="/">Post Reader App</Link>
      </div>
      <div className={styles.backIcon}>
        <Link to="/">
          <TiArrowBack className={styles.icon} />
        </Link>
      </div>
    </div>
  );
};

export default Nav;
