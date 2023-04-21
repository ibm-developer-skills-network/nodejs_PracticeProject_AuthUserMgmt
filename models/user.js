// user.js

let users = [];

module.exports = {
  addUser: function (username, password) {
    users.push({ username: username, password: password });
  },

  getUser: function (username) {
    return users.find((user) => user.username === username);
  },

  doesExist: function (username) {
    return users.some((user) => user.username === username);
  },

  getAllUsers: function () {
    return users;
  },
};
