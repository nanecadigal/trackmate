const jwt = require("jsonwebtoken");
require("dotenv").config();
const secret = process.env.AUTH_SECRET;

// Middleware to verify and decode JWT token
const authenticate = (req, res, next) => {
  const token = req.headers.authorization?.split(" ")[1];

  if (!token) {
    return res
      .status(401)
      .send({ message: "No token, authorization denied", success: false });
  }

  try {
    const decodedToken = jwt.verify(token, secret);
    req.user = decodedToken;
    next();
  } catch (error) {
    res.status(401).json({ message: "Invalid token", success: false });
  }
};

module.exports = authenticate;
