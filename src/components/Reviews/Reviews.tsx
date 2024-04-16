import React from "react";
import styles from "./Reviews.module.scss";
import { reviews } from "../../utils/consts";
const Reviews = () => {
  return (
    <div className={styles.bigWrapper}>
      <div className={styles.wrapper}>
        <h3 className={styles.header}>Отзывы наших клиентов</h3>
        <div className={styles.reviews}>
          {reviews.map((review, index) => (
            <div key={index} className={styles.review}>
              <img src={review.img} alt="" />
              <div className={styles.reviewContent}>
                <p className={styles.text}>{review.text}</p>
                <p className={styles.name}>{review.name}</p>
                <div className={styles.jobBlock}>
                  <p className={styles.job}>{review.job}</p>
                  <p className={styles.company}>{review.company}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Reviews;
