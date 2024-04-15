import React, { LegacyRef } from "react";
import styles from "./Services.module.scss";
import { services } from "../../utils/consts";

const Services = React.forwardRef((props, ref: LegacyRef<HTMLDivElement>) => {
  return (
    <div ref={ref} className={styles.bigWrapper}>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>Наши услуги</h3>
        <div className={styles.services}>
          {services.map((service, index) => (
            <div className={styles.service} key={index}>
              <img src={service.img} alt="" />
              <h4>{service.name}</h4>
              <div className={styles.desc}>
                <p>{service.description}</p>
                <div className={styles.price}>
                  <p>От</p>
                  <p className={styles.priceNum}>{service.price}</p>
                  <p>руб.</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
});

export default Services;
