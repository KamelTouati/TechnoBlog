import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { createCategory } from "../../../redux/apiCalls/categoryApiCall";
import { IoMdAddCircleOutline } from "react-icons/io";

const AddCategoryForm = () => {
  const dispatch = useDispatch();
  const [title, setTitle] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (title.trim() === "") return toast.error("Category Title is required");

    dispatch(createCategory({ title }));
    setTitle("");
  };

  return (
    <div className="add-category">
      <h6 className="add-category-title">Add New Category</h6>
      <form onSubmit={formSubmitHandler}>
        <div className="add-category-form-group">
          <label htmlFor="title">Category Title</label>
          <input
            type="text"
            id="title"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4.7px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <button
          className="flex items-center gap-2 w-fit text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 me-2 mb-2 focus:outline-none"
          aria-current="page"
          type="submit"
        >
          Add category
          <div className="bg-color2 rounded-[4.7px] p-1">
            <IoMdAddCircleOutline />
          </div>
        </button>
      </form>
    </div>
  );
};

export default AddCategoryForm;
