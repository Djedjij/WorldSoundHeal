import React, { useEffect, useState } from "react";
import styles from "./Header.module.scss";
import Header from "./Header";

interface IHeaderProps {
  refToAbout: () => void;
  refToContacts: () => void;
  refToServices: () => void;
  setActiveModal: (activeModal: boolean) => void;
}
const DropHeader: React.FC<IHeaderProps> = ({
  refToAbout,
  refToContacts,
  refToServices,
  setActiveModal,
}) => {
  const [isDrop, setIsDrop] = useState("-150px");

  useEffect(() => {
    const handleScroll = () => {
      setIsDrop(window.scrollY > 0 ? "0px" : "-150px");
    };
    handleScroll();
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div style={{ top: isDrop }} className={styles.header}>
      <Header
        setActiveModal={setActiveModal}
        refToAbout={refToAbout}
        refToContacts={refToContacts}
        refToServices={refToServices}
      />
    </div>
  );
};

export default DropHeader;
