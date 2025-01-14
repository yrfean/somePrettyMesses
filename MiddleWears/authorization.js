import { verifyToken } from "../utils/jwt.js";

const authorization = (req, res, next) => {
  const userToken = req.headers.authorization;
  if (!userToken) {
    res.status(404).send("Where the hell is token??🤨🔫");
  }
  const isTokenCorrect = verifyToken(userToken, "ALOHAMORA");
  if (!isTokenCorrect) {
    return res.status(404).send("A wrong TOken huh??😒");
  }
  // res.send("HELL yeah ur token IS RIght"); Y cant i give res as tis and from next too at same time?
  next();
};
export default authorization;
