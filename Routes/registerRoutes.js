const express = require("express");
const app = express();
const router = express.Router();
const bodyParser = require("body-parser");

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));

router.get("/", (req, res, next) => {
  res.status(200).render("register");
});

router.post("/", (req, res, next) => {
  const firstName = req.body.firstName.trim();
  const lastName = req.body.lastName.trim();
  const userName = req.body.username.trim();
  const password = req.body.password;
  const email = req.body.email.trim();

  let payload = req.body;

  if (firstName && lastName && userName && password && email) {
  } else {
    payload.errorMessage = "make sure each field has a valid value";
    res.status(200).render("register", payload);
  }
});

module.exports = router;
