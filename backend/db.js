const mongoose = require("mongoose");

const connectDB = async () => {
  try {
    await mongoose.connect("mongodb+srv://shubhamkc194:shubhamkc2005@cluster0.yrzhttm.mongodb.net/paytm");
    console.log("✅ MongoDB connected successfully");
  } catch (err) {
    console.error("❌ MongoDB connection failed:", err);
    process.exit(1);
  }
};

connectDB();

const userSchema = new mongoose.Schema({
  username: String,
  password: String,
  firstName: String,
  LastName:String
});

module.exports = mongoose.model("User", userSchema);
