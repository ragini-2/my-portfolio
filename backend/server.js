const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");

const app = express();

app.use(cors());
app.use(express.json());

// MongoDB connection
mongoose.connect("mongodb://127.0.0.1:27017/portfolioDB");

// Schema
const MessageSchema = new mongoose.Schema({
  name: String,
  email: String,
  message: String
});

const Message = mongoose.model("Message", MessageSchema);

// API route
app.post("/contact", async (req, res) => {
  const data = new Message(req.body);
  await data.save();
  res.send("Message saved to MongoDB");
});

// Start server
app.listen(5000, () => {
  console.log("Backend running on port 5000");
});