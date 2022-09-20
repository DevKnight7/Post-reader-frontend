import React from "react";
import Nav from "../Nav";
import styles from "./Layout.module.scss";

const Layout = ({ children }) => {
  return (
    <div className={styles.wrapper}>
      <Nav />
      <div className={styles.content}>{children}</div>
    </div>
  );
};

export default Layout;
