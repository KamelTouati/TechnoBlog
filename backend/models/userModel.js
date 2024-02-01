const mongoose = require("mongoose");
const { objectId } = mongoose.Schema;
const Joi = require("joi");

const userSchema = mongoose.Schema(
  {
    username: {
      type: String,
      required: [true, "Please add a name"],
      trim: true,
      minlength: 2,
      maxlength: 100,
    },
    email: {
      type: String,
      required: [true, "Please add an email "],
      trim: true,
      minlength: 2,
      maxlength: 100,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please add a password"],
      trim: true,
      minlength: 8,
    },
    profilePhoto: {
      type: Object,
      default: {
        url: "https://seekicon.com/free-icon-download/user_1.svg",
        publicId: null,
      },
    },
    bio: {
      type: String,
    },
    isAdmin: {
      type: Boolean,
      default: false,
    },
    isAccountVerified: {
      type: Boolean,
      default: false,
    },
  },
  {
    timestamps: true, // to replace createdAt, updatedAt fields
  }
);

const User = mongoose.model("user", userSchema);

// Validate Register User
function validateRegisterUser(obj) {
  const schema = Joi.object({
    username: Joi.string().trim().min(2).max(100).required(),
    email: Joi.string().trim().min(5).max(100).required().email(),
    password: Joi.string().trim().min(8).required(),
  });
  return schema.validate(obj);
}

module.exports = { User, validateRegisterUser };
