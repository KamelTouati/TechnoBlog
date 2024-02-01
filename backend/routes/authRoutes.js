const express = require("express");
const router = express.Router();
const { protect } = require("../middleware/authMiddleware");
const { registerUser, loginUser } = require("../controllers/authControllers");

router.post("/register", registerUser);
router.post("/login", loginUser);

module.exports = router;
