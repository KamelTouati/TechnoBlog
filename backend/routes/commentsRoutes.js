const router = require("express").Router();
const {
  createComment,
  getAllComments,
  deleteComment,
} = require("../controllers/commentsController");
const {
  verifyToken,
  verifyTokenAndAdmin,
} = require("../middlewares/verifyToken");
const validateObjectId = require("../middlewares/validateObjectId");

// /api/comments
router
  .route("/")
  .post(verifyToken, createComment)
  .get(verifyTokenAndAdmin, getAllComments);

// /api/comments/:id
router.route("/:id").delete(validateObjectId, verifyToken, deleteComment);
