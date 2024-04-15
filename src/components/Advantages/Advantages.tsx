import React from "react";
import styles from "./Advantages.module.scss";
import OrangeCheck from "../../UI/OrangeCheck.tsx/OrangeCheck";
const Advantages = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.header}>Наши преимущества</h3>
      <ul className={styles.advantagesUl}>
        <li>
          <OrangeCheck />
          <div className={styles.advantage}>
            <h4>Индивидуальный подход к каждому клиенту</h4>
            <p>
              Мы внимательно прислушиваемся к вашим потребностям, чтобы
              предложить наилучшие решения для вашего исцеления и гармонии.
            </p>
          </div>
        </li>
        <li>
          <OrangeCheck />
          <div className={styles.advantage}>
            <h4>Высококвалифицированные специалисты</h4>
            <p>
              Наши саундхилеры — профессионалы с международной сертификацией,
              гарантирующей высокое качество каждого сеанса.
            </p>
          </div>
        </li>
        <li>
          <OrangeCheck />
          <div className={styles.advantage}>
            <h4>Гибкость в предложениях</h4>
            <p>
              Мы предлагаем широкий выбор сеансов, включая индивидуальные,
              групповые и онлайн-форматы, адаптированные под ваши уникальные
              потребности.
            </p>
          </div>
        </li>
        <li>
          <OrangeCheck />
          <div className={styles.advantage}>
            <h4>Доступные цены</h4>
            <p>
              Наши услуги оценены так, чтобы каждый мог позволить себе путь к
              лучшему самочувствию и благополучию.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default Advantages;
