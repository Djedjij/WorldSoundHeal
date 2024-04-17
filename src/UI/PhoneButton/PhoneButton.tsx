import React from "react";
import styles from "./PhoneButton.module.scss";
import { imgUrl } from "../../utils/consts";
import Modal from "../Modal/Modal";
interface IPhoneButtonProps {
  activeModal: boolean;
  setActiveModal: (activeModal: boolean) => void;
}

const PhoneButton: React.FC<IPhoneButtonProps> = ({
  activeModal,
  setActiveModal,
}) => {
  return (
    <div>
      {!activeModal && (
        <div
          className={styles.phoneButton}
          onClick={() => setActiveModal(true)}
        >
          <img
            src={
              imgUrl
                ? imgUrl + "/images/icons/phone.svg"
                : "/images/icons/phone.svg"
            }
            alt=""
          />
        </div>
      )}
      <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
    </div>
  );
};

export default PhoneButton;
