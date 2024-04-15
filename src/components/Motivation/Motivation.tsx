import React from "react";
import styles from "./Motivation.module.scss";
import OrangeButton from "../../UI/OrangeButton/OrangeButton";
const Motivation = () => {
  return (
    <div className={styles.bigWrapper}>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>
          Позвольте силе звука раскрыть ваш внутренний мир и принести гармонию в
          каждый день
        </h3>
        <p className={styles.text}>
          Окунитесь в мир глубокого исцеления саундхилинга с World Sound Heal.
          Преобразуйте стресс в спокойствие, усталость в энергию и улучшите
          качество вашей жизни уже сегодня
        </p>
        <div className={styles.orangeButton}>
          <OrangeButton text="Призыв к действию" />
        </div>
      </div>
    </div>
  );
};

export default Motivation;
