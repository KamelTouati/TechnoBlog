const router = require("express").Router();
const { createPost } = require("../controllers/postsController");
const photoUpload = require("../middlewares/photoUpload");
const { verifyToken } = require("../middlewares/verifyToken");

// /api/posts
router.route("/").post(verifyToken, photoUpload.single("image"), createPost);

module.exports = router;
