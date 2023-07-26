const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");
require("dotenv").config();
const User = require("../../models/Users");

const secret = process.env.AUTH_SECRET;

exports.register = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
    const userExists = await User.findOne({ email });
    if (userExists) {
      return res.status(403).send({
        message: "User already exists",
      });
    }

    if (!firstname || !lastname || !email || !password) {
      return res.status(400).send({
        success: false,
        message: "Please fill all the missing fields",
      });
    }
    const hashedPassword = await bcrypt.hash(password, 10);

    // TODO: Save the user details to database
    const model = new User();
    model.firstname = firstname;
    model.lastname = lastname;
    model.email = email;
    model.password = hashedPassword;
    model.save().then(async (doc) => {
      if (!doc || doc.length === 0) {
        res.status(500).send("Internal server error");
      }
    });

    const token = jwt.sign({ email }, secret);

    res.status(200).send({
      token,
      model,
      success: true,
      message: "User created successfully",
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      status: false,
      message: err.message || err,
    });
  }
};
