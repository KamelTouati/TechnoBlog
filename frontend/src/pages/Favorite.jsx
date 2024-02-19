import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getPostsCount } from "../redux/apiCalls/postApiCall";
import { Sidebar, Pagination, PostCard } from "../components";

const Post_PER_PAGE = 3;

const Favorite = () => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const { postsCount, posts } = useSelector((state) => state.post);

  const [currentPage, setCurrentPage] = useState(1);
  const pages = Math.ceil(postsCount / Post_PER_PAGE);

  useEffect(() => {
    dispatch(fetchPosts(currentPage));
    window.scrollTo(0, 0);
  }, [currentPage]);

  useEffect(() => {
    dispatch(getPostsCount());
  }, []);

  return (
    <div className="bg-bgColor flex sm:flex-row flex-col">
      <Sidebar />
      <div className="w-full">
        <div class="p-4">
          {posts.map((post) =>
            post?.likes.map((userId) =>
              userId === user?._id ? (
                <PostCard key={post._id} post={post} />
              ) : (
                ""
              )
            )
          )}
        </div>
        <Pagination
          pages={pages}
          currentPage={currentPage}
          setCurrentPage={setCurrentPage}
        />
      </div>
    </div>
  );
};

export default Favorite;
