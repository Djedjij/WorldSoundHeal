import React from "react";
import styles from "./FormBlock.module.scss";
import Form from "../../UI/Form/Form";

interface IFormBlockProps {
  activeModal: boolean;
  setActiveModal: (activeModal: boolean) => void;
}

const FormBlock: React.FC<IFormBlockProps> = ({
  activeModal,
  setActiveModal,
}) => {
  return (
    <div className={styles.bigWrapper}>
      <Form
        setActiveModal={setActiveModal}
        activeModal={activeModal}
        styles={styles}
      />
    </div>
  );
};

export default FormBlock;
