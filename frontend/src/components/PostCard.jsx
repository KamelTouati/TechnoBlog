import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegHeart, FaHeart } from "react-icons/fa";
import { toggleLikePost } from "../redux/apiCalls/postApiCall";
import { useDispatch, useSelector } from "react-redux";

const PostCard = ({ post }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);
  return (
    <div class="flex flex-col items-start bg-color4 rounded-[4.7px] m-2 md:flex-row w-[98%] p-4">
      <img
        class="object-cover w-full rounded-[4.7px] h-96 md:h-auto md:w-48"
        src={post?.image.url}
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normalrelative ">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {post?.title}
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400 truncate w-[200px] md:w-[350px] lg:w-[400px]">
          {post?.description}
        </p>
        <p>{post?.user.username}</p>
        <span>{new Date(post?.createdAt).toDateString()}</span>
        <div className="flex gap-2">
          <Link
            to={`/posts/details/${post?._id}`}
            className="flex items-center gap-2 text-sm block p-1 md:text-white md:bg-color2 rounded-[4.7px] text-blue-700"
            aria-current="page"
          >
            <div className="bg-color3 rounded-[4.7px] p-1">
              <FaEye />
            </div>
          </Link>
          {user && (
            <div
              onClick={() => dispatch(toggleLikePost(post?._id))}
              className="flex items-center gap-2 text-sm cursor-pointer block p-1 md:text-white md:bg-color2 rounded-[4.7px] text-blue-700"
            >
              <div className="bg-color3 rounded-[4.7px] p-1">
                {post?.likes.includes(user?._id) ? <FaHeart /> : <FaRegHeart />}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PostCard;
