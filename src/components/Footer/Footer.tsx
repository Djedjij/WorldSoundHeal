import React from "react";
import styles from "./Footer.module.scss";
const Footer = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.name}>WORLD SOUND HEAL</h3>
      <p className={styles.text}>
        Информация размещенная на сайте не является публичной офертой.
      </p>
    </div>
  );
};

export default Footer;
