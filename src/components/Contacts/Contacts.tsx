import React, { LegacyRef } from "react";
import styles from "./Contats.module.scss";
import { imgUrl } from "../../utils/consts";
const Contacts = React.forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={styles.wrapper}>
      <h5 className={styles.header}>НАШИ КОНТАКТЫ</h5>
      <p className={styles.phone}>+375 25 934-54-75</p>
      <a className={styles.mail} href="mailto:mail@worldsoundheal.by">
        mail@worldsoundheal.by
      </a>
      <p className={styles.smallHeader}>Мы в социальных сетях</p>
      <div className={styles.socials}>
        <div className={styles.social}>
          <a href="https://www.youtube.com/@WorldSoundHeal_BY">
            <img
              src={
                imgUrl
                  ? imgUrl + "/images/icons/youtube.svg"
                  : "/images/icons/youtube.svg"
              }
              alt=""
            />
          </a>
        </div>
        <div className={styles.social}>
          <a href="https://www.instagram.com/worldsoundheal_by/">
            <img
              src={
                imgUrl
                  ? imgUrl + "/images/icons/instagram.svg"
                  : "/images/icons/instagram.svg"
              }
              alt=""
            />
          </a>
        </div>
        <div className={styles.social}>
          <a href="https://t.me/worldsoundheal_by">
            <img
              src={
                imgUrl
                  ? imgUrl + "/images/icons/telegram.svg"
                  : "/images/icons/telegram.svg"
              }
              alt=""
            />
          </a>
        </div>
      </div>
    </div>
  );
});

export default Contacts;
