const asyncHandler = require("express-async-handler");
const bcrypt = require("bcryptjs");
const { User, validateRegisterUser } = require("../models/user");

/*
    @desc Register New User
    @router /api/auth/register
    @method POST
    @access public
*/

module.exports.registerUser = asyncHandler(async (req, res) => {
  // validation
  const { error } = validateRegisterUser(req.body);
  if (error) {
    return res.status(400).json({ message: error.details[0].message });
  }
  // is user already exists
  let user = await User.findOne({ email: req.body.email });
  if (user) {
    return res.status(400).json({ message: "User already exists" });
  }
  // hash the password
  const salt = await bcrypt.getSalt(10);
  const hashedPassword = await bcrypt.hash(req.body.password, salt);
  // new user and save it to DB
  user = new User({
    username: req.body.username,
    email: req.body.email,
    password: hashedPassword,
  });

  await user.save();
  // send a response to client
  res.status(201).json({ message: "You register successfully, please log in" });
});
