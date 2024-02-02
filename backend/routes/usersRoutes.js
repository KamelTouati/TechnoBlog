const router = require("express").Router();
const {
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  getUsersCount,
  profilePhotoUpload,
} = require("../controllers/usersController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndOnlyUser,
} = require("../middlewares/verifyToken");
const validateObjectId = require("../middlewares/validateObjectId");

// /api/users/profile
router.route("/profile").get(verifyTokenAndAdmin, getAllUsers);
router.route("/count").get(verifyTokenAndAdmin, getUsersCount);

// /api/users/profile/profile-photo-upload
router
  .route("/profile/profile-photo-upload")
  .post(verifyToken, photoUpload.single("image"), profilePhotoUpload);
// /api/users/profile/:id
router
  .route("/profile/:id")
  .get(validateObjectId, getUserProfile)
  .put(validateObjectId, verifyTokenAndOnlyUser, updateUserProfile);

module.exports = router;
