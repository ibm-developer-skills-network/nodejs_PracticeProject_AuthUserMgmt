const express = require("express");
const router = express.Router();

const {login,register} = require("../controllers/authController");

// POST request to log in user
router.post("/login", login);

// POST request to register new user
router.post("/register", register);

module.exports = router;
