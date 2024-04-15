import React, { LegacyRef } from "react";
import styles from "./About.module.scss";
import { imgUrl } from "../../utils/consts";

const About = React.forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={styles.wrapper}>
      <div className={styles.aboutText}>
        <h3 className={styles.aboutHeader}>О нашей компании</h3>
        <p>
          World Sound Heal — ваш проводник в мир исцеления через звук. Мы
          специализируемся на саундхилинге, помогая людям достичь гармонии и
          внутреннего спокойствия. Наша миссия — сделать саундхилинг доступным
          для всех, гармонизируя тело, душу и ум через музыку и звук. Наши
          ценности — это стремление к совершенству в каждом предоставленном
          сеансе.
        </p>
      </div>
      <div className={styles.aboutImages}>
        <img
          src={
            imgUrl
              ? imgUrl + "/images/about-images/about1.jpg"
              : "/images/about-images/about1.jpg"
          }
          alt=""
        />
        <img
          src={
            imgUrl
              ? imgUrl + "/images/about-images/about2.jpg"
              : "/images/about-images/about2.jpg"
          }
          alt=""
        />
        <img
          src={
            imgUrl
              ? imgUrl + "/images/about-images/about3.jpg"
              : "/images/about-images/about3.jpg"
          }
          alt=""
        />
        <img
          src={
            imgUrl
              ? imgUrl + "/images/about-images/about4.jpg"
              : "/images/about-images/about4.jpg"
          }
          alt=""
        />
      </div>
    </div>
  );
});

export default About;
