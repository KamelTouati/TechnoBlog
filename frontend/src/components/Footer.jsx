import React from "react";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";

export default function Footer() {
  return (
    <footer class="bg-color1 rounded-t-[4.7px]">
      <div class="mx-auto w-full max-w-screen-xl p-4 py-6 lg:py-8">
        <div class="md:flex md:justify-between">
          <div class="mb-6 md:mb-0">
            <a href="/" class="flex items-center">
              {/* <img src={logo1} class="h-8 me-3" alt="Logo" /> */}
            </a>
          </div>
          <div class="grid grid-cols-2 gap-8 sm:gap-6 sm:grid-cols-3">
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Follow us
              </h2>
              <ul class="flex gap-4 text-color4 font-medium">
                <li className="bg-white rounded-[4.7px] p-2">
                  <a href="#" class="hover:underline">
                    <FaFacebookF className="text-color2" />
                  </a>
                </li>
                <li className="bg-white rounded-[4.7px] p-2">
                  <a href="#" class="hover:underline">
                    <FaInstagram className="text-color2" />
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h2 class="mb-6 text-sm font-semibold text-gray-900 uppercase dark:text-white">
                Legal
              </h2>
              <ul class="text-white font-medium">
                <li class="mb-4">
                  <a href="#" class="hover:underline">
                    Privacy Policy
                  </a>
                </li>
                <li>
                  <a href="#" class="hover:underline">
                    Terms &amp; Conditions
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
        <hr class="my-6 border-gray-200 sm:mx-auto lg:my-8" />
        <div class="sm:flex sm:items-center sm:justify-center">
          <span class="text-sm text-white sm:text-center">
            © 2024{" "}
            <a href="/" class="hover:underline">
              TechnoBlog
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </div>
    </footer>
  );
}
