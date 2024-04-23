import axios from "axios";

interface IFromData {
  name: string;
  phone: string;
  text: string;
}

export const senqRequest = async (formData: IFromData) => {
  try {
    const { data } = await axios.post(
      "http://178.172.161.179:5000/sendRequest",
      formData
    );
    console.log(data);

    return data;
  } catch (error) {
    return false;
  }
};
