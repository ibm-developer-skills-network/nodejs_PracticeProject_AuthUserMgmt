const user = require("../models/user");

const doesExist = (username) => {
  let userswithsamename = user.getUser(username);
  if (userswithsamename.length > 0) {
    return true;
  } else {
    return false;
  }
};

const authenticatedUser = (username, password) => {
  const users = user.getAllUsers();
  let validusers = users.filter((user) => {
    return user.username === username && user.password === password;
  });
  if (validusers.length > 0) {
    return true;
  } else {
    return false;
  }
};

module.exports = { doesExist, authenticatedUser };
