import React from "react";
import styles from "./Services.module.scss";
import { services } from "../../utils/consts";
const Services = () => {
  return (
    <div className={styles.bigWrapper}>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>Наши услуги</h3>
        <div className={styles.services}>
          {services.map((service, index) => (
            <div className={styles.service} key={index}>
              <img src={service.img} alt="" />
              <h4>{service.name}</h4>
              <p>{service.description}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Services;
