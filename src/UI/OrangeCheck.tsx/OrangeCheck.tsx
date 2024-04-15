import React from "react";
import styles from "./OrangeCheck.module.scss";
import { imgUrl } from "../../utils/consts";
const OrangeCheck = () => {
  return (
    <div className={styles.orangeCheck}>
      <img
        src={
          imgUrl
            ? imgUrl + "/images/icons/check.svg"
            : "/images/icons/check.svg"
        }
        alt=""
      />
    </div>
  );
};

export default OrangeCheck;
