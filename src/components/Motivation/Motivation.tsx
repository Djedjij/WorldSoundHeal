import React, { useState } from "react";
import styles from "./Motivation.module.scss";
import OrangeButton from "../../UI/OrangeButton/OrangeButton";
import Modal from "../../UI/Modal/Modal";
const Motivation = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  return (
    <div className={styles.bigWrapper}>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>
          ПОЗВОЛЬТЕ СИЛЕ ЗВУКА РАСКРЫТЬ ВАШ ВНУТРЕННИЙ МИР И ПРИНЕСТИ ГАРМОНИЮ В
          КАЖДЫЙ ДЕНЬ
        </h3>
        <p className={styles.text}>
          Окунитесь в мир глубокого исцеления саундхилинга с World Sound Heal.
          Преобразуйте стресс в спокойствие, усталость в энергию и улучшите
          качество вашей жизни уже сегодня
        </p>
        <div className={styles.orangeButton}>
          <OrangeButton
            onClick={() => setActiveModal(true)}
            text="Запишитесь на сеанс"
          />
        </div>
        <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
      </div>
    </div>
  );
};

export default Motivation;
