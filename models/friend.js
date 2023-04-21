let friends = {
  "johnsmith@gmail.com": {
    firstName: "John",
    lastName: "Doe",
    DOB: "22-12-1990",
  },
  "annasmith@gmail.com": {
    firstName: "Anna",
    lastName: "smith",
    DOB: "02-07-1983",
  },
  "peterjones@gmail.com": {
    firstName: "Peter",
    lastName: "Jones",
    DOB: "21-03-1989",
  },
};

module.exports = {
  // CREATE
  addFriend: function (email, firstName, lastName, DOB) {
    friends[email] = {
      firstName: firstName,
      lastName: lastName,
      DOB: DOB,
    };
  },

  // READ
  getFriend: function (email) {
    return friends[email];
  },

  getAllFriends: function () {
    return friends;
  },

  // UPDATE
  updateFriend: function (email, firstName, lastName, DOB) {
    if (friends[email]) {
      friends[email].firstName = firstName;
      friends[email].lastName = lastName;
      friends[email].DOB = DOB;
    }
  },

  // DELETE
  deleteFriend: function (email) {
    delete friends[email];
  },
};
