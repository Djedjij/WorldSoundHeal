import React from "react";
import styles from "./FormBlock.module.scss";
import Form from "../../UI/Form/Form";

const FormBlock = () => {
  return (
    <div className={styles.bigWrapper}>
      <Form styles={styles} />
    </div>
  );
};

export default FormBlock;
