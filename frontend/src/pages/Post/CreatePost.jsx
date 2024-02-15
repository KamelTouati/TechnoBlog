import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useSelector, useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { createPost } from "../../redux/apiCalls/postApiCall";
import { RotatingLines } from "react-loader-spinner";
import { fetchCategories } from "../../redux/apiCalls/categoryApiCall";
import { Sidebar } from "../../components";
import { IoMdAddCircleOutline } from "react-icons/io";

const CreatePost = () => {
  const dispatch = useDispatch();
  const { loading, isPostCreated } = useSelector((state) => state.post);
  const { categories } = useSelector((state) => state.category);

  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");
  const [file, setFile] = useState(null);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Post Title is required");
    if (category.trim() === "") return toast.error("Post Category is required");
    if (description.trim() === "")
      return toast.error("Post Description is required");
    if (!file) return toast.error("Post Image is required");

    const formData = new FormData();
    formData.append("image", file);
    formData.append("title", title);
    formData.append("description", description);
    formData.append("category", category);

    dispatch(createPost(formData));
  };

  const navigate = useNavigate();
  useEffect(() => {
    if (isPostCreated) {
      navigate("/");
    }
  }, [isPostCreated, navigate]);

  useEffect(() => {
    dispatch(fetchCategories());
  }, []);

  return (
    <div className="bg-bgColor flex">
      <Sidebar />
      <div class="p-4 w-full">
        <section>
          <h1>Create New Post</h1>
          <form onSubmit={formSubmitHandler}>
            <input
              type="text"
              placeholder="Post Title"
              className="inputStyle bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-[4.7px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
            />
            <select
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="inputStyle bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-[4.7px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            >
              <option disabled value="">
                Select A Category
              </option>
              {categories.map((category) => (
                <option key={category._id} value={category.title}>
                  {category.title}
                </option>
              ))}
            </select>
            <textarea
              rows="5"
              className="inputStyle bg-gray-50 mb-6 border border-gray-300 text-gray-900 text-sm rounded-[4.7px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
              placeholder="Post Description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
            ></textarea>
            <input
              type="file"
              name="file"
              id="file"
              className="mb-6"
              onChange={(e) => setFile(e.target.files[0])}
            />
            <button
              type="submit"
              className="flex items-center gap-2 text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 me-2 mb-2 focus:outline-none"
            >
              {loading ? (
                <RotatingLines
                  strokeColor="white"
                  strokeWidth="5"
                  animationDuration="0.75"
                  width="40"
                  visible={true}
                />
              ) : (
                <>
                  Create post
                  <div className="bg-color2 rounded-[4.7px] p-1">
                    <IoMdAddCircleOutline />
                  </div>
                </>
              )}
            </button>
          </form>
        </section>
      </div>
    </div>
  );
};

export default CreatePost;
