import React from "react";
import styles from "./OrangeButton.module.scss";
interface IButtonProps {
  text: string;
}

const OrangeButton: React.FC<IButtonProps> = ({ text }) => {
  return <button className={styles.orangeButton}>{text}</button>;
};

export default OrangeButton;
