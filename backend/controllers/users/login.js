const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/Users");

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

    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res
        .status(401)
        .send({ message: "Invalid credentials", status: false });
    }

    const token = jwt.sign({ email }, "myJWTPass123456");

    res.json({ token });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      status: false,
      message: err.message || err,
    });
  }
};
