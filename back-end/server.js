//dotenv
require("dotenv").config();
// connect DB
const { connectDB } = require("./configs/db");

connectDB();
const express = require("express");
const cors = require("cors");
const authRoute = require("./routes/authRoute");
const postRoute = require("./routes/postRoute");
const { errorHandler } = require("./middleware/errorHandler");
const app = express();

const port = process.env.APP_PORT;

// Cors
app.use(cors());

// Body Parsers
app.use(express.json());

//Mount the route
app.use("/api/v1/auth", authRoute);
app.use("/api/v1/posts", postRoute);

// Unhandled Route
app.all("*", (req, res, next) => {
  const err = new Error("The route can not be found");
  err.statusCode = 404;
  next(err);
});
app.use(errorHandler);

app.listen(port, () => {
  console.log(`server is running on port ${port}`);
});
