let users = [
  {
    username: "user2",
    password: "password2",
  },
];

module.exports = {
  // CREATE
  addUser: function (username, password) {
    users.push({ username: username, password: password });
  },

  // READ
  getUser: function (username) {
    return users.filter((user) => {
      return user.username === username;
    });
  },

  getAllUsers: function () {
    return users;
  },

  // UPDATE
  updateUser: function (username, newUsername, newPassword) {
    const userIndex = users.findIndex((user) => user.username === username);
    if (userIndex !== -1) {
      users[userIndex].username = newUsername;
      users[userIndex].password = newPassword;
    }
  },

  // DELETE
  deleteUser: function (username) {
    users = users.filter((user) => user.username !== username);
  },
};
