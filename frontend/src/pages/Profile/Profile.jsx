import "./Profile.css";
import { useState, useEffect } from "react";
import { toast } from "react-toastify";
import { useDispatch, useSelector } from "react-redux";
import { useParams, useNavigate } from "react-router-dom";
import swal from "sweetalert";
import UpdateProfileModal from "./UpdateProfileModal";
import {
  deleteProfile,
  getUserProfile,
  uploadProfilePhoto,
} from "../../redux/apiCalls/profileApiCall";
import { PostCard } from "../../components";
import { Oval } from "react-loader-spinner";
import { logoutUser } from "../../redux/apiCalls/authApiCall";
import { MdModeEdit, MdDelete } from "react-icons/md";
import { FaCameraRetro } from "react-icons/fa";

const Profile = () => {
  const dispatch = useDispatch();
  const { profile, loading, isProfileDeleted } = useSelector(
    (state) => state.profile
  );
  const { user } = useSelector((state) => state.auth);

  const [file, setFile] = useState(null);
  const [updateProfile, setUpdateProfile] = useState(false);

  const { id } = useParams();

  useEffect(() => {
    dispatch(getUserProfile(id));
    window.scrollTo(0, 0);
  }, [id]);

  const navigate = useNavigate();
  useEffect(() => {
    if (isProfileDeleted) {
      navigate("/");
    }
  }, [navigate, isProfileDeleted]);

  // Form Submit Handler
  const formSubmitHandler = (e) => {
    e.preventDefault();
    if (!file) return toast.warning("ther is no file!");

    const formData = new FormData();
    formData.append("image", file);

    dispatch(uploadProfilePhoto(formData));
  };

  // Delete Account Handler
  const deleteAccountHandler = () => {
    swal({
      title: "Are you sure?",
      text: "Once deleted, you will not be able to recover profile!",
      icon: "warning",
      buttons: true,
      dangerMode: true,
    }).then((isOk) => {
      if (isOk) {
        dispatch(deleteProfile(user?._id));
        dispatch(logoutUser());
      }
    });
  };

  if (loading) {
    return (
      <div className="profile-loader">
        <Oval
          height={120}
          width={120}
          color="#000"
          wrapperStyle={{}}
          wrapperClass=""
          visible={true}
          ariaLabel="oval-loading"
          secondaryColor="grey"
          strokeWidth={3}
          strokeWidthSecondary={3}
        />
      </div>
    );
  }

  return (
    <section className="profile bg-bgColor">
      <div className="profile-header">
        <div className="profile-image-wrapper">
          <img
            src={file ? URL.createObjectURL(file) : profile?.profilePhoto?.url}
            alt=""
            className="profile-image"
          />
          {user?._id === profile?._id && (
            <form onSubmit={formSubmitHandler}>
              <abbr title="choose profile photo">
                <label htmlFor="file" className="upload-profile-photo-icon">
                  <FaCameraRetro />
                </label>
              </abbr>
              <input
                style={{ display: "none" }}
                type="file"
                name="file"
                id="file"
                onChange={(e) => setFile(e.target.files[0])}
              />
              <button className="upload-profile-photo-btn" type="submit">
                upload
              </button>
            </form>
          )}
        </div>
        <h1 className="profile-username">{profile?.username}</h1>
        <p className="profile-bio">{profile?.bio}</p>
        <div className="user-date-joined">
          <strong>Date Joined: </strong>
          <span>{new Date(profile?.createdAt).toDateString()}</span>
        </div>
        {user?._id === profile?._id && (
          <button
            onClick={() => setUpdateProfile(true)}
            className="flex items-center gap-2 text-white bg-color1 focus:ring-4 focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 me-2 mb-2 focus:outline-none"
          >
            Update Profile
            <div className="bg-color2 rounded-[4.7px] p-1">
              <MdModeEdit />
            </div>
          </button>
        )}
      </div>
      <div className="profile-posts-list">
        <div class="p-4 grid grid-cols-1 gap-4">
          {profile?.posts?.map((post) => (
            <PostCard
              key={post._id}
              post={post}
              username={profile?.username}
              userId={profile?._id}
            />
          ))}
        </div>
      </div>
      {user?._id === profile?._id && (
        <button
          onClick={deleteAccountHandler}
          className="flex items-center gap-2 text-white bg-color1 focus:ring-4
          focus:ring-blue-300 font-medium rounded-[4.7px] text-sm px-3 py-2 me-2
          mb-2 focus:outline-none"
        >
          Delete Your Account
          <div className="bg-color2 rounded-[4.7px] p-1">
            <MdDelete />
          </div>
        </button>
      )}
      {updateProfile && (
        <UpdateProfileModal
          profile={profile}
          setUpdateProfile={setUpdateProfile}
        />
      )}
    </section>
  );
};

export default Profile;
