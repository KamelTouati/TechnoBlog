import React, { useState } from "react";
import { forgotPassword } from "../../redux/apiCalls/passwordApiCall";
import { useDispatch } from "react-redux";
import { toast } from "react-toastify";

const ForgotPassword = () => {
  const dispatch = useDispatch();

  const [email, setEmail] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (email.trim() === "") return toast.error("Email is required");

    dispatch(forgotPassword(email));
  };
  return (
    <div className="bg-bgColor">
      <div class="rounded-[2.5rem] flex justify-around items-around relative">
        <div>
          <h1 className="text-3xl font-medium bg-gradient-to-r from-purple-600 to-blue-500 py-10 text-transparent bg-clip-text">
            Forgot your password
          </h1>
          <form onSubmit={formSubmitHandler}>
            <div className="mb-2">
              <label
                htmlFor="email"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your email
              </label>
              <input
                type="email"
                id="email"
                className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4.7px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="name@domaine.com"
                value={email}
                name="email"
                onChange={(e) => setEmail(e.target.value)}
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
        <div>
          <img className="w-[500px]" src="/assets/illustration3.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default ForgotPassword;
