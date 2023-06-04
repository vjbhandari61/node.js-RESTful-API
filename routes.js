const express = require("express");
const userRoutes = require("./src/routes/user.routes");

const router = express.Router();

router.use("/users", userRoutes);

module.exports = router;
