const express = require("express");
const app = express();
const path = require("path");
const middleware = require("./middleware");
const port = 3000;
const bodyParser = require("body-parser");

const mongoose = require("./database");

const server = app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
//link(rel='stylesheet', href='https://cdn.jsdelivr.net/npm/bootstrap@4.0.0/dist/css/bootstrap.min.css', integrity='sha384-Gn5384xqQ1aoWXA+058RXPxPg6fy4IWvTNh0E263XmFcJlSAwiGgFAW/dAiS6JXm', crossorigin='anonymous')

app.set("view engine", "pug");
app.set("views", "views");

app.use(bodyParser.urlencoded({ extended: false }));
app.use(express.static(path.join(__dirname, "puplic")));
//Routes
const loginRoutes = require("./Routes/loginRoutes");
const registerRoutes = require("./Routes/registerRoutes");

app.use("/login", loginRoutes);
app.use("/register", registerRoutes);

app.get("/", middleware.requireLogin, (req, res, next) => {
  const payload = {
    pageTitle: "Home",
  };

  res.status(200).render("home", payload);
});
