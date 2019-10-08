const router = require("express").Router();

const mailController = require("../controller/mail");

router.post("/send", mailController.sendMail);

module.exports = router;