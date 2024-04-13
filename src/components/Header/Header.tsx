import React from "react";
import styles from "./Header.module.scss";
const Header = () => {
  return (
    <div className={styles.wrapper}>
      <h3 className={styles.name}>WORLD SOUND HEAL</h3>
      <h3 className={styles.logo}>ЛОГОТИП</h3>
      <nav className={styles.menu}>
        <ul>
          <li>О нас</li>
          <li>Услуги</li>
          <li>Контакты</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
