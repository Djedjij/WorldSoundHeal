import React from "react";
import styles from "./Motivation.module.scss";
import OrangeButton from "../../UI/OrangeButton/OrangeButton";
const Motivation = () => {
  return (
    <div className={styles.bigWrapper}>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>Мотивирующая фраза</h3>
        <p className={styles.text}>
          Добавьте пару строк текста и расскажите что получит пользователь,
          кликнув на кнопку.
        </p>
        <div className={styles.orangeButton}>
          <OrangeButton text="Призыв к действию" />
        </div>
      </div>
    </div>
  );
};

export default Motivation;
