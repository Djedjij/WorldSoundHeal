export const sendMessage = async (name, phone, text) => {
  let ebody = ` <b>Имя: </b>${name}
  <br />
  <b>Номер телефона: </b>${phone}
  <br />
  ${text ? `<b>Сообщение: </b> ${text}` : ""}`;

  try {
    const data = await window.Email.send({
      SecureToken: "48f55893-374c-44bb-aaaa-6587e655bef1",
      To: "orderwsh@ya.ru",
      From: "orderwsh@ya.ru",
      Subject: `Заявка от ${name}`,
      Body: ebody,
    });
    return data;
  } catch (error) {
    return error;
  }
};
