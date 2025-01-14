import mongoose, { Mongoose } from "mongoose";
import dotenv from "dotenv";
dotenv.config();

const connectDB = async () => {
  const { connection } = await mongoose.connect(process.env.MONGO_URI);
//   console.log(connection.host);
};

export default connectDB;
