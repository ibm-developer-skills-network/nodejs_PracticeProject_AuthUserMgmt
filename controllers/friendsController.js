let friends = {
  "johnsmith@gamil.com": {
    firstName: "John",
    lastName: "Doe",
    DOB: "22-12-1990",
  },
  "annasmith@gamil.com": {
    firstName: "Anna",
    lastName: "smith",
    DOB: "02-07-1983",
  },
  "peterjones@gamil.com": {
    firstName: "Peter",
    lastName: "Jones",
    DOB: "21-03-1989",
  },
};

// GET request: Retrieve all friends
let getAllFriends = (req, res) => {
  // Update the code here

  res.send("Yet to be implemented"); //This line is to be replaced with actual return value
};

// GET by specific ID request: Retrieve a single friend with email ID
let getFriendByEmail = (req, res) => {
  // Update the code here
  res.send("Yet to be implemented"); //This line is to be replaced with actual return value
};

// POST request: Add a new friend
let addFriend = (req, res) => {
  // Update the code here
  res.send("Yet to be implemented"); //This line is to be replaced with actual return value
};

// PUT request: Update the details of a friend with email id
let updateFriend = (req, res) => {
  // Update the code here
  res.send("Yet to be implemented"); //This line is to be replaced with actual return value
};

// DELETE request: Delete a friend by email id
let deleteFriend = (req, res) => {
  // Update the code here
  res.send("Yet to be implemented"); //This line is to be replaced with actual return value
};

module.exports = {
  getAllFriends,
  getFriendByEmail,
  addFriend,
  updateFriend,
  deleteFriend,
};
