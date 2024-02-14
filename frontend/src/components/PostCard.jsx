import React from "react";
import { FaEye } from "react-icons/fa";
import { Link } from "react-router-dom";
import { FaRegHeart } from "react-icons/fa";

const PostCard = () => {
  return (
    <div class="flex flex-col items-center bg-color4 rounded-[4.7px] m-4 md:flex-row w-[98%]">
      <img
        class="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-s-lg"
        src="/assets/illustration.svg"
        alt=""
      />
      <div class="flex flex-col justify-between p-4 leading-normal">
        <h5 class="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          Noteworthy technology acquisitions 2021
        </h5>
        <p class="mb-3 font-normal text-gray-700 dark:text-gray-400">
          Here are the biggest enterprise technology acquisitions of 2021 so
          far, in reverse chronological order.
        </p>
        <div className="flex gap-2">
          <Link
            to="/"
            className="flex items-center gap-2 text-sm block p-1 md:text-white md:bg-color2 rounded-[4.7px] text-blue-700"
            aria-current="page"
          >
            <div className="bg-color3 rounded-[4.7px] p-1">
              <FaEye />
            </div>
          </Link>
          <Link
            to="/"
            className="flex items-center gap-2 text-sm block p-1 md:text-white md:bg-color2 rounded-[4.7px] text-blue-700"
            aria-current="page"
          >
            <div className="bg-color3 rounded-[4.7px] p-1">
              <FaRegHeart />
            </div>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default PostCard;
