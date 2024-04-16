import React from "react";
import styles from "./Header.module.scss";
import { imgUrl } from "../../utils/consts";

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
      <div className={styles.burgerButton}>
        <img
          src={
            imgUrl
              ? imgUrl + "/images/icons/burger.svg"
              : "/images/icons/burger.svg"
          }
          alt=""
        ></img>
      </div>
      <div className={styles.name}>
        <h3 onClick={() => scrollUp()}>WORLD SOUND HEAL</h3>
      </div>
      <img
        className={styles.logo}
        src={imgUrl ? imgUrl + "/images/logo.png" : "/images/logo.png"}
        alt=""
      ></img>

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
