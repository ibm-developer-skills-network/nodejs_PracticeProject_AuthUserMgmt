const express = require("express");
const router = express.Router();
const friendsController = require("../controllers/friendsController");

// GET request: Retrieve all friends
router.get("/", friendsController.getAllFriends);

// GET by specific ID request: Retrieve a single friend with email ID
router.get("/:email", friendsController.getFriendByEmail);

// POST request: Add a new friend
router.post("/", friendsController.addFriend);

// PUT request: Update the details of a friend with email id
router.put("/:email", friendsController.updateFriend);

// DELETE request: Delete a friend by email id
router.delete("/:email", friendsController.deleteFriend);

module.exports = router;