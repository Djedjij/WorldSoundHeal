import React, { useState } from "react";
import styles from "./PhoneButton.module.scss";
import { imgUrl } from "../../utils/consts";
import Modal from "../Modal/Modal";
const PhoneButton = () => {
  const [activeModal, setActiveModal] = useState<boolean>(false);

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
