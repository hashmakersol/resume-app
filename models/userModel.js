const mongoose = require("mongoose");

const userSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: [true, "Please enter your name!"],
      trim: true,
    },
    email: {
      type: String,
      required: [true, "Please enter your email!"],
      trim: true,
      unique: true,
    },
    password: {
      type: String,
      required: [true, "Please enter your password!"],
    },
    role: {
      type: Number,
      default: 0, // 0 = user, 1 = admin
    },
    avatar: {
      type: String,
      default:
        "https://th.bing.com/th/id/R.766b6dbdd4aa56b8ac77b89e01779c2d?rik=EQTuWTnvmMBQFw&pid=ImgRaw&r=0",
    },
  },
  {
    timestamps: true,
  }
);

module.exports = User = mongoose.model("users", userSchema);
