import React, { Fragment, useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { CiUser } from "react-icons/ci";
import { useSelector, useDispatch } from "react-redux";
import { logoutUser } from "../redux/apiCalls/authApiCall";
import { IoLogInOutline } from "react-icons/io5";
import { BsPostcard } from "react-icons/bs";
import { IoMdAddCircleOutline } from "react-icons/io";
import { FaRegHeart } from "react-icons/fa";
import { CiSettings } from "react-icons/ci";

const Navbar = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  // Logout Handler
  const logoutHandler = () => {
    dispatch(logoutUser());
  };
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isUserMenuOpen, setIsUserMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const toggleUserMenu = () => {
    setIsUserMenuOpen(!isUserMenuOpen);
  };

  const { user } = useSelector((state) => state.auth);

  const guestLinks = () => (
    <Fragment>
      <li>
        <Link
          to="/login"
          className="flex items-center gap-2 text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 me-2 mb-2 focus:outline-none"
          aria-current="page"
        >
          Login
          <div className="bg-color2 rounded-[4.7px] p-1">
            <IoLogInOutline />
          </div>
        </Link>
      </li>
    </Fragment>
  );
  const customerUserLinks = () => (
    <Fragment>
      <li>
        <Link
          to="/posts"
          className="flex items-center gap-2 text-color2 bg-color4 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 focus:outline-none"
          aria-current="page"
        >
          Posts
          <div className="bg-color2 rounded-[4.7px] p-1">
            <BsPostcard className="text-white" />
          </div>
        </Link>
      </li>
      <li>
        <Link
          to="/posts/create-post"
          className="flex items-center gap-2 text-color2 bg-color4 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 focus:outline-none"
          aria-current="page"
        >
          Create Post
          <div className="bg-color2 rounded-[4.7px] p-1">
            <IoMdAddCircleOutline className="text-white" />
          </div>
        </Link>
      </li>
      <li>
        <Link
          to="/posts/favorite-posts"
          className="flex items-center gap-2 text-color2 bg-color4 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 focus:outline-none"
          aria-current="page"
        >
          Favorite Posts
          <div className="bg-color2 rounded-[4.7px] p-1">
            <FaRegHeart className="text-white" />
          </div>
        </Link>
      </li>
      <li>
        <div className="relative block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0">
          <button
            onClick={toggleUserMenu}
            aria-expanded={isUserMenuOpen}
            type="button"
            className="flex text-sm md:me-0"
            id="user-menu-button"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-[30px] h-full rounded-[4.7px]"
              src={user.profilePhoto.url}
              alt=""
            />
          </button>
          <div
            className={`absolute md:right-0 z-50 my-4 text-base list-none bg-bgColor divide-y divide-gray-100 rounded-[4.7px] shadow ${
              isUserMenuOpen ? "block" : "hidden"
            }`}
            id="user-dropdown"
          >
            <div className="py-3">
              <span className="block text-sm text-gray-900">
                <Link
                  to={`/profile/${user?._id}`}
                  className="flex items-center gap-2 text-sm block py-2 pl-3 pr-4
                        rounded-[4.7px] text-blue-700
                        "
                >
                  {user?.username}
                  <div className="bg-color2 rounded-[4.7px] p-1">
                    <CiSettings className="text-white" />
                  </div>
                </Link>
              </span>
            </div>

            <ul className="py-2">
              <li>
                <Link
                  onClick={logoutHandler}
                  to="/"
                  className="flex items-center gap-2 text-sm block py-2 pl-3 pr-4 md:m-2 md:text-white md:bg-color2 rounded-[4.7px] text-blue-700"
                  aria-current="page"
                >
                  Logout
                  <div className="bg-color3 rounded-[4.7px] p-1">
                    <IoLogInOutline />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </Fragment>
  );
  const adminUserLinks = () => (
    <Fragment>
      <li>
        <Link
          to="/posts"
          className="flex items-center gap-2 text-color2 bg-color4 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 focus:outline-none"
          aria-current="page"
        >
          Posts
          <div className="bg-color2 rounded-[4.7px] p-1">
            <BsPostcard className="text-white" />
          </div>
        </Link>
      </li>
      <li>
        <Link
          to="/posts/create-post"
          className="flex items-center gap-2 text-color2 bg-color4 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 focus:outline-none"
          aria-current="page"
        >
          Create Post
          <div className="bg-color2 rounded-[4.7px] p-1">
            <IoMdAddCircleOutline className="text-white" />
          </div>
        </Link>
      </li>
      <li>
        <Link
          to="/posts/favorite-posts"
          className="flex items-center gap-2 text-color2 bg-color4 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 focus:outline-none"
          aria-current="page"
        >
          Favorite Posts
          <div className="bg-color2 rounded-[4.7px] p-1">
            <FaRegHeart className="text-white" />
          </div>
        </Link>
      </li>
      <li>
        <Link
          to="/admin-dashboard"
          className="flex items-center gap-2 text-color2 bg-color4 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 focus:outline-none"
          aria-current="page"
        >
          Admin Dashboard
          <div className="bg-color2 rounded-[4.7px] p-1">
            <FaRegHeart className="text-white" />
          </div>
        </Link>
      </li>
      <li>
        <div className="relative block py-2 pl-3 pr-4 text-black rounded md:bg-transparent md:p-0">
          <button
            onClick={toggleUserMenu}
            aria-expanded={isUserMenuOpen}
            type="button"
            className="flex text-sm md:me-0"
            id="user-menu-button"
            data-dropdown-toggle="user-dropdown"
            data-dropdown-placement="bottom"
          >
            <span className="sr-only">Open user menu</span>
            <img
              className="w-[30px] h-full rounded-[4.7px]"
              src={user.profilePhoto.url}
              alt=""
            />
          </button>
          <div
            className={`absolute md:right-0 z-50 my-4 text-base list-none bg-bgColor divide-y divide-gray-100 rounded-[4.7px] shadow ${
              isUserMenuOpen ? "block" : "hidden"
            }`}
            id="user-dropdown"
          >
            <div className="py-3">
              <span className="block text-sm text-gray-900">
                <Link
                  to={`/profile/${user?._id}`}
                  className="flex items-center gap-2 text-sm block py-2 pl-3 pr-4
                        rounded-[4.7px] text-blue-700
                        "
                >
                  {user?.username}
                  <div className="bg-color2 rounded-[4.7px] p-1">
                    <CiSettings className="text-white" />
                  </div>
                </Link>
              </span>
            </div>

            <ul className="py-2">
              <li>
                <Link
                  onClick={logoutHandler}
                  to="/"
                  className="flex items-center gap-2 text-sm block py-2 pl-3 pr-4 md:m-2 md:text-white md:bg-color2 rounded-[4.7px] text-blue-700"
                  aria-current="page"
                >
                  Logout
                  <div className="bg-color3 rounded-[4.7px] p-1">
                    <IoLogInOutline />
                  </div>
                </Link>
              </li>
            </ul>
          </div>
        </div>
      </li>
    </Fragment>
  );
  return (
    <nav className="bg-bgColor border-gray-200 relative z-10">
      <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
        <Link to="/" className="flex items-center">
          {/* <img src={logo} className="h-8 mr-3" alt="Logo" /> */}
          <span className="self-center text-2xl font-semibold whitespace-nowrap dark:text-white">
            TechnoBlog
          </span>
        </Link>
        <button
          onClick={toggleMenu}
          aria-controls="navbar-default"
          aria-expanded={isMenuOpen}
          data-collapse-toggle="navbar-default"
          type="button"
          className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-gray-500 rounded-lg md:hidden hover:bg-gray-100 focus:outline-none focus:ring-2 focus:ring-gray-200 dark:text-gray-400 dark:hover:bg-gray-700 dark:focus:ring-gray-600"
        >
          <span className="sr-only">Open main menu</span>
          <svg
            className="w-5 h-5"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 17 14"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M1 1h15M1 7h15M1 13h15"
            />
          </svg>
        </button>
        <div
          className={`w-full md:block md:w-auto ${
            isMenuOpen ? "block" : "hidden"
          }`}
          id="navbar-default"
        >
          <ul className="flex flex-col md:items-center justify-center p-4 md:p-0 mt-4 border border-gray-100 bg-gray-50 md:flex-row md:text-black font-bold  md:space-x-8 md:mt-0 md:border-0 md:bg-bgColor dark:bg-gray-800 md:dark:bg-gray-900 dark:border-gray-700 ">
            {user ? (
              user.isAdmin ? (
                <>
                  <li>
                    <Link
                      to="/posts"
                      className="flex items-center gap-2 text-white bg-color3 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 me-2 mb-2 focus:outline-none"
                      aria-current="page"
                    >
                      Posts
                      <div className="bg-color2 rounded-[4.7px] p-1">
                        <BsPostcard />
                      </div>
                    </Link>
                  </li>
                </>
              ) : (
                ""
              )
            ) : (
              <>
                <li>
                  <Link
                    to="/posts"
                    className="flex items-center gap-2 text-color2 bg-color4 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 me-2 mb-2 focus:outline-none"
                    aria-current="page"
                  >
                    Posts
                    <div className="bg-color2 rounded-[4.7px] p-1">
                      <BsPostcard className="text-white" />
                    </div>
                  </Link>
                </li>
              </>
            )}
            {/* {user ? "" : guestLinks()} */}

            {user
              ? user.isAdmin
                ? adminUserLinks()
                : customerUserLinks()
              : guestLinks()}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
