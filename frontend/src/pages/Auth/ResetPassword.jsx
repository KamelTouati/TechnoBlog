import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useParams } from "react-router-dom";
import {
  getResetPassword,
  resetPassword,
} from "../../redux/apiCalls/passwordApiCall";

const ResetPassword = () => {
  const dispatch = useDispatch();
  const { isError } = useSelector((state) => state.password);

  const [password, setPassword] = useState("");

  const { userId, token } = useParams();

  useEffect(() => {
    dispatch(getResetPassword(userId, token));
  }, [userId, token]);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (password.trim() === "") return toast.error("Password is required");

    dispatch(resetPassword(password, { userId, token }));
  };
  return (
    <div className="bg-bgColor">
      <div class="rounded-[2.5rem] flex justify-around items-around relative">
        {isError ? (
          <h1>Not Found</h1>
        ) : (
          <div>
            <h1 className="text-3xl bg-gradient-to-r from-purple-600 to-blue-500 py-10 text-transparent bg-clip-text">
              Reset your password
            </h1>
            <form onSubmit={formSubmitHandler}>
              <div className="mb-6">
                <label
                  htmlFor="password"
                  className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
                >
                  Your password
                </label>
                <input
                  type="password"
                  id="password"
                  className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4.7px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                  name="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  minLength="6"
                  required
                />
              </div>
              <button
                type="submit"
                class="text-white bg-color2 focus:ring-4 focus:outline-none focus:ring-[#4285F4]/50 font-medium rounded-[4.7px] text-sm px-5 py-2.5 text-center inline-flex items-center dark:focus:ring-[#4285F4]/55 me-2 mb-2"
              >
                Reset Password
              </button>
            </form>
          </div>
        )}
        <div>
          <img className="w-[500px]" src="/assets/illustration4.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ResetPassword;
