const express = require("express");
require("dotenv").config();
const connectToDB = require("./config/mongoose");
const routes = require("./routes");

const app = express();
const PORT = process.env.PORT || 3000;

connectToDB();

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use("/api", routes);

app.get("/", (req, res) => {
  res.status(200).send("Welcome To Authentication APIs");
});

app.listen(PORT, () => {
  console.log(`Server Listening On Port: ${PORT}`);
});
