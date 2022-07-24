const express = require("express");
const app = express();
const path = require("path");
const port = process.env.PORT || 8000;
const hbs = require("hbs");

// Path
const CSSPath = path.join(__dirname, "../public/css");
const testPath = path.join(__dirname, "../public/css/../js/main.js");
const Template_Path = path.join(__dirname, "/nishtemplates/views");
const Partials_Path = path.join(__dirname, "/nishtemplates/partials");
// Static files
app.use(express.static(CSSPath));

app.set("view engine", "hbs");
app.set("views", Template_Path);
hbs.registerPartials(Partials_Path);

app.get("/", (req, res) => {
  res.render("index.hbs");
});
app.get("/about", (req, res) => {
  res.render("about.hbs");
});
app.get("/weather", (req, res) => {
  res.render("weather.hbs");
});
app.get("*", (req, res) => {
  res.render("404error.hbs");
});
app.get("/about/*", (req, res) => {
  res.render("404error.hbs");
});
app.get("/weather/*", (req, res) => {
  res.render("404error.hbs");
});

app.listen(port, () => {
  console.log(`Running at port ${port}`);
});
