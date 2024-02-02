const router = require("express").Router();
const { getAllUsers } = require("../controllers/usersController");
const {
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middleware/verifyToken");
// /api/users/profile
router.route("/profile").get(verifyTokenAndAdmin, getAllUsers);

module.exports = router;
