import jwt from "jsonwebtoken";

const createToken = (user, secretPass) => {
  if (!user) {
    throw new Error("user is missing");
  }
  return jwt.sign(user, secretPass);
};

const verifyToken = (userToken, secretPass) => {
  if (!secretPass || !userToken) {
    throw new Error("One of The token is missing..MAybe bothh");
  }
  return jwt.verify(userToken, secretPass);
};

export { createToken, verifyToken };
