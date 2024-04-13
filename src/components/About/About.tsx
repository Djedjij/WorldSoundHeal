import React from "react";
import styles from "./About.module.scss";
const About = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.aboutText}>
        <h3 className={styles.aboutHeader}>О нашей компании</h3>
        <p>
          Коротко представьтесь и расскажите о компании или сервисе в 3-4
          строках. С какими клиентами вы работаете, что вас вдохновляет. Чем
          гордится ваша команда, какие у нее ценности и мотивация.
        </p>
      </div>
      <div className={styles.aboutImages}>
        <img src="/images/about-images/about1.jpg" alt="" />
        <img src="/images/about-images/about2.jpg" alt="" />
        <img src="/images/about-images/about3.jpg" alt="" />
        <img src="/images/about-images/about4.jpg" alt="" />
      </div>
    </div>
  );
};

export default About;
