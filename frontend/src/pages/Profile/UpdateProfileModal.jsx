import { useState } from "react";
import "./updateProfileModal.css";
import { useDispatch } from "react-redux";
import { updateProfile } from "../../redux/apiCalls/profileApiCall";
import { MdModeEdit } from "react-icons/md";
import { IoIosCloseCircleOutline } from "react-icons/io";

const UpdateProfileModal = ({ setUpdateProfile, profile }) => {
  const dispatch = useDispatch();

  const [username, setUsername] = useState(profile.username);
  const [bio, setBio] = useState(profile.bio);
  const [password, setPassword] = useState("");

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();

    const updatedUser = { username, bio };

    if (password.trim() !== "") {
      updatedUser.password = password;
    }

    dispatch(updateProfile(profile?._id, updatedUser));
    setUpdateProfile(false);
  };

  return (
    <div className="update-profile">
      <form onSubmit={formSubmitHandler} className="update-profile-form">
        <div className="flex justify-between">
          <h1 className="text-xl font-medium bg-gradient-to-r from-purple-600 to-blue-500 my-2 text-transparent bg-clip-text">
            Update Your Profile
          </h1>
          <abbr
            title="close"
            className="flex items-center gap-2 w-fit cursor-pointer text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm p-1  focus:outline-none"
          >
            <div className="bg-color2 rounded-[4.7px] p-1">
              <IoIosCloseCircleOutline
                onClick={() => setUpdateProfile(false)}
              />
            </div>
          </abbr>
        </div>
        <input
          type="text"
          className="update-profile-input"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Username"
        />
        <input
          type="text"
          className="update-profile-input"
          value={bio}
          onChange={(e) => setBio(e.target.value)}
          placeholder="Bio"
        />
        <input
          type="password"
          className="update-profile-input"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <button
          type="submit"
          className="flex items-center gap-2 w-fit text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2  focus:outline-none"
        >
          Update
          <div className="bg-color2 rounded-[4.7px] p-1">
            <MdModeEdit />
          </div>
        </button>
      </form>
    </div>
  );
};

export default UpdateProfileModal;
