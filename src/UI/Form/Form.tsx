import React, { useRef, useState } from "react";
import { IMaskInput } from "react-imask";
interface IFormProps {
  styles: any;
}

const Form: React.FC<IFormProps> = ({ styles }) => {
  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [text, setText] = useState("");
  const [textError, setTextError] = useState("");
  const ref = useRef(null);

  const checkName = (name: string) => {
    if (!name) {
      setNameError(`Поле "Имя" не должно быть пустым `);
    }
    if (name.length > 20) {
      setNameError("Имя слишком длинное");
    }
  };
  const checkText = (text: string) => {
    if (text.length > 499) {
      setTextError(`После текст может содержать не более 500 символов`);
    }
  };

  const checkPhone = (phone: string) => {
    if (!phone) {
      setPhoneError(`Поле "Номер" не может быть пустым`);
    } else if (phone.length < 9) {
      setPhoneError("Номер слишком короткий");
    }
  };

  const submitForm = (e: any) => {
    e.preventDefault();
    checkName(name);
    checkPhone(phone);
    checkText(text);
  };

  return (
    <div className={styles.shadow}>
      <h3 className={styles.header}>Напишите нам сейчас</h3>
      <p className={styles.text}>
        Оставьте своё сообщение, и мы обязательно свяжемся с вами в кратчайшие
        сроки
      </p>
      <form
        className={styles.formBlock}
        onSubmit={(e) => submitForm(e)}
        action=""
      >
        <div className={styles.formInputBlock}>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Имя"
            id="name"
            onChange={(e) => setName(e.target.value)}
            onFocus={(e) => setNameError("")}
          />
          {nameError && <p className={styles.textError}>{nameError}</p>}
        </div>
        <div className={styles.formInputBlock}>
          <IMaskInput
            mask="+375-(00)-000-00-00"
            radix="."
            className={styles.formInput}
            value={phone}
            unmask={true}
            ref={ref}
            onAccept={(value, mask) => setPhone(value)}
            placeholder="Телефон"
            onFocus={() => setPhoneError("")}
          />
          {phoneError && <p className={styles.textError}>{phoneError}</p>}
        </div>
        <div className={styles.formInputBlock}>
          <input
            className={styles.formInput}
            type="text"
            placeholder="Текст"
            id="text"
            onChange={(e) => setText(e.target.value)}
            onFocus={() => setTextError("")}
          />
          {textError && <p className={styles.textError}>{textError}</p>}
        </div>
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
