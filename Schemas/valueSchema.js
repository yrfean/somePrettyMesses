import mongoose from "mongoose";

const valueSchema = new mongoose.Schema({
  Value: {
    type: String,
    required: true,
  },
  Done: {
    type: Boolean,
  },
});

const valueModel = new mongoose.model("Value", valueSchema);
export default valueModel;
