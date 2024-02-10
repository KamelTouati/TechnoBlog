import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { toast } from "react-toastify";
import { FaUser } from "react-icons/fa";
import { registerUser } from "../../redux/apiCalls/authApiCall";
import swal from "sweetalert";

const Signup = () => {
  const dispatch = useDispatch();
  const { registerMessage } = useSelector((state) => state.auth);

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (username.trim() === "") return toast.error("Username is required");
    if (email.trim() === "") return toast.error("Email is required");
    if (password.trim() === "") return toast.error("Password is required");

    dispatch(registerUser({ username, email, password }));
  };

  const navigate = useNavigate();

  if (registerMessage) {
    swal({
      title: registerMessage,
      icon: "success",
    }).then((isOk) => {
      if (isOk) {
        navigate("/login");
      }
    });
  }

  return (
    <div className="bg-bgColor">
      <div class="flex justify-around items-around relative">
        <div>
          <h1 className="text-3xl bg-gradient-to-r from-purple-600 to-blue-500 py-10 text-transparent bg-clip-text">
            Join Us Today: Create Your Account
          </h1>
          <form onSubmit={formSubmitHandler}>
            <div className="mb-6">
              <label
                htmlFor="username"
                className="block mb-2 text-sm font-medium text-gray-900 dark:text-white"
              >
                Your username
              </label>
              <input
                type="text"
                id="username"
                className="inputStyle bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-[4.7px] focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                placeholder="username"
                value={username}
                name="username"
                onChange={(e) => setUsername(e.target.value)}
                required
              />
            </div>
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
              Register
            </button>
          </form>
          <p className="py-2">
            If you already have an account, log in
            <Link to="/login">
              <span className="ml-2 bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text">
                here
              </span>
            </Link>
          </p>
          <p className="py-2 mb-6">
            Forgot you password ?
            <Link to="/forgot-password">
              <span className="bg-gradient-to-r from-purple-600 to-blue-500 text-transparent bg-clip-text px-1">
                {" "}
                Frogot Password
              </span>
            </Link>
          </p>
        </div>
        <div>
          <img className="w-[500px]" src="/assets/illustration2.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Signup;
