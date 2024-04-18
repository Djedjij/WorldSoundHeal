import React, { useRef, useState } from "react";
import { IMaskInput } from "react-imask";
import ModalComplete from "../ModalComplete/ModalComplete";
interface IFormProps {
  styles: any;
}

const Form: React.FC<IFormProps> = ({ styles }) => {
  const [showModalDone, setShowModalDone] = useState<boolean>(false);

  const showModal = () => {
    setShowModalDone(true);
    setTimeout(() => setShowModalDone(false), 5000);
  };

  const [name, setName] = useState("");
  const [nameError, setNameError] = useState("");
  const [phone, setPhone] = useState("");
  const [phoneError, setPhoneError] = useState("");
  const [text, setText] = useState("");
  const [textError, setTextError] = useState("");
  const ref = useRef(null);

  const checkText = (text: string) => {
    if (text.length > 499) {
      setTextError(`После текст может содержать не более 500 символов`);
      return true;
    }
    return false;
  };

  const checkPhone = (phone: string) => {
    if (!phone) {
      setPhoneError(`Поле "Номер" не может быть пустым`);
      return true;
    } else if (phone.length < 9) {
      setPhoneError("Номер слишком короткий");
      return true;
    }
    return false;
  };

  const checkName = (name: string) => {
    if (!name) {
      setNameError(`Поле "Имя" не должно быть пустым `);
      return true;
    } else if (name.length > 20) {
      setNameError(`Имя слишком длинное`);
      return true;
    }
    return false;
  };

  const submitForm = async (e: any) => {
    e.preventDefault();
    const errorName = checkName(name);
    const phoneError = checkPhone(phone);
    const textError = checkText(text);
    if (!errorName && !phoneError && !textError) {
      showModal();
      setName("");
      setPhone("");
      setText("");
    }
  };

  return (
    <div>
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
              onFocus={() => setNameError("")}
              value={name}
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
              value={text}
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
      <ModalComplete
        showModalDone={showModalDone}
        setShowModalDone={setShowModalDone}
      />
    </div>
  );
};

export default Form;
