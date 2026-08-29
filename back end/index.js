const express = require("express");
const dotenv = require("dotenv");
const mongoose = require("mongoose");
const booksRoutes = require("./routes/booksRoutes");
const cors = require("cors")
const UserRoute = require("./routes/User.Route")

dotenv.config();


const app = express();
app.use(cors())

const PORT = process.env.PORT || 3001;
const MongoURI = process.env.MongoDbURI;

app.use(express.json());

app.get("/", (req, res) => res.send("Server is running!"));

app.use("/books", booksRoutes);
app.use("/user",UserRoute)
mongoose.connect(MongoURI)
  .then(() => {
    console.log("MongoDB connected successfully");
    app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
  })
  .catch((err) => console.log("MongoDB connection error:", err));