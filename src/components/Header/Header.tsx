import React from "react";
import styles from "./Header.module.scss";

interface IHeaderProps {
  refToAbout: () => void;
  refToContacts: () => void;
  refToServices: () => void;
}

const Header: React.FC<IHeaderProps> = ({
  refToAbout,
  refToContacts,
  refToServices,
}) => {
  const scrollUp = () => {
    window.scroll(0, 0);
  };
  return (
    <div className={styles.wrapper}>
      <h3 onClick={() => scrollUp()} className={styles.name}>
        WORLD SOUND HEAL
      </h3>
      <img className={styles.logo} src="/images/logo.png" alt=""></img>
      <nav className={styles.menu}>
        <ul>
          <li onClick={() => refToAbout()}>О нас</li>
          <li onClick={() => refToServices()}>Услуги</li>
          <li onClick={() => refToContacts()}>Контакты</li>
        </ul>
      </nav>
    </div>
  );
};

export default Header;
