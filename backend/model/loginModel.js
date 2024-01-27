const mongoose = require("mongoose");
const bcrypt = require("bcrypt");

const userSchema = new mongoose.Schema({
  userId: {
    type: Number,
  },
  email: {
    type: String,
    lowercase: true,
  },
  mobile: {
    type: String,
  },
  password: {
    type: String,
  },
  createdAt: {
    type: Date,
    default: Date.now,
  }
});



const userModel = mongoose.model("User", userSchema);

module.exports = userModel;