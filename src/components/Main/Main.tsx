import React from "react";
import styles from "./Main.module.scss";
import OrangeButton from "../../UI/OrangeButton/OrangeButton";
import { motion } from "framer-motion";
import { imgUrl } from "../../utils/consts";

interface iMainProps {
  refToAbout: () => void;
  setActiveModal: (activeModal: boolean) => void;
}
const Main: React.FC<iMainProps> = ({ refToAbout, setActiveModal }) => {
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
    <motion.div
      className={styles.wrapper}
      style={{
        backgroundImage: `url( 
         ${imgUrl ? imgUrl + "/images/main1.jpg" : "/images/main1.jpg"}
        )`,
      }}
      initial="hidden"
      animate="visible"
    >
      <div className={styles.main}>
        <motion.h1
          variants={cardsAnimationY}
          custom={1}
          className={styles.header}
        >
          ИСЦЕЛИТЕ СЕБЯ ЗВУКОМ СЕГОДНЯ
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
      </div>
    </motion.div>
  );
};

export default Main;
