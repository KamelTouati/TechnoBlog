const express = require("express");
const cors = require("cors");
const cookieParser = require("cookie-parser");
const connectDB = require("./config/connectToDb");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler, notFound } = require("./middlewares/error");

// Connection To Db
connectDB();

const app = express();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Apply CORS middleware before other middleware

app.use(express.json());
app.use(cookieParser());
app.use(express.urlencoded({ extended: false }));

// Routes
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));
app.use("/api/posts", require("./routes/postsRoutes"));
app.use("/api/comments", require("./routes/commentsRoutes"));
app.use("/api/categories", require("./routes/categoriesRoutes"));
app.use("/api/password", require("./routes/passwordRoutes"));

// Error Handler Middleware
app.use(notFound);
app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
