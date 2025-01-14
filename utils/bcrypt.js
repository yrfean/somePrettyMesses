import bcrypt from "bcrypt";

const hashPassword = (userPass, intensity) => {
  if(!userPass || !intensity){
    throw new Error("BOTH userpass and intensity is required");
    
  }
  return bcrypt.hash(userPass, intensity);
};

const comparePassword = (userPass, dbPass) => {
  if(!userPass||!dbPass){
    throw new Error("One of the pass is missing");
  }
  return bcrypt.compare(userPass, dbPass);
};
export { hashPassword, comparePassword };
