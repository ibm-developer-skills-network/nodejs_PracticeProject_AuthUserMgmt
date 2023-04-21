const express = require("express");
const router = express.Router();
const friendsRoutes = require("./friends");
const authController = require("./auth");

router.use("/friends", friendsRoutes);
router.use("/auth", authController);

router.get("/", (req, res) => {
  res.send("Welcome to my app!");
});

module.exports = router;