const express = require("express");
const dotenv = require("dotenv");
const connectDB = require("./config/db");
const userRoutes = require("./routes/userRoutes");
const chatRoutes = require("./routes/chatRoutes");
const messageRoutes = require("./routes/messageRoutes");
const cors = require("cors");

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

dotenv.config();
app.use(express.json());
connectDB();

const PORT = process.env.PORT || 3000;

app.listen(PORT || 3000);
