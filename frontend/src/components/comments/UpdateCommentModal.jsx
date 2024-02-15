import { useState } from "react";
import { toast } from "react-toastify";
import { useDispatch } from "react-redux";
import { updateComment } from "../../redux/apiCalls/commentApiCall";
import "./UpdateCommentModal.css";
import { MdModeEdit } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

const UpdateCommentModal = ({ setUpdateComment, commentForUpdate }) => {
  const dispatch = useDispatch();

  const [text, setText] = useState(commentForUpdate?.text);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (text.trim() === "") return toast.error("Please write something");

    dispatch(updateComment(commentForUpdate?._id, { text }));
    setUpdateComment(false);
  };

  return (
    <div className="update-comment">
      <form onSubmit={formSubmitHandler} className="update-post-form">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium bg-gradient-to-r from-purple-600 to-blue-500 my-2 text-transparent bg-clip-text">
            Edit Comment
          </h1>
          <abbr
            title="close"
            className="flex items-center gap-2 w-fit cursor-pointer text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm p-1  focus:outline-none"
          >
            <div className="bg-color2 rounded-[4.7px] p-1">
              <IoIosCloseCircleOutline
                onClick={() => setUpdateComment(false)}
              />
            </div>
          </abbr>
        </div>
        <input
          type="text"
          className="update-comment-input"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
        <button
          type="submit"
          className="flex items-center gap-2 w-fit text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2  focus:outline-none"
        >
          Edit Comment
          <div className="bg-color2 rounded-[4.7px] p-1">
            <MdModeEdit />
          </div>
        </button>
      </form>
    </div>
  );
};

export default UpdateCommentModal;
