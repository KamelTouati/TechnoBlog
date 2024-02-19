import { useParams, Link } from "react-router-dom";
// import "./category.css";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchPostsBasedOnCategory } from "../../redux/apiCalls/postApiCall";
import { Sidebar, Pagination, PostCard } from "../../components";

// const Post_PER_PAGE = 3;

const Category = () => {
  const dispatch = useDispatch();
  const { postsCate } = useSelector((state) => state.post);

  const { category } = useParams();

  useEffect(() => {
    dispatch(fetchPostsBasedOnCategory(category));
    window.scrollTo(0, 0);
  }, [category]);

  return (
    <section className="category">
      <div className="bg-bgColor flex sm:flex-row flex-col">
        <Sidebar />
        <div className="w-full">
          {postsCate.length === 0 ? (
            <>
              <div
                class="flex items-center w-fit p-4 m-4 text-sm text-blue-800 rounded-lg bg-blue-50 dark:bg-gray-800 dark:text-blue-400"
                role="alert"
              >
                <svg
                  class="flex-shrink-0 inline w-4 h-4 me-3"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="currentColor"
                  viewBox="0 0 20 20"
                >
                  <path d="M10 .5a9.5 9.5 0 1 0 9.5 9.5A9.51 9.51 0 0 0 10 .5ZM9.5 4a1.5 1.5 0 1 1 0 3 1.5 1.5 0 0 1 0-3ZM12 15H8a1 1 0 0 1 0-2h1v-3H8a1 1 0 0 1 0-2h2a1 1 0 0 1 1 1v4h1a1 1 0 0 1 0 2Z" />
                </svg>
                <span class="sr-only">Info</span>
                <div>
                  <span class="font-medium">
                    Posts with <span>{category}</span> category not found
                  </span>
                </div>
              </div>
              {/* <Link to="/posts" className="category-not-found-link">
                Go to posts page
              </Link> */}
            </>
          ) : (
            <>
              <div class="p-4">
                {postsCate.map((post) => (
                  <PostCard key={post._id} post={post} />
                ))}
              </div>
              {/* <Pagination
                pages={postsCate}
                currentPage={currentPage}
                setCurrentPage={setCurrentPage}
              /> */}
            </>
          )}
        </div>
      </div>
    </section>
  );
};

export default Category;
