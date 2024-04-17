import React from "react";
import styles from "./BurgerMenu.module.scss";
import { imgUrl } from "../../utils/consts";

interface IBurgerMenuProps {
  openMenu: boolean;
  setMenuOpen: (openMenu: boolean) => void;
  refToAbout: () => void;
  refToContacts: () => void;
  refToServices: () => void;
  setActiveModal: (activeModal: boolean) => void;
}

const BurgerMenu: React.FC<IBurgerMenuProps> = ({
  openMenu,
  setMenuOpen,
  refToAbout,
  refToContacts,
  refToServices,
  setActiveModal,
}) => {
  return (
    <div
      className={openMenu ? `${styles.menu} ${styles.menuActive}` : styles.menu}
    >
      <div
        className={openMenu ? ` ${styles.blurActive}` : `${styles.blur}`}
        onClick={() => setMenuOpen(false)}
      />
      <div className={styles.menuContent}>
        <img
          onClick={() => setMenuOpen(false)}
          className={styles.crossBtn}
          src={
            imgUrl
              ? imgUrl + "/images/icons/cross.svg"
              : "/images/icons/cross.svg"
          }
          alt=""
        ></img>
        <div className={styles.menuHeader}>
          <h3>WORLD SOUND HEAL</h3>
          <img
            src={imgUrl ? imgUrl + "/images/logo.png" : "/images/logo.png"}
            alt=""
          ></img>
        </div>
        <ul>
          <li
            onClick={() => {
              setMenuOpen(false);
              refToAbout();
            }}
            className={styles.menuBtn}
          >
            О нас
          </li>
          <li
            onClick={() => {
              setMenuOpen(false);
              refToServices();
            }}
            className={styles.menuBtn}
          >
            Услуги
          </li>
          <li
            onClick={() => {
              setMenuOpen(false);
              refToContacts();
            }}
            className={styles.menuBtn}
          >
            Контакты
          </li>
          <li
            onClick={() => {
              setMenuOpen(false);
              setActiveModal(true);
            }}
            className={styles.formBtn}
          >
            Записаться
          </li>
        </ul>
      </div>
    </div>
  );
};

export default BurgerMenu;
