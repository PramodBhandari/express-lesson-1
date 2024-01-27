const express = require("express");
const app = express();
require("dotenv").config();
const port = process.env.PORT || 5000;
const expressLayouts = require("express-ejs-layouts");
const indexRouter = require("./routes/index");
const path = require("path");
const templatePath = path.join(__dirname, "template");

app.set("view engine", "ejs");
app.set("views", __dirname + "/views");
app.set("layout", "layouts/layout");
app.use(expressLayouts);

app.use(express.static(path.join(__dirname, "public"))); //#1
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

const userRoute = require("./routes/users");
app.use("/", indexRouter);
app.use("/users", userRoute);

app.use("*", (req, res) => {
  res.status(404).send("Page Not Found");
});

app.listen(port, (req, res) => {
  console.log(process.env.PORT);
  console.log(`Server Running at Port : ${port}`);
});
