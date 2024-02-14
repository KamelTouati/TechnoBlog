import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPosts, getPostsCount } from "../../redux/apiCalls/postApiCall";
import { Sidebar, Pagination, PostCard } from "../../components";

const Post_PER_PAGE = 3;

const Posts = () => {
  const dispatch = useDispatch();
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
    <div className="bg-bgColor">
      <Sidebar />
      {/* {posts.map((post) => (
        <PostCard key={post._id} post={post} />
      ))} */}
      <div class="p-4 sm:ml-64">
        <PostCard />
        <PostCard />
        <PostCard />
      </div>
      <Pagination
        pages={pages}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Posts;
