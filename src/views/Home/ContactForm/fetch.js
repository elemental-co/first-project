import axios from "axios";

export const postContactForm = obj => {
  return new Promise((resolve, reject) => {
    axios({
      method: "POST",
      url: "http://35.247.178.73:8000/sendmail",
      data: JSON.stringify(obj),
      headers: {"Content-Type": "application/json"}
    }).then(({data}) => {
      console.log(data);
    }).catch(err => console.error(err));
  });
};