import React, { LegacyRef } from "react";
import styles from "./Contats.module.scss";
const Contacts = React.forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={styles.wrapper}>
      <h5 className={styles.header}>НАШИ КОНТАКТЫ</h5>
      <p className={styles.phone}>+375 33 123 45 67</p>
      <a className={styles.mail} href="mailto:mail@worldsoundheal.by">
        mail@worldsoundheal.by
      </a>
      <p className={styles.smallHeader}>Мы в социальных сетях</p>
      <div className={styles.socials}>
        <div className={styles.social}>
          <img src="/images/icons/youtube.svg" alt="" />
        </div>
        <div className={styles.social}>
          <img src="/images/icons/instagram.svg" alt="" />
        </div>
        <div className={styles.social}>
          <img src="/images/icons/telegram.svg" alt="" />
        </div>
      </div>
    </div>
  );
});

export default Contacts;
