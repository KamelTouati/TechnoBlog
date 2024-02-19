import React from "react";
import { Link } from "react-router-dom";
import { BsPostcard } from "react-icons/bs";
import { IoLogInOutline } from "react-icons/io5";
import { useSelector } from "react-redux";
import { IoMdAddCircleOutline } from "react-icons/io";

const Landing = () => {
  const { user } = useSelector((state) => state.auth);

  return (
    <div className="bg-bgColor px-5 md:px-20 py-6 flex flex-col items-center">
      <div class="rounded-[2.5rem] flex md:flex-row flex-col justify-around items-around relative mb-6">
        <div className="md:w-[40%] w-full">
          <h1 className="text-4xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 py-4 text-transparent bg-clip-text">
            Welcome to TechnoBlog
            <br />
            Your Gateway to Tech Excellence
          </h1>
          <h1 className="text-black leading-8 font-medium">
            Are you ready to embark on a journey into the future of technology?
            Look no further than TechnoBlog – your one-stop destination for all
            things tech. Whether you're a seasoned developer, an aspiring AI
            enthusiast, or simply curious about the latest innovations,
            TechnoBlog is here to guide you.
          </h1>
          <div className="flex gap-4 items-center my-4">
            <Link
              to="/posts"
              className="flex items-center w-fit gap-2 text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 focus:outline-none"
              aria-current="page"
            >
              Explore posts
              <div className="bg-color2 rounded-[4.7px] p-1">
                <BsPostcard />
              </div>
            </Link>
            {!user ? (
              <>
                <h1>or</h1>
                <Link
                  to="/signup"
                  className="flex items-center gap-2 text-color2 bg-color4 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 focus:outline-none"
                  aria-current="page"
                >
                  Create an account
                  <div className="bg-color2 rounded-[4.7px] p-1">
                    <IoLogInOutline className="text-white" />
                  </div>
                </Link>
              </>
            ) : (
              <>
                <h1>or</h1>
                <Link
                  to="/posts/create-post"
                  className="flex items-center gap-2 text-color2 bg-color4 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 focus:outline-none"
                  aria-current="page"
                >
                  Create a new post
                  <div className="bg-color2 rounded-[4.7px] p-1">
                    <IoMdAddCircleOutline className="text-white" />
                  </div>
                </Link>
              </>
            )}
          </div>
        </div>
        <div>
          <img className="w-[600px]" src="/assets/illustration8.svg" alt="" />
        </div>
      </div>
      {/*  */}
      <div
        className="w-[20px] h-[20px] rotate-45 flex items-center gap-2 text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-1 py-1 me-2 mb-2 focus:outline-none"
        aria-current="page"
      >
        <div className="bg-color2 rounded-[4.7px] p-1 h-full w-full"></div>
      </div>
      {/*  */}
      <div class="rounded-[2.5rem] flex md:flex-row flex-col justify-around items-around relative mb-6">
        <div className="md:w-[40%] w-full">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 py-4 text-transparent bg-clip-text">
            Explore the World of Tech Trends
          </h1>
          <h1 className=" text-black leading-8 font-medium">
            At TechnoBlog, we're your gateway to the ever-evolving landscape of
            technology. Dive into a plethora of insightful blogs covering a
            myriad of topics including web development, mobile applications,
            artificial intelligence, cybersecurity, and beyond. Whether you're a
            seasoned tech enthusiast or a curious newcomer, our platform caters
            to all levels of expertise. Stay ahead of the curve by immersing
            yourself in articles penned by industry experts, thought leaders,
            and passionate contributors. From cutting-edge advancements to best
            practices, our curated content ensures you're always in the know.
          </h1>
        </div>
        <div>
          <img className="w-[600px]" src="/assets/illustration6.svg" alt="" />
        </div>
      </div>
      {/*  */}
      <div
        className="w-[20px] h-[20px] rotate-45 flex items-center gap-2 text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-1 py-1 me-2 mb-2 focus:outline-none"
        aria-current="page"
      >
        <div className="bg-color2 rounded-[4.7px] p-1 h-full w-full"></div>
      </div>
      {/*  */}
      <div class="rounded-[2.5rem] flex md:flex-row flex-col justify-around items-around relative mb-6 ">
        <div>
          <img className="w-[600px]" src="/assets/illustration5.svg" alt="" />
        </div>
        <div className="md:w-[40%] w-full">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 py-4 text-transparent bg-clip-text">
            Empowering Minds, Igniting Creativity:
          </h1>
          <h1 className="text-black leading-8 font-medium">
            Our mission at TechnoBlog extends beyond mere information
            dissemination. We believe in fostering a community where ideas
            flourish and creativity thrives. Engage with fellow tech enthusiasts
            through comments, discussions, and sharing of experiences. Have
            burning questions or seeking advice? Our vibrant community is here
            to offer insights and support, transforming learning into a
            collaborative journey. Whether you're seeking inspiration for your
            next project or looking to expand your skill set, TechnoBlog
            provides the platform for you to unleash your full potential.
          </h1>
        </div>
      </div>
      {/*  */}
      <div
        className="w-[20px] h-[20px] rotate-45 flex items-center gap-2 text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-1 py-1 me-2 mb-2 focus:outline-none"
        aria-current="page"
      >
        <div className="bg-color2 rounded-[4.7px] p-1 h-full w-full"></div>
      </div>
      {/*  */}
      <div class="rounded-[2.5rem] flex md:flex-row flex-col justify-around items-around relative my-6">
        <div className="md:w-[40%] w-full">
          <h1 className="text-3xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 py-4 text-transparent bg-clip-text">
            Your Personalized Tech Hub:
          </h1>
          <h1 className="text-[#333333] leading-8 font-medium">
            Customize your TechnoBlog experience to suit your preferences and
            interests. With a user-friendly interface and intuitive navigation,
            discovering relevant content has never been easier. Tailor your feed
            to receive updates on your favorite topics and contributors,
            ensuring you never miss out on the latest insights. Whether you
            prefer to binge-read articles during your downtime or stay updated
            on-the-go with our mobile-friendly interface, TechnoBlog adapts to
            your lifestyle. Join us on this journey of exploration and
            discovery, as we delve deeper into the realms of technology
            together.
          </h1>
        </div>
        <div>
          <img className="w-[600px]" src="/assets/illustration7.svg" alt="" />
        </div>
      </div>
    </div>
  );
};

export default Landing;
