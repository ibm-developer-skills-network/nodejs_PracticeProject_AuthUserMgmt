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
  if (email && friend) {
    if (friends[email]) {
      res.status(409).send("Friend with this email already exists");
    } else {
      friends[email] = friend;
      res.status(201).send("Friend added successfully");
    }
  } else {
    res.status(400).send("Bad request");
  }
};

// PUT request: Update the details of a friend with email id
let updateFriend = (req, res) => {
  const email = req.params.email;
  const friend = req.body.friend;
  if (email && friend) {
    if (friends[email]) {
      friends[email] = friend;
      res.send("Friend updated successfully");
    } else {
      res.status(404).send("Friend not found");
    }
  } else {
    res.status(400).send("Bad request");
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

module.exports = {
  getAllFriends,
  getFriendByEmail,
  addFriend,
  updateFriend,
  deleteFriend,
};
