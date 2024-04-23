export const sendMessage = async (name, phone, text) => {
  try {
    const data = await window.Email.send({
      SecureToken: "f23cb274-bbfd-4d88-936a-717caf3b7531",
      To: "mat3347571@gmail.com",
      From: "mat3347571@gmail.com",
      Subject: `Заявка от ${name}`,
      Body: `имя ${name}; номер телефона: ${phone}; сообщение: ${text}`,
    });
    console.log(data);
    return data;
  } catch (error) {
    return error;
  }
};
