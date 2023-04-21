const jwt = require("jsonwebtoken"); // Importing the jsonwebtoken module
const { doesExist, authenticatedUser } = require("../helpers/auth");

const user = require("../models/user");
const users = user.getAllUsers();

let login = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (!username || !password) {
    return res.status(400).json({
      message: "Error logging in. Please provide both username and password.",
    }); // Using status code 400 for bad request
  }

  if (authenticatedUser(username, password)) {
    let accessToken = jwt.sign(
      {
        data: password,
      },
      "access",
      { expiresIn: 60 * 60 }
    );

    req.session.authorization = {
      accessToken,
      username,
    };
    return res.status(200).send("User successfully logged in");
  } else {
    return res.status(401).json({
      message:
        "Invalid login credentials. Please check your username and password.",
    }); // Using status code 401 for unauthorized
  }
};

let register = (req, res) => {
  const username = req.body.username;
  const password = req.body.password;

  if (username && password) {
    if (!doesExist(username)) {
      users.push({ username: username, password: password });
      return res
        .status(201) // Using status code 201 for created
        .json({ message: "User successfully registered. You can now log in." });
    } else {
      return res.status(409).json({ message: "Username already exists." }); // Using status code 409 for conflict
    }
  }
  return res.status(400).json({ message: "Invalid username or password." }); // Using status code 400 for bad request
};

module.exports = { login, register };
