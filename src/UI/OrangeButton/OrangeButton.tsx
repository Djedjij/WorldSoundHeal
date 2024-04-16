import React from "react";
import styles from "./OrangeButton.module.scss";
interface IButtonProps {
  text: string;
  onClick: () => void;
}

const OrangeButton: React.FC<IButtonProps> = ({ text, onClick }) => {
  return (
    <button onClick={onClick} className={styles.orangeButton}>
      {text}
    </button>
  );
};

export default OrangeButton;
