import axios from "axios";

export const postContactForm = obj => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: "https://contact.acuralabs.ai/mail/send",
      data: JSON.stringify(obj),
      headers: {"Content-Type": "application/json"}
    }).then(({data}) => {
      resolve(data);
    }).catch(err => console.error(err));
  });
};
