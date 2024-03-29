const router = require("express").Router();
const {
  getAllUsers,
  getUserProfile,
  updateUserProfile,
  getUsersCount,
  profilePhotoUpload,
  deleteUserProfile,
} = require("../controllers/usersController");
const {
  verifyToken,
  verifyTokenAndAdmin,
  verifyTokenAndOnlyUser,
  verifyTokenAndAuthorization,
} = require("../middlewares/verifyToken");
const validateObjectId = require("../middlewares/validateObjectId");
const photoUpload = require("../middlewares/photoUpload");

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
  .put(validateObjectId, verifyTokenAndOnlyUser, updateUserProfile)
  .delete(validateObjectId, verifyTokenAndAuthorization, deleteUserProfile);

module.exports = router;
