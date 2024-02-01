const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const {
  registerUser,
} = require("../controllers/userController");

router.post("/register", registerUser);

module.exports = router;
