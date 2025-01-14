import express from "express";
import connectDB from "./config/mongo.js";
import dotenv from "dotenv";
dotenv.config();
import {
  userSignUp,
  userLogin,
  todoPost,
  todoEdit,
  todoDelete,
} from "./Controllers/userController.js";
import authorization from "./MiddleWears/authorization.js";

connectDB();
const app = express();
app.use(express.json());

app.post("/SignUP", userSignUp);
app.post("/login", userLogin);
app.post("/todo", authorization, todoPost);
app.post("/todo/update/:id",authorization,todoEdit);
app.post("/todo/delete/:id",authorization,todoDelete);

const PORT = process.env.PORT;
app.listen(PORT, () => {
  console.log(`Server Runnning On ${PORT}...`);
});
