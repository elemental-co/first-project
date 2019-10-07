const express = require("express");
const nodemailer = require("nodemailer");
const bodyParser = require("body-parser");
const app = express();

const urlencodedParser = bodyParser.json();
const transporter = nodemailer.createTransport({
  host: "in-v3.mailjet.com",
  port: 587,
  auth: {
    user: "c78bf764c7073c15ec99ed83a1442d4f",
    pass: "87f3e7a107408f5be0e479cad4fc209f"
  }
});

app.post("/sendmail", urlencodedParser, async (req, res) => {
  try{
    const sendMail = await transporter.sendMail({
      from: '"Admin" <admin@acuralabs.ai>', // sender address
      to: "admin@acuralabs.ai",
      replyTo: req.body.email,
      subject: "Contact Form",
      text: req.body.content,
    });
    res.send(sendMail);
  }catch(err){
    res.send(err);
  }
});

const listener = app.listen(process.env.PORT || '8000',() => {
  console.log(`Server started at port ${listener.address().port}`);
});