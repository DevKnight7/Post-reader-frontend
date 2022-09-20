import React from "react";
import styles from "./Fallback.module.scss";
import { MoonLoader } from "react-spinners";

const Fallback = () => {
  return (
    <div className={styles.wrapper}>
      <MoonLoader color="#22a6b3" />
      <div className={styles.spacer}></div>
    </div>
  );
};

export default Fallback;
