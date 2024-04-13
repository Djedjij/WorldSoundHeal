import React from "react";
import styles from "./SoundHealing.module.scss";
import OrangeCheck from "../../UI/OrangeCheck.tsx/OrangeCheck";
const SoundHealing = () => {
  return (
    <div className={styles.bigWrapper}>
      <div className={styles.shadow}>
        <div className={styles.wrapper}>
          <div className={styles.textBlock}>
            <h3 className={styles.header}>О саундхилинге</h3>
            <p className={styles.text}>
              Саундхилинг - это древняя методика, которая использует звуковые
              вибрации для достижения состояния расслабления и гармонии. Эта
              методика может использоваться в качестве альтернативной формы
              медитации, помогая людям расслабиться и настроиться на позитивный
              лад.
            </p>
          </div>
          <div className={styles.textBlock}>
            <h3 className={styles.header}>Как работает саундхилинг?</h3>
            <p className={styles.text}>
              Саундхилинг основан на предположении, что все в мире имеет свою
              частоту и вибрацию. Когда эти вибрации не гармонизированы, они
              могут вызывать стресс и напряжение в теле. Саундхилинг использует
              звуковые инструменты, чтобы создать гармоническую атмосферу, что
              может помочь уравнять вибрации в теле и достигнуть состояния
              расслабления и гармонии.
            </p>
          </div>
          <ul className={styles.soundHealingUl}>
            <h3 className={styles.header}> Польза саундхилинга</h3>
            <li>
              <OrangeCheck />
              <p className={styles.text}>
                Уменьшение стресса и напряжения. Саундхилинг может помочь
                уменьшить стресс и напряжение в теле, что может привести к более
                спокойному и расслабленному состоянию ума.
              </p>
            </li>
            <li>
              <OrangeCheck />
              <p className={styles.text}>
                Улучшение настроения и благополучия. Саундхилинг может помочь
                улучшить ваше настроение и привести к ощущению гармонии и
                благополучия.
              </p>
            </li>
            <li>
              <OrangeCheck />
              <p className={styles.text}>
                Увеличение осознанности. Саундхилинг может помочь вам
                сосредоточиться на своих мыслях и чувствах, что может привести к
                более глубокому пониманию себя и своего окружения.
              </p>
            </li>
            <li>
              {" "}
              <OrangeCheck />
              <p className={styles.text}>
                Улучшение сна. Саундхилинг может помочь улучшить качество вашего
                сна, что может привести к более отдохнутому и энергичному
                состоянию в течение дня.
              </p>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SoundHealing;
