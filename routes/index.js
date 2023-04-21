const express = require("express");
const router = express.Router();
const friendsRoutes = require("./friends");

router.use("/friends", friendsRoutes);

router.get("/", (req, res) => {
  res.send("Welcome to my app!");
});

module.exports = router;