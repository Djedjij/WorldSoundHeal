import React from "react";
import styles from "./Modal.module.scss";

interface IModalProps {
  activeModal: boolean;
  setActiveModal: (activeModal: boolean) => void;
}

const Modal: React.FC<IModalProps> = ({ activeModal, setActiveModal }) => {
  return (
    <div
      className={`${styles.modal} ${activeModal ? styles.active : ""}`}
      onClick={() => setActiveModal(false)}
    >
      <div
        className={`${styles.modalContent} ${
          activeModal && styles.activeContent
        }`}
        onClick={(e) => e.stopPropagation()}
      >
        <h1>АБОБА</h1>
      </div>
    </div>
  );
};

export default Modal;
