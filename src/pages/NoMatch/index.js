import React from "react";
import styles from "./NoMatch.module.scss";
import { TbError404Off } from "react-icons/tb";
import { IoHome } from "react-icons/io5";
import { Link } from "react-router-dom";

const NoMatch = () => {
  return (
    <div className={styles.wrapper}>
      <TbError404Off color={"#ffffff"} size={200} />
      <div className={styles.text}>
        Page Not Found. Go to{" "}
        <Link to={"/"}>
          <span className={styles.link}>
            <IoHome className={styles.icon} />
            Home
          </span>
        </Link>
      </div>
      <div className={styles.spacer}></div>
    </div>
  );
};

export default NoMatch;
