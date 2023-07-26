const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();

const User = require("../../models/Users");
const secret = process.env.AUTH_SECRET;

exports.login = async (req, res) => {
  const { email, password } = req.body;

  try {
    const user = await User.findOne({ email });
    console.log(user);

    // Check if user exists
    if (!user) {
      return res
        .status(401)
        .send({ message: "This email does not exists", status: false });
    }

    // check if the password match
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .send({ message: "Invalid credentials", status: false });
    }

    const token = jwt.sign({ email }, secret);

    res.status(200).json({ user: user.toObject(), token });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      status: false,
      message: err.message || err,
    });
  }
};
