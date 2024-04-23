import React, { useRef, useState } from "react";
import { IMaskInput } from "react-imask";
import ModalComplete from "../ModalComplete/ModalComplete";
import Loader from "../Loader/Loader";
import { sendMessage } from "../../utils/sendMessage";
interface IFormProps {
  styles: any;
  activeModal: boolean;
  setActiveModal: (activeModal: boolean) => void;
}

const Form: React.FC<IFormProps> = ({ styles, setActiveModal }) => {
  const [showModalDone, setShowModalDone] = useState<boolean>(false);
  const [modalMessage, setModalMessage] = useState<string>("");
  const showModal = () => {
    setShowModalDone(true);
    setTimeout(() => setShowModalDone(false), 5000);
  };
  const [loading, setLoading] = useState<boolean>(false);
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
      setPhoneError(`Поле "Телефон" не может быть пустым`);
      return true;
    } else if (phone.length < 9) {
      setPhoneError("Номер слишком короткий");
      return true;
    } else if (
      phone[0] + phone[1] !== "29" &&
      phone[0] + phone[1] !== "25" &&
      phone[0] + phone[1] !== "33" &&
      phone[0] + phone[1] !== "44"
    ) {
      setPhoneError("Такого номера не существуюет");
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
      setLoading(true);

      const data = await sendMessage(name, phone, text);
      if (!data) {
        setModalMessage("");
        setLoading(false);
        showModal();
      } else {
        setLoading(false);
        setModalMessage(
          "Заявка успешно отправлена. В ближайшее время с вами свяжется наш сотрудник"
        );
        showModal();
        setName("");
        setPhone("");
        setText("");
        setActiveModal(false);
      }
    }
  };
  return (
    <div className={loading ? styles.shadowActive : ""}>
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
              autoComplete="off"
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
          <button className={styles.submitInput}>
            {loading ? <Loader /> : "Отправить"}
          </button>
        </form>
        <p className={styles.confidential}>
          Отправляя данную форму вы соглашаетесь с{" "}
          <a href="/">Политикой конфиденциальности</a>
        </p>
      </div>
      <ModalComplete
        showModalDone={showModalDone}
        setShowModalDone={setShowModalDone}
        modalMessage={modalMessage}
      />
    </div>
  );
};

export default Form;
