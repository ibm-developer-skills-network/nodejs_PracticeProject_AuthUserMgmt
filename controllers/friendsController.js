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
  res.send(JSON.stringify(friends, null, 4));
};

// GET by specific ID request: Retrieve a single friend with email ID
let getFriendByEmail = (req, res) => {
  const email = req.params.email;
  const friend = friends[email];
  if (friend) {
    res.json(JSON.stringify(friend, null, 4));
  } else {
    res.status(404).send("Friend not found");
  }
};

// POST request: Add a new friend
let addFriend = (req, res) => {
  const email = req.body.email;
  const friend = req.body.friend;
  if (!email || !friend) {
    res.status(400).send("Please provide both email and friend in request body");
  } else if (!isValidFriend(friend)) {
    res.status(400).send("Invalid friend object. Please provide a valid friend object with firstName, lastName, and DOB");
  } else if (friends[email]) {
    res.status(409).send("Friend with this email already exists");
  } else {
    friends[email] = friend;
    res.status(201).send("Friend added successfully");
  }
};

// PUT request: Update the details of a friend with email id
let updateFriend = (req, res) => {
  const email = req.params.email;
  const friend = req.body.friend;
  if (!email || !friend) {
    res.status(400).send("Please provide both email and friend in request body");
  } else if (!isValidFriend(friend)) {
    res.status(400).send("Invalid friend object. Please provide a valid friend object with firstName, lastName, and DOB");
  } else if (!friends[email]) {
    res.status(404).send("Friend not found");
  } else {
    friends[email] = friend;
    res.send("Friend updated successfully");
  }
};

// DELETE request: Delete a friend by email id
let deleteFriend = (req, res) => {
  const email = req.params.email;
  if (friends[email]) {
    delete friends[email];
    res.send("Friend deleted successfully");
  } else {
    res.status(404).send("Friend not found");
  }
};

// Helper function to validate friend object
function isValidFriend(friend) {
  if (!friend.firstName || !friend.lastName || !friend.DOB) {
    return false;
  }
  return true;
}

module.exports = {
  getAllFriends,
  getFriendByEmail,
  addFriend,
  updateFriend,
  deleteFriend,
};
