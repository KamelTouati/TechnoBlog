const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const colors = require("colors");
const dotenv = require("dotenv").config();
const { errorHandler } = require("./middleware/errorMiddleware");
const app = express();

connectDB();

const corsOptions = {
  origin: "http://localhost:5173",
  methods: "GET,HEAD,PUT,PATCH,POST,DELETE",
  credentials: true,
  optionSuccessStatus: 200,
};

app.use(cors(corsOptions)); // Apply CORS middleware before other middleware

app.use(express.json());
app.use(express.urlencoded({ extended: false }));

// Routes should come after CORS middleware
app.use("/api/auth", require("./routes/authRoutes"));
app.use("/api/users", require("./routes/usersRoutes"));

app.use(errorHandler);

const PORT = process.env.PORT || 5000;

app.listen(PORT, () => console.log(`Server started on port ${PORT}`));
