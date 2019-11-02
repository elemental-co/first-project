const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  host: "in-v3.mailjet.com",
  port: 587,
  auth: {
    user: "c78bf764c7073c15ec99ed83a1442d4f",
    pass: "87f3e7a107408f5be0e479cad4fc209f"
  }
});

const sendMail = async (req, res) => {
  try{
    const sendMail = await transporter.sendMail({
      from: '"Admin" <admin@acuralabs.ai>',
      to: "admin@acuralabs.ai",
      replyTo: req.body.email,
      subject: "Contact Form",
      text: req.body.content,
    });
    res.send(sendMail);
  }catch(err){
    res.send(err);
  }
};

module.exports = {sendMail};