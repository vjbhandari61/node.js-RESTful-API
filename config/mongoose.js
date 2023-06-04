const mongoose = require("mongoose");
require("dotenv").config();

const { MONGO_USER, MONGO_PASS } = process.env;

const connectToDB = () => {
  mongoose
    .connect(
      `mongodb+srv://${MONGO_USER}:${MONGO_PASS}@cluster0.9xq9owy.mongodb.net/users`,
      {
        useUnifiedTopology: true,
        useNewUrlParser: true,
      }
    )
    .then(() => {
      console.log("Connection To DB Established!");
    })
    .catch((error) => {
      console.error(
        "Connection To DB Could Not Be Established..................",
        error
      );
    });
};

module.exports = connectToDB;
