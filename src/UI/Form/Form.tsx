import React from "react";

interface IFormProps {
  styles: any;
}

const Form: React.FC<IFormProps> = ({ styles }) => {
  return (
    <div className={styles.shadow}>
      <h3 className={styles.header}>Напишите нам сейчас</h3>
      <p className={styles.text}>
        Оставьте своё сообщение, и мы обязательно свяжемся с вами в кратчайшие
        сроки
      </p>
      <form className={styles.formBlock} action="">
        <input
          className={styles.formInput}
          type="text"
          placeholder="Имя"
          id="name"
        />
        <input
          className={styles.formInput}
          type="text"
          placeholder="Телефон"
          id="phone"
        />
        <input
          className={styles.formInput}
          type="text"
          placeholder="Текст"
          id="text"
        />
        <input className={styles.submitInput} type="submit" />
      </form>
      <p className={styles.confidential}>
        Отправляя данную форму вы соглашаетесь с{" "}
        <a href="/">Политикой конфиденциальности</a>
      </p>
    </div>
  );
};

export default Form;
