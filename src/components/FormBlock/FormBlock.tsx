import React from "react";
import styles from "./FormBlock.module.scss";
import Form from "../../UI/Form/Form";
import { imgUrl } from "../../utils/consts";

interface IFormBlockProps {
  activeModal: boolean;
  setActiveModal: (activeModal: boolean) => void;
}

const FormBlock: React.FC<IFormBlockProps> = ({
  activeModal,
  setActiveModal,
}) => {
  return (
    <div
      className={styles.bigWrapper}
      style={{
        backgroundImage: `url( 
       ${imgUrl ? imgUrl + "/images/main4.png" : "/images/main4.png"}
      )`,
      }}
    >
      <Form
        setActiveModal={setActiveModal}
        activeModal={activeModal}
        styles={styles}
      />
    </div>
  );
};

export default FormBlock;
