import React from "react";
import styles from "./Motivation.module.scss";
import OrangeButton from "../../UI/OrangeButton/OrangeButton";
import { imgUrl } from "../../utils/consts";

interface IMotivationProps {
  setActiveModal: (activeModal: boolean) => void;
}

const Motivation: React.FC<IMotivationProps> = ({ setActiveModal }) => {
  return (
    <div
      className={styles.bigWrapper}
      style={{
        backgroundImage: `url( 
       ${imgUrl ? imgUrl + "/images/main3.png" : "/images/main3.png"}
      )`,
      }}
    >
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
      </div>
    </div>
  );
};

export default Motivation;
