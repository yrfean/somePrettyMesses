import userModel from "../Schemas/userSchema.js";
import valueModel from "../Schemas/valueSchema.js";
import { comparePassword, hashPassword } from "../utils/bcrypt.js";
import { createToken } from "../utils/jwt.js";
// import mongoose from "mongoose";

// SIGN-UP
const userSignUp = async (req, res) => {
  const { Name, Profession, Password } = req.body;
  try {
    const hashed = await hashPassword(Password, 1);
    const saveUSer = await new userModel({
      Name,
      Password: hashed,
      Profession,
    });
    //   console.log(saveUSer);
    saveUSer.save();
    res.send("U r Savedd😊👍 and Dont Worry Pass is Hashed😁");
  } catch (error) {
    console.error(error);
  }
};

// LOGIN
const userLogin = async (req, res) => {
  const { Name, Password } = req.body;
  if (!Name) {
    return res.send("NO NO NO Where ur NAME?");
  }
  if (!Password) {
    return res.send("Wat abt pass?");
  }
  try {
    const user = await userModel.findOne({ Name });
    const isPassCorrect = await comparePassword(Password, user.Password);
    if (!isPassCorrect) {
      return res.send("Mhh Pass is NOT correct brooo");
    }
    const token = await createToken(Name, "ALOHAMORA");
    // console.log(token);
    res.send(`U R IN😁👍 and token is ${token}`);
  } catch (error) {
    console.error(error);
  }
};

// TO-DO POST
const todoPost = async (req, res) => {
  const { Value, Done } = req.body;
  if (!Value) {
    return res.send("But u Have to type something if u want to ADD😊🤷‍♂️");
  }
  try {
    const saveValue = await valueModel({ Value, Done });
    // console.log(saveValue);
    const valueSaved = saveValue.save();
    res.send("Value Saved😁👍");
  } catch (error) {
    console.error(error);
  }
};

// TO-DO UPDATE
const todoEdit = async (req, res) => {
  const valueId = req.params.id;
  const { Value, Done } = req.body;
  if (!Value && Done == null) {
    return res.send("Bro again no value,no saving😢🤷‍♂️");
  }
  try {
    const updating = await valueModel.findByIdAndUpdate(
      valueId,
      { Value, Done },
      {
        new: true,
      }
    );
    if (!updating) {
      return res
        .status(404)
        .send("Either Value didnt Update ORR couldnt Find Value Doc");
    }
    res.send("Value updated😁👍");
  } catch (error) {
    console.error(error);
  }
};

//TO-DO DELETE

const todoDelete = async (req, res) => {
  const { id } = req.params;
  if (!id) {
    return res.status(404).send("id wasnt reall");
  }
  try {
    const deletingTodo = await valueModel.findByIdAndDelete(id);
    if (!deletingTodo) {
      return res.status(404).send("it somehow didnt work");
    }
    res.send("Deleted Succesfullyyyy🥳🥳🥳");
  } catch (error) {
    console.error(error);
  }
};

export { userSignUp, userLogin, todoPost, todoEdit, todoDelete };
