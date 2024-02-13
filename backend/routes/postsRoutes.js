const router = require("express").Router();
const {
  createPost,
  getAllPosts,
  getSinglePost,
  getPostCount,
  deletePost,
  updatePost,
  updatePostImage,
  toggleLike,
} = require("../controllers/postsController");
const photoUpload = require("../middlewares/photoUpload");
const { verifyToken } = require("../middlewares/verifyToken");
const validateObjectId = require("../middlewares/validateObjectId");

// /api/posts
router
  .route("/")
  .post(verifyToken, photoUpload.single("image"), createPost)
  .get(getAllPosts);

// /api/posts/count
router.route("/count").get(getPostCount);

// /api/posts/:id
router
  .route("/:id")
  .get(validateObjectId, getSinglePost)
  .delete(validateObjectId, verifyToken, deletePost)
  .put(validateObjectId, verifyToken, updatePost);

// /api/posts/update-image/:id
router
  .route("/update-image/:id")
  .put(
    validateObjectId,
    verifyToken,
    photoUpload.single("image"),
    updatePostImage
  );

// /api/posts/like/:id
router.route("/like/:id").put(validateObjectId, verifyToken, toggleLike);

module.exports = router;
