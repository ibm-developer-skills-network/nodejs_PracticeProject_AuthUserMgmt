const friends = require("../models/friend");

// GET request: Retrieve all friends
let getAllFriends = (req, res) => {
  res.status(200).send(friends.getAllFriends());
};

// GET by specific ID request: Retrieve a single friend with email ID
let getFriendByEmail = (req, res) => {
  const email = req.params.email;
  const friend = friends.getFriend(email);
  if (friend) {
    res.status(200).json(friend);
  } else {
    res.status(404).send("Friend not found");
  }
};

// POST request: Add a new friend
let addFriend = (req, res) => {
  const email = req.body.email;
  const friend = req.body.friend;
  if (!email || !friend) {
    res
      .status(400)
      .send("Please provide both email and friend in request body");
  } else if (!isValidFriend(friend)) {
    res
      .status(400)
      .send(
        "Invalid friend object. Please provide a valid friend object with firstName, lastName, and DOB"
      );
  } else if (friends.getFriend(email)) {
    res.status(409).send("Friend with this email already exists");
  } else {
    friends.addFriend(email, friend);
    res
      .status(201)
      .send("The user" + " " + req.body.firstName + " Has been added!");
  }
};

// PUT request: Update the details of a friend with email id
let updateFriend = (req, res) => {
  const email = req.params.email;
  const friend = req.body.friend;
  if (!email || !friend) {
    res
      .status(400)
      .send("Please provide both email and friend in request body");
  } else if (!isValidFriend(friend)) {
    res
      .status(400)
      .send(
        "Invalid friend object. Please provide a valid friend object with firstName, lastName, and DOB"
      );
  } else if (!friends.getFriend(email)) {
    res.status(404).send("Friend not found");
  } else {
    friends.updateFriend(email, friend);
    res.status(200).send(`Friend with the email  ${email} updated.`);
  }
};

// DELETE request: Delete a friend by email id
let deleteFriend = (req, res) => {
  const email = req.params.email;
  if (friends.getFriend(email)) {
    friends.deleteFriend(email);
    res.status(200).send(`Friend with the email  ${email} deleted.`);
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
