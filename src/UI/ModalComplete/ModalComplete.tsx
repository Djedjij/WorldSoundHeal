import React from "react";
import styles from "./ModalComplete.module.scss";
import { imgUrl } from "../../utils/consts";
import ReactDOM from "react-dom";

interface IModalCompleteProps {
  showModalDone: boolean;
  setShowModalDone: (showModalDone: boolean) => void;
}

const ModalComplete: React.FC<IModalCompleteProps> = ({
  showModalDone,
  setShowModalDone,
}) => {
  return ReactDOM.createPortal(
    <div
      className={
        showModalDone ? `${styles.modal} ${styles.modalActive}` : styles.modal
      }
    >
      <img
        onClick={() => setShowModalDone(false)}
        className={styles.crossBtn}
        src={
          imgUrl
            ? imgUrl + "/images/icons/cross.svg"
            : "/images/icons/cross.svg"
        }
        alt=""
      />
      <img
        className={styles.bird}
        src={
          imgUrl ? imgUrl + "/images/icons/bird.svg" : "/images/icons/bird.svg"
        }
        alt=""
      />
      <p>
        Ваша заявка принята. В ближайшее время с вами свяжется наш сотрудник.
      </p>
    </div>,
    document.body
  );
};

export default ModalComplete;
