import swal from "sweetalert";
import { useState } from "react";
import UpdateCommentModal from "./UpdateCommentModal";
// import Moment from "react-moment";
import { useDispatch, useSelector } from "react-redux";
import { deleteComment } from "../../redux/apiCalls/commentApiCall";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FaUserAlt } from "react-icons/fa";

const CommentList = ({ comments }) => {
  const dispatch = useDispatch();
  const { user } = useSelector((state) => state.auth);

  const [updateComment, setUpdateComment] = useState(false);
  const [commentForUpdate, setCommentForUpdate] = useState(null);

  // Update Comment Handler
  const updateCommentHandler = (comment) => {
    setCommentForUpdate(comment);
    setUpdateComment(true);
  };

  // Delete Comment Handler
  const deleteCommentHandler = (commentId) => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover this comment!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dispatch(deleteComment(commentId));
      }
    });
  };

  return (
    <div>
      <h1 className="text-xl font-bold text-color3 py-2">
        Post reviews {comments?.length}
      </h1>
      <div className="flex flex-col">
        {comments?.map((comment) => (
          <div
            key={comment._id}
            class="w-full rounded-[4.7px] borderStyle p-1 border border-gray-300"
          >
            <div class="flex flex-col w-full rounded-[4.7px] bg-white">
              <div class=" w-full rounded-[4.7px] flex flex-col justify-center relative p-5">
                <div className="flex gap-1 items-center text-color3 font-bold">
                  <FaUserAlt />
                  <h1>{comment?.username}</h1>
                </div>
                {comment?.text}
              </div>
              {user?._id === comment.user && (
                <div className="flex justify-end gap-4 my-4">
                  <div
                    onClick={() => updateCommentHandler(comment)}
                    className="w-fit text-sm cursor-pointer block p-1 md:text-white md:bg-color2 rounded-[4.7px] text-blue-700"
                  >
                    <div className="w-fit bg-color3 rounded-[4.7px] p-1">
                      <MdModeEdit />
                    </div>
                  </div>
                  <div
                    onClick={() => deleteCommentHandler(comment?._id)}
                    className="w-fit text-sm cursor-pointer block p-1 md:text-white md:bg-color2 rounded-[4.7px] text-blue-700"
                  >
                    <div className="w-fit bg-color3 rounded-[4.7px] p-1">
                      <MdDelete />
                    </div>
                  </div>
                </div>
              )}
              {updateComment && (
                <UpdateCommentModal
                  commentForUpdate={commentForUpdate}
                  setUpdateComment={setUpdateComment}
                />
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CommentList;
