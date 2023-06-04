const express = require("express");
const UserController = require("../controllers/UserController");

const router = express.Router();

router.post("/signup", async (req, res) => {
  try {
    const { user, token } = await UserController.signup(req.body);
    res.status(201).send({
      message: "Successful",
      data: { user, token },
    });
  } catch (error) {
    res.status(500).send({ error: error.message || "Internal Server Error" });
  }
});

router.post("/login", async (req, res) => {
  try {
    const { user, token } = await UserController.login(req.body);
    res.status(200).send({
      message: "Successful",
      data: { user, token },
    });
  } catch (error) {
    res.status(500).send({ error: error.message || "Internal Server Error" });
  }
});

router.post("/delete", async (req, res) => {
  try {
    await UserController.deleteUser(req.body);

    res.status(201).send({
      message: "Successful",
    });
  } catch (error) {
    res.status(500).send({ error: error.message || "Internal Server Error" });
  }
});

router.post("/updatePass", async (req, res) => {
  try {
    await UserController.updatePassword(req.body);

    res.status(201).send({ message: "Password updated successfully" });
  } catch (error) {
    res.status(500).send({ error: error.message || "Internal Server Error" });
  }
});

module.exports = router;
