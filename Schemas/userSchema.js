import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
  Name: {
    type: String,
    require: true,
    unique: true,
  },
  Password: {
    type: String,
    require: true,
  },
  Profession: {
    type: String,
    require: true,
  },
});

const userModel = mongoose.model("User", userSchema);
export default userModel;
