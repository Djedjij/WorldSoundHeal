import React from "react";
import styles from "./Main.module.scss";
import OrangeButton from "../../UI/OrangeButton/OrangeButton";
import { motion } from "framer-motion";
interface iMainProps {
  refToAbout: () => void;
}
const Main: React.FC<iMainProps> = ({ refToAbout }) => {
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
          путь к исцелению и здоровью! Кнопка с призывом к действию
        </motion.h4>
        <motion.div variants={cardsAnimationY} custom={3}>
          <OrangeButton text="ЗАПИШИТЕСЬ СЕЙЧАС" />
        </motion.div>
        <img
          onClick={refToAbout}
          className={styles.arrowDown}
          src="/images/icons/arrowDown.svg"
          alt=""
        ></img>
      </div>
    </motion.div>
  );
};

export default Main;
