const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

const User = require("../../models/Users");

exports.register = async (req, res) => {
  const { firstname, lastname, email, password } = req.body;

  try {
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

    const token = jwt.sign({ email }, "myJWTPass123456");

    res.json({ token, model, success: true });
    console.log({
      token,
      model,
    });
  } catch (err) {
    console.error(err);
    res.status(500).send({
      status: false,
      message: err.message || err,
    });
  }
};
