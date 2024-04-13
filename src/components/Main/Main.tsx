import React from "react";
import styles from "./Main.module.scss";
import OrangeButton from "../../UI/OrangeButton/OrangeButton";
const Main = () => {
  return (
    <div className={styles.wrapper}>
      <div className={styles.main}>
        <h1 className={styles.header}>Заголовок cайта</h1>
        <h4 className={styles.smallHeader}>
          Добавьте интересные подробности о вашей компании. Двойной клик по
          тексту или вкладка «контент» для редактирования текста.
        </h4>
        <OrangeButton text="ПРИЗЫВ К ДЕЙСТВИЮ" />
        <img
          className={styles.arrowDown}
          src="/images/icons/arrowDown.svg"
          alt=""
        ></img>
      </div>
    </div>
  );
};

export default Main;
