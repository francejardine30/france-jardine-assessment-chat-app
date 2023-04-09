const express = require("express");
const {
  accessChat,
  fetchChat,
  createGroupChat,
  updateGroupChat,
  addToGroupChat,
  removeFromGroupChat,
} = require("../controllers/chatControllers");

const { protect } = require("../middleware/authMiddleware");

const router = express.Router();

router.route("/").post(protect, accessChat).get(protect, fetchChat);

router.route("/group-chat").post(protect, createGroupChat);
router.route("/update-group-chat").put(protect, updateGroupChat);

router.route("/add-user-to-group-chat").put(protect, addToGroupChat);
router.route("/remove-user-from-group-chat").put(protect, removeFromGroupChat);

module.exports = router;
