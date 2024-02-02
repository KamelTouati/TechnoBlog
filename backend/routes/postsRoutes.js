const router = require("express").Router();
const {
  createPost,
  getAllPosts,
  getSinglePost,
  getPostCount,
} = require("../controllers/postsController");
const photoUpload = require("../middlewares/photoUpload");
const { verifyToken } = require("../middlewares/verifyToken");

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
module.exports = router;
