const bodyParser = require("body-parser");
const app = require("express")();
const cors = require("cors");

app.use(bodyParser.urlencoded({extended: false}));
app.use(bodyParser.json());
app.use(cors());

app.get("/", (req, res) => res.send({
  online: true,
  about: "PT Acura Labs Indonesia"
}));
app.use("/mail", require("./routes/mail"));

const listener = app.listen(process.env.PORT || '8000',() => {
  console.log(`Server started at port ${listener.address().port}`);
});