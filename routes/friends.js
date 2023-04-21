const express = require("express");
const router = express.Router();

const {
  getAllFriends,
  getFriendByEmail,
  addFriend,
  updateFriend,
  deleteFriend,
} = require("../controllers/friendsController");

router.get("/", getAllFriends);
router.get("/:email", getFriendByEmail);
router.post("/", addFriend);
router.put("/:email", updateFriend);
router.delete("/:email", deleteFriend);

module.exports = router;
