import React from "react";
import styles from "./PrimaryButton.module.scss";

const PrimaryButton = ({ text, onClick }) => {
  return (
    <button onClick={onClick} type="button" className={styles.wrapper}>
      {text}
    </button>
  );
};

export default PrimaryButton;
