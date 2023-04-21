// user.js

let users = [];

module.exports = {
  addUser: function (username, password) {
    users.push({ username: username, password: password });
  },

  getUser: function (username) {
    return users.filter((user) => {
      return user.username === username;
    });
  },

  getAllUsers: function () {
    return users;
  },
};
