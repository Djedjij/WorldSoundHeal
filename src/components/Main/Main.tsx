import React, { useState } from "react";
import styles from "./Main.module.scss";
import OrangeButton from "../../UI/OrangeButton/OrangeButton";
import { motion } from "framer-motion";
import { imgUrl } from "../../utils/consts";
import Modal from "../../UI/Modal/Modal";
interface iMainProps {
  refToAbout: () => void;
}
const Main: React.FC<iMainProps> = ({ refToAbout }) => {
  const [activeModal, setActiveModal] = useState<boolean>(false);
  const cardsAnimationY = {
    hidden: {
      y: 200,
      opacity: 0,
    },
    visible: (custom: number) => ({
      y: 0,
      opacity: 1,

      transition: {
        delay: custom * 0.6,
        duration: 0.6,
      },
    }),
  };
  return (
    <motion.div className={styles.wrapper} initial="hidden" animate="visible">
      <div className={styles.main}>
        <motion.h1
          variants={cardsAnimationY}
          custom={1}
          className={styles.header}
        >
          Исцелите себя звуком сегодня
        </motion.h1>
        <motion.h4
          variants={cardsAnimationY}
          custom={2}
          className={styles.smallHeader}
        >
          Присоединяйтесь к сеансам саундхилинга от World Sound Heal и обретите
          гармонию тела и души. Запишитесь на сеанс уже сейчас и начните свой
          путь к исцелению и здоровью!
        </motion.h4>
        <motion.div variants={cardsAnimationY} custom={3}>
          <OrangeButton
            onClick={() => setActiveModal(true)}
            text="ЗАПИШИТЕСЬ СЕЙЧАС"
          />
        </motion.div>
        <img
          onClick={refToAbout}
          className={styles.arrowDown}
          src={
            imgUrl
              ? imgUrl + "/images/icons/arrowDown.svg"
              : "/images/icons/arrowDown.svg"
          }
          alt=""
        ></img>
        <Modal activeModal={activeModal} setActiveModal={setActiveModal} />
      </div>
    </motion.div>
  );
};

export default Main;
