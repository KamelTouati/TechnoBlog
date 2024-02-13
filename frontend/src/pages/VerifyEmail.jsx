import { Link, useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { useEffect } from "react";
import { verifyEmail } from "../redux/apiCalls/authApiCall";
import { IoLogInOutline } from "react-icons/io5";

const VerifyEmail = () => {
  const dispatch = useDispatch();
  const { isEmailVerified } = useSelector((state) => state.auth);

  const { userId, token } = useParams();

  useEffect(() => {
    dispatch(verifyEmail(userId, token));
  }, [userId, token]);

  return (
    <section>
      {console.log("isEmailVerified :", isEmailVerified)}
      {isEmailVerified ? (
        <>
          <div className="bg-bgColor">
            <div class="rounded-[2.5rem] flex justify-around items-around relative">
              <div className="flex flex-col items-center">
                <h1 className="text-3xl font-medium bg-gradient-to-r from-purple-600 to-blue-500 py-10 text-transparent bg-clip-text">
                  Your email address has been successfully verified
                </h1>
                <Link
                  to="/login"
                  className="flex w-fit items-center gap-2 text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 me-2 mb-2 focus:outline-none"
                  aria-current="page"
                >
                  Go to login page
                  <div className="bg-color2 rounded-[4.7px] p-1">
                    <IoLogInOutline />
                  </div>
                </Link>
              </div>
              <div>
                <img
                  className="w-[500px]"
                  src="/assets/illustration9.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </>
      ) : (
        <>
          <div className="bg-bgColor">
            <div class="rounded-[2.5rem] flex justify-around items-center relative">
              <div>
                <h1 className="text-5xl font-bold bg-gradient-to-r from-purple-600 to-blue-500 py-10 text-transparent bg-clip-text">
                  Not Found :)
                </h1>
              </div>
              <div>
                <img
                  className="w-[500px]"
                  src="/assets/illustration10.svg"
                  alt=""
                />
              </div>
            </div>
          </div>
        </>
      )}
    </section>
  );
};

export default VerifyEmail;
