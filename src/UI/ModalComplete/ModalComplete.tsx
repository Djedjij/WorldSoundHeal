import React from "react";
import styles from "./ModalComplete.module.scss";
import { imgUrl } from "../../utils/consts";
import ReactDOM from "react-dom";

interface IModalCompleteProps {
  showModalDone: boolean;
  setShowModalDone: (showModalDone: boolean) => void;
  modalMessage: string;
}

const ModalComplete: React.FC<IModalCompleteProps> = ({
  showModalDone,
  setShowModalDone,
  modalMessage,
}) => {
  return ReactDOM.createPortal(
    <div
      className={
        !showModalDone ? `${styles.modal} ${styles.modalActive}` : styles.modal
      }
    >
      {modalMessage ? (
        <>
          <img
            className={styles.bird}
            src={
              imgUrl
                ? imgUrl + "/images/icons/bird.svg"
                : "/images/icons/bird.svg"
            }
            alt=""
          />
          <p>{modalMessage}</p>
        </>
      ) : (
        <>
          <img
            className={styles.redCross}
            src={
              imgUrl
                ? imgUrl + "/images/icons/redCross.svg"
                : "/images/icons/redCross.svg"
            }
            alt=""
          />
          <p className={styles.errorMessage}>
            "Произошла ошибка. Попробуйте позже"
          </p>
        </>
      )}
    </div>,
    document.body
  );
};

export default ModalComplete;
