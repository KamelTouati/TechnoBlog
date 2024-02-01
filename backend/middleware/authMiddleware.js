const jwt = require("jsonwebtoken");
const asyncHandler = require("express-async-handler");
const User = require("../models/userModel");

const protect = asyncHandler(async (req, res, next) => {
  try {
    // Get token from header
    const token = req.cookies.token;
    if (!token) {
      res.status(401);
      throw new Error("Not authorized, no token");
    }
    // Verify token
    const decoded = jwt.verify(token, process.env.JWT_SECRET);

    // Get user from the token
    req.user = await User.findById(decoded.id).select("-password");

    next();
  } catch (error) {
    console.log(error);
    res.status(401);
    throw new Error("Not authorized");
  }
});

//admin only
const adminOnly = (req, res, next) => {
  if (req.user && req.user.role === "admin") {
    next();
  }else {
    res.status(401);
    throw new Error("Not authorized as an admin");
  }
};
module.exports = { protect, adminOnly };
