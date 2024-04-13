import React from "react";
import styles from "./Advantages.module.scss";
import OrangeCheck from "../../UI/OrangeCheck.tsx/OrangeCheck";
const Advantages = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>Преимущества компании</h3>
      <p className={styles.text}>
        Помогите клиенту принять решение, рассказав о своих сильных сторонах и
        причинах работать именно с вами
      </p>
      <ul className={styles.advantagesUl}>
        <li>
          <OrangeCheck />
          <div className={styles.advantage}>
            <h4>Преимущество 1</h4>
            <p>
              Расскажите, что отличает ваши услуги от услуг в других компаниях
            </p>
          </div>
        </li>
        <li>
          <OrangeCheck />
          <div className={styles.advantage}>
            <h4>Преимущество 2</h4>
            <p>
              Расскажите, чему вы уделяете больше всего внимания в работе с
              клиентами
            </p>
          </div>
        </li>
        <li>
          <OrangeCheck />
          <div className={styles.advantage}>
            <h4>Преимущество 3</h4>
            <p>Расскажите, в чем преимущество работы именно с вашей командой</p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Advantages;
