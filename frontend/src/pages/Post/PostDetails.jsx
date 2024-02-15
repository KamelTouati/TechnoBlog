import { useEffect, useState } from "react";
import { Link, useParams, useNavigate } from "react-router-dom";
import "./post-details.css";
import { toast } from "react-toastify";
import AddComment from "../../components/comments/AddComment";
import CommentList from "../../components/comments/CommentList";
import swal from "sweetalert";
import UpdatePostModal from "./UpdatePostModal";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePost,
  fetchSinglePost,
  toggleLikePost,
  updatePostImage,
} from "../../redux/apiCalls/postApiCall";
import { FaRegHeart, FaHeart } from "react-icons/fa";

const PostDetails = () => {
  const dispatch = useDispatch();
  const { post } = useSelector((state) => state.post);
  const { user } = useSelector((state) => state.auth);

  const { id } = useParams();

  const [file, setFile] = useState(null);
  const [updatePost, setUpdatePost] = useState(false);

  useEffect(() => {
    window.scrollTo(0, 0);
    dispatch(fetchSinglePost(id));
  }, [id]);

  // Update Image Submit Handler
  const updateImageSubmitHandler = (e) => {
    e.preventDefault();
    if (!file) return toast.warning("there is no file!");

    const formData = new FormData();
    formData.append("image", file);
    dispatch(updatePostImage(formData, post?._id));
  };

  const navigate = useNavigate();

  // Delete Post Handler
  const deletePostHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this post!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dispatch(deletePost(post?._id));
        navigate(`/profile/${user?._id}`);
      }
    });
  };

  return (
    <div className="bg-bgColor">
      <section className="post-details">
        <div className="post-details-image-wrapper">
          <img
            src={file ? URL.createObjectURL(file) : post?.image.url}
            alt=""
            className="post-details-image"
          />
          {user?._id === post?.user?._id && (
            <form
              onSubmit={updateImageSubmitHandler}
              className="update-post-image-form"
            >
              <label htmlFor="file" className="update-post-label">
                <i className="bi bi-image-fill"></i>
                Select new image
              </label>
              <input
                style={{ display: "none" }}
                type="file"
                name="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button type="submit">upload</button>
            </form>
          )}
        </div>
        <h1 className="post-details-title">{post?.title}</h1>
        <div className="post-details-user-info">
          <img
            src={post?.user.profilePhoto?.url}
            alt=""
            className="post-details-user-image"
          />
          <div className="post-details-user">
            <strong>
              <Link to={`/profile/${post?.user._id}`}>
                {post?.user.username}
              </Link>
            </strong>
            <span>{new Date(post?.createdAt).toDateString()}</span>
          </div>
        </div>
        <p className="post-details-description">{post?.description}</p>
        <div className="post-details-icon-wrapper">
          <div className="flex items-center gap-2">
            {user && (
              <div
                onClick={() => dispatch(toggleLikePost(post?._id))}
                className="w-fit text-sm cursor-pointer block p-1 md:text-white md:bg-color2 rounded-[4.7px] text-blue-700"
              >
                <div className="w-fit bg-color3 rounded-[4.7px] p-1">
                  {post?.likes.includes(user?._id) ? (
                    <FaHeart />
                  ) : (
                    <FaRegHeart />
                  )}
                </div>
              </div>
            )}
            <small>{post?.likes.length} likes</small>
          </div>
          {user?._id === post?.user?._id && (
            <div>
              <i
                onClick={() => setUpdatePost(true)}
                className="bi bi-pencil-square"
              ></i>
              <i onClick={deletePostHandler} className="bi bi-trash-fill"></i>
            </div>
          )}
        </div>
        {user ? (
          <AddComment postId={post?._id} />
        ) : (
          <p className="post-details-info-write">
            to write a comment you should login first
          </p>
        )}

        <CommentList comments={post?.comments} />
        {updatePost && (
          <UpdatePostModal post={post} setUpdatePost={setUpdatePost} />
        )}
      </section>
    </div>
  );
};

export default PostDetails;
