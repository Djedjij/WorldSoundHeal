import React, { useState } from "react";
import styles from "./Header.module.scss";
import { imgUrl } from "../../utils/consts";
import BurgerMenu from "../../UI/BurgerMenu/BurgerMenu";

interface IHeaderProps {
  refToAbout: () => void;
  refToContacts: () => void;
  refToServices: () => void;
  setActiveModal: (activeModal: boolean) => void;
}

const Header: React.FC<IHeaderProps> = ({
  refToAbout,
  refToContacts,
  refToServices,
  setActiveModal,
}) => {
  const scrollUp = () => {
    window.scroll(0, 0);
  };
  const [openMenu, setOpenMenu] = useState<boolean>(false);
  return (
    <div className={styles.wrapper}>
      <div
        className={openMenu ? styles.burgerButtonActive : styles.burgerButton}
      >
        <img
          onClick={() => setOpenMenu(!openMenu)}
          src={
            imgUrl
              ? imgUrl + "/images/icons/burger.svg"
              : "/images/icons/burger.svg"
          }
          alt=""
        ></img>
      </div>
      <div className={styles.name}>
        <h3 onClick={scrollUp}>WORLD SOUND HEAL</h3>
      </div>
      <img
        onClick={scrollUp}
        className={styles.logo}
        src={imgUrl ? imgUrl + "/images/Logo.svg" : "/images/Logo.svg"}
        alt="logo"
      ></img>

      <nav className={styles.menu}>
        <ul>
          <li onClick={() => refToAbout()}>О нас</li>
          <li onClick={() => refToServices()}>Услуги</li>
          <li onClick={() => refToContacts()}>Контакты</li>
        </ul>
      </nav>
      <BurgerMenu
        openMenu={openMenu}
        setMenuOpen={setOpenMenu}
        refToAbout={refToAbout}
        refToContacts={refToContacts}
        refToServices={refToServices}
        setActiveModal={setActiveModal}
      />
    </div>
  );
};

export default Header;
